import { useContext } from 'react';
import Button from '../../Button/Button';
import { LogicContext } from '../Counter';


function ButtonPlus() {
  const setCount = useContext(LogicContext)!;

  const handlePlus = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Button onClick={handlePlus}>+</Button>
  );
}

export default ButtonPlus;