import styles from '../../../App.module.css'

type ModalContentProps = {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ModalContent({ onClose }: ModalContentProps) {
  return (
    <div className={styles.modal}>
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}