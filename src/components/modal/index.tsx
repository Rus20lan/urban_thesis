import { useEffect, useRef, useState } from 'react';
import Portal, { createContainer } from '../portal';
import './style.scss';

type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  isInfoModal?: boolean;
  isSneakerModal?: boolean;
};
const Modal = (props: Props) => {
  const { children, onClose, isInfoModal } = props;
  const [isMounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createContainer({ id: 'modal-container-id' });
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMounted]);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
      if (
        (event.target as Element).classList.contains('btnClose') &&
        isInfoModal
      ) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  return isMounted ? (
    <Portal id="modal-container-id">
      <div className={`wrap_body`} ref={rootRef}>
        {children}
      </div>
    </Portal>
  ) : null;
};

export default Modal;
