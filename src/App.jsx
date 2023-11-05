import './App.css'
import Search from "./components/Search/Search.jsx";
import UserCardsList from "./components/UserCardsList/UserCardsList.jsx";
import Modal from "./components/Modal/Modal.jsx";
import { useCallback, useEffect, useState } from "react";
import UserDetailsPopup from "./components/UserDetailsPopup/UserDetailsPopup.jsx";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [users, setUsers] = useState([]);
	const [modalData, setModalData] = useState(false);

	const fetchUsers = useCallback(async (term = '') => {
		try {
			setError(null)
			setIsLoading(true);
			const res = await fetch(`https://globexit.eksiart.ru/?term=${term}`).then(res => res.json())
			setUsers(res)
		} catch (e) {
			setError(e.message)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchUsers();
	}, []);

	const closeModal = useCallback(() => {
		setModalData(undefined)
	}, [])

	const onUserCardClick = useCallback((data) => {
		setModalData(data)
	}, [])


	return (
		<main className="container">
			<Search fetchUsers={fetchUsers}/>
			{error && <div className="text-error">Ошибка: {error}</div>}
			{isLoading && <div>Загрузка...</div>}
			{!error && !isLoading && <UserCardsList users={users} onUserCardClick={onUserCardClick}/>}
			<Modal isOpen={!!modalData} onClose={closeModal}>
				<UserDetailsPopup data={modalData} closeModal={closeModal}/>
			</Modal>
		</main>
	)
}

export default App
