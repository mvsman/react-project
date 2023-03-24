import { FC, Suspense } from 'react';
import { Loader } from 'shared/components/loader';
import { Modal } from 'shared/components/modal';

import { LoginFormAsync } from '../login-form/login-form.lazy';

interface LoginModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} lazy onClose={onClose}>
    <Suspense fallback={<Loader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
