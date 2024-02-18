import { InputData } from 'src/App';
import Input from '../../Input/Input';
import styles from './FormInput.module.scss';
import { useId, useRef, useState } from "react";

type FormInputProps = InputData & {
    setInvalidInputsCount: React.Dispatch<React.SetStateAction<number>>;
}

const FormInput = ({
    labelText,
    type = 'text',
    name,
    pattern,
    setInvalidInputsCount
}: FormInputProps) => {
    // console.log(46546546);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const id = useId();

    const isValid = useRef(false);

    const handleInput = () => {
        if (inputRef.current === null) return;

        const regexp = new RegExp(`^${pattern}$`, 'ig');

        const isValidValue = regexp.test(inputRef.current.value);

        // console.log(inputRef.current.dataset.isValid);

        inputRef.current.dataset.isValid = isValidValue.toString();

        // console.log(inputRef.current.dataset.isValid);

        setInvalidInputsCount((prevInvalidCount: number) => {
            if (isValidValue === isValid.current) return prevInvalidCount;

            return prevInvalidCount + (isValidValue ? -1 : 1);
        });

        isValid.current = isValidValue;
    }

    return (
        <>
            <div className={styles['form-input']}>
                <label htmlFor={id}>{labelText}</label>
                <Input ref={inputRef} id={id} type={type} name={name} onInput={handleInput}/>
            </div>
        </>
    );
}

export default FormInput;