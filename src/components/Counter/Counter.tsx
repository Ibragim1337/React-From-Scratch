import { createContext, useState } from 'react';

import ButtonPlus from './ButtonPlus/ButtonPlus';
import ButtonMinus from './ButtonMinus/ButtonMinus';
import Display from './Display/Display';

const INITITAL_STATE = 0;

export const CountContext = createContext<number>(INITITAL_STATE);

export const LogicContext = createContext<React.Dispatch<React.SetStateAction<number>> | null>(null);


const Counter = () => {

    const [count, setCount] = useState(INITITAL_STATE);
    


    return (
        <>  <LogicContext.Provider value={setCount}>
            <CountContext.Provider value={count}>
                <ButtonPlus/>
                <Display />
                <ButtonMinus/>
            </CountContext.Provider>
            </LogicContext.Provider>
        </>
    );
}

export default Counter;
