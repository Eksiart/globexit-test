import { memo } from "react";
import UserCard from "../UserCard/UserCard.jsx";
import cls from './UserCardsList.module.css';

const UserCardsList = memo(({ users, onUserCardClick }) => {

	if (users?.length <= 0) {
		return (
			<div className="text-error">
				Пользователи не найдены
			</div>
		)
	}



	return (
		<div className={cls.CardsList}>
			{users.map(e =>
				<UserCard
					onClick={onUserCardClick}
					key={e.name + e.phone}
					data={e}
				/>
			)}
		</div>
	);
});

export default UserCardsList;