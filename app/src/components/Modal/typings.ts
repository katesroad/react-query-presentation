import { Dispatch, ReactElement, SetStateAction } from 'react';

interface ElmProps {
	className?: string;
}

export interface ModalProps {
	children: ReactElement[] | ReactElement;
	isOpen: boolean;
	onDismiss?: () => void;
}

export type ContextType = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export interface ModalHeaderProps extends ElmProps {
	inline?: boolean;
}

export interface ModalFooterProps extends ElmProps {}

