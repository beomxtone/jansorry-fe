import { ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';

import { IconClose } from '#/svgs';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import * as styles from './index.css';

interface Props {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, title, onClose, children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Modal 영역 바깥을 클릭했을 때, close 이벤트를 custom hook에 전달
  useOnClickOutside(ref, () => onClose());

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalOverlay} />
      <div ref={ref} className={styles.modalWrapper}>
        <button type='button' onClick={onClose} className={styles.closeButton}>
          <IconClose />
        </button>
        {title && <div className={styles.modalTitle}>{title}</div>}
        {children}
      </div>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;