import classNames from "classnames";
import { ModalHeaderWrap, ModalWrapper } from "components/Modal/styles";
import {
	ContextType, ModalFooterProps, ModalHeaderProps, ModalProps
} from "components/Modal/typings";
import React, { useContext, useEffect, useMemo, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export const modalContext = React.createContext<ContextType | null>(null);

export const Modal: React.FC<ModalProps> = ({
	children,
	isOpen,
	onDismiss,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(isOpen);
	const value = useMemo(
		() => ({ isOpen: modalIsOpen, setIsOpen: setModalIsOpen }),
		[modalIsOpen, setModalIsOpen]
	) as ContextType;

	useEffect(() => {
		if (!modalIsOpen && onDismiss) {
			onDismiss();
		}
	}, [modalIsOpen, onDismiss]);

	useEffect(() => {
		setModalIsOpen(isOpen);
	}, [isOpen]);

	const handleOutsideClick = () => {
		setModalIsOpen(false);
		return false;
	};

	if (!modalIsOpen) {
		return null;
	}

	const className = classNames({
		modal: true,
		"is-visible": modalIsOpen,
	});

	return (
		<modalContext.Provider value={value}>
			<ModalWrapper className={className} role="dialog">
				<OutsideClickHandler
					display="block"
					onOutsideClick={handleOutsideClick}
				>
					<div className="modal-dialog">
						<div className="modal-content">{children}</div>
					</div>
				</OutsideClickHandler>
			</ModalWrapper>
		</modalContext.Provider>
	);
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({
	children,
	inline = true,
}) => {
	const className = classNames("modal-header", {
		"is-inline": inline,
	});
	return <ModalHeaderWrap className={className}>{children}</ModalHeaderWrap>;
};

export const ModalBody: React.FC = ({ children }) => (
	<div className="modal-body">{children}</div>
);

export const ModalFooter: React.FC<ModalFooterProps> = ({
	children,
	className,
}) => {
	const footerClassName = classNames("modal-footer", { className });
	return <div className={footerClassName}>{children}</div>;
};

export const ModalCloseButton: React.FC<{
	onClick?: () => void;
	className?: string;
}> = ({ children, onClick, className, ...props }) => {
	const context = useContext(modalContext);

	if (!context) {
		return null;
	}

	const { setIsOpen } = context;

	const handleClick = () => {
		setIsOpen(false);

		if (onClick) {
			onClick();
		}

		return false;
	};

	return (
		<button className={classNames('btn', className)} onClick={handleClick} {...props}>
			{children}
		</button>
	);
};
