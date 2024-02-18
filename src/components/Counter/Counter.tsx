import { useEffect, useState } from 'react';

import Div from '../Div/Div';
import ButtonPlus from './ButtonPlus/ButtonPlus';
import ButtonMinus from './ButtonMinus/ButtonMinus';

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect( () => {
      console.log('From useEffect')
    }, [count])

    return (
        <>
            <ButtonPlus setCount={setCount} count={count} />
            <Div>{count}</Div>
            <ButtonMinus setCount={setCount} count={count} />
        </>
    );
}

export default Counter;
