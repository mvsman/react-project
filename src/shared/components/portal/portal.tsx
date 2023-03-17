import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  parentNode?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  children,
  parentNode = document.body,
}) => ReactDOM.createPortal(children, parentNode);
