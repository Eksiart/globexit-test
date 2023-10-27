import cls from './UserDetailsPopup.module.css';
import classNames from "classnames";
import closeSvg from "../../assets/close.svg";

const UserDetailsPopup = ({data, closeModal}) => {
	return (
		<div className={cls.UserDetailsPopup}>
			<div className={classNames(cls.Header, "text-xl")}>
				{data?.name}
				<button onClick={closeModal}>
					<img className={cls.CloseIcon} src={closeSvg} alt="close modal" />
				</button>
			</div>
			<div className={cls.Body}>
				<div className="text-lg">Телефон:</div>
				<div>{data?.phone}</div>
				<div className="text-lg">Почта:</div>
				<div>{data?.email}</div>
				<div className="text-lg">Дата приема:</div>
				<div>{data?.hire_date}</div>
				<div className="text-lg">Должность:</div>
				<div>{data?.position_name}</div>
				<div className="text-lg">Подразделение:</div>
				<div>{data?.department}</div>
			</div>
			<div className={cls.Footer}>
				<div className="text-lg">Дополнительная информация:</div>
				<div className="text-sm">
					Разработчики используют текст в качестве заполнителя макета страницы. Разработчики используют текст в качестве заполнителя макета страницы.
				</div>
			</div>
		</div>
	);
};

export default UserDetailsPopup;