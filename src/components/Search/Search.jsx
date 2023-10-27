import classNames from 'classnames';
import searchSvg from "../../assets/search.svg";
import cls from './Search.module.css'
import { useEffect, useState } from "react";
import useDebouncedValue from "../../hooks/useDebouncedValue/useDebouncedValue.js";

const Search = ({ fetchUsers }) => {
	const [search, setSearch] = useState('')
	const debouncedTerm = useDebouncedValue(search, 500)

	useEffect(() => {
		fetchUsers(debouncedTerm)
	}, [debouncedTerm, fetchUsers]);

	return (
		<div className={cls.Search}>
			<input
				className={classNames(cls.SearchInput, "text-lg")}
				onChange={(e) => setSearch(e.target.value)}
				type="search"
				placeholder="Введите имя"
			/>
			<img src={searchSvg} className={cls.SearchIcon} alt="search icon" />
		</div>
	);
};

export default Search;