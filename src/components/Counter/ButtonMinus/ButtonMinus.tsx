import { useContext } from 'react';
import Button from '../../Button/Button';
import { CountContext, LogicContext } from '../Counter';



const ButtonMinus = () => {
    const count = useContext(CountContext);
    const setCount = useContext(LogicContext)!;



    const handleMinus = () => {
		    setCount(count - 1);
	}

    return (
        <Button onClick={handleMinus}>-</Button>
    )
}

export default ButtonMinus;