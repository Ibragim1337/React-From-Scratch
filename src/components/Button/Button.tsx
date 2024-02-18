import Children from '../../types/Children';
import { ReactNode} from 'react';

type ButtonProps = {
  children: ReactNode | ReactNode[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button = ({ children, onClick, className }:ButtonProps) => {
  return (
      <button className={className} onClick={onClick}>
          {children}
      </button>
  );
};

export default Button;