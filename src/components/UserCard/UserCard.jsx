import cls from './UserCard.module.css'
import classNames from "classnames";
import phoneSvg from "../../assets/phone.svg";
import mailSvg from "../../assets/mail.svg";

const UserCard = ({data, onClick}) => {

	return (
		<div className={cls.Card} onClick={() => onClick(data)}>
			<div className={classNames("text-xl")}>{data?.name}</div>
			<div className={cls.CardText}>
				<img src={phoneSvg} alt="phone icon" />
				<div className={classNames("text-xs")}>{data?.phone}</div>
			</div>
			<div className={cls.CardText}>
				<img src={mailSvg} alt="mail icon" />
				<div className={classNames("text-xs")}>{data?.email}</div>
			</div>
		</div>
	);
};

export default UserCard;