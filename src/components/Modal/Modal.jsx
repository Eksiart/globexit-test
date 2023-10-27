import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import cls from './Modal.module.css'

const modalRootElement = document.querySelector('#modal');

const Modal = ({children, isOpen, onClose}) => {

	const element = useMemo(() => document.createElement('div'), []);

	useEffect(() => {
		if (isOpen) {
			modalRootElement.append(element);
			document.body.style.overflow = 'hidden';

			return () => {
				document.body.style.overflow = 'unset';
				modalRootElement.removeChild(element);
			}
		}
	});

	if (isOpen) {
		return createPortal(
			<div className={cls.Modal} onClick={onClose}>
				<div onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>,
			element
		);
	}

	return null;
};

export default Modal;