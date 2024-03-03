<<<<<<< HEAD
import { useTypedDispatch, useTypedSelector } from "../../store";
import { increment, decrement } from "../../redux/slices/counterSlice";


const CounterRedux = () => {

  const count = useTypedSelector(state => state.counterReducer)
  const dispatch = useTypedDispatch();
  return(
    <>
    <div>
                <button onClick={()=> dispatch(decrement())}>-</button>
                {count}
                <button onClick={()=> dispatch(increment())}>+</button>
            </div>
    </>
  )
=======
import { increment, decrement} from "../redux/slices/CounterSlices";
import { increment as incrementStep,
		 decrement as decrementStep } from "../redux/slices/StepSlices";
import { useTypedDispatch, useTypedSelector } from "../../store";

const CounterRedux = () => {
	const count = useTypedSelector(state => state.counterReducer);
	const step = useTypedSelector(state => state.counterStepSlice);
	const dispatch = useTypedDispatch();

	return (
		<div>
			<div>
				<button onClick={() => dispatch(decrement(step))}>-</button>
				{count}
				<button onClick={() => dispatch(increment(step))}>+</button>
			</div>
			
			<br/>
			
			<div>
				<button onClick={() => dispatch(decrementStep())}>-</button>
				{step}
				<button onClick={() => dispatch(incrementStep())}>+</button>
			</div>
		</div>
	)
>>>>>>> 158e0bea8af56c2fe6de4c21ed8d70b5ffe6980e
}

export default CounterRedux;