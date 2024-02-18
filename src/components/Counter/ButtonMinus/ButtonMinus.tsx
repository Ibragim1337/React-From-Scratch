import Button from '../../Button/Button';

type ButtonMinusProps = {
  setCount: Function,
  count: number
}

const ButtonMinus = ({ setCount, count }: ButtonMinusProps) => {
    const handleMinus = () => {
		    setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
	}

    return (
        <Button onClick={handleMinus}>-</Button>
    )
}

export default ButtonMinus;