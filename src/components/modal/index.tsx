import { useEffect, useRef, useState } from 'react';
import Portal, { createContainer } from '../portal';
import './style.css';

type Props = {
  isModalOrder?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  isInfoModal?: boolean;
};
const Modal = (props: Props) => {
  const { children, onClose, isInfoModal } = props;
  const [isMounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // const handleClose: MouseEventHandler<HTMLDivElement> = useCallback(
  //   (e) => {
  //     if (isMounted && e.target?.localName === 'button') onClose?.();
  //   },
  //   [onClose]
  // );

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
      if ((event.target as Element).classList.contains('btnClose')) {
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
      <div
        className={`wrap_body ${
          isInfoModal ? 'wrap_body_info' : 'wrap_body_order'
        }`}
        ref={rootRef}
      >
        {children}
      </div>
    </Portal>
  ) : null;
};

export default Modal;
