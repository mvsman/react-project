import { FC } from 'react';
import { Modal } from 'shared/components/modal';

import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} lazy onClose={onClose}>
    <LoginForm />
  </Modal>
);
