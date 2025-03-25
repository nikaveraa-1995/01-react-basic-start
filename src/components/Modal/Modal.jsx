import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal({ children, open }) {
  const dilog = useRef();

  useEffect(() => {
    if (open) {
      dilog.current.showModal();
    } else {
      dilog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dilog}>{children}</dialog>,
    document.getElementById('modal'),
  );
}
