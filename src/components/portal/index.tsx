import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type containerOptions = {
  id: string;
  mountNode?: HTMLElement;
};

const createContainer = (options: containerOptions) => {
  if (document.getElementById(options.id)) {
    return;
  }
  const { id, mountNode = document.body } = options;
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', id);
  mountNode.appendChild(portalContainer);
};

type PortalProps = {
  id: string;
  children: React.ReactNode;
};

const Portal = (props: PortalProps) => {
  const { id, children } = props;

  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(
          'В разметке нет контейнера портала. Пожалуйста, добавьте контейнер портала с соответствующим атрибутом id.'
        );
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};

export { createContainer };

export default Portal;
