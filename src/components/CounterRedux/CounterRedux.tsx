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

			<div>
				<button onClick={() => dispatch(decrementStep())}>-</button>
				{step}
				<button onClick={() => dispatch(incrementStep())}>+</button>
			</div>
		</div>
	)
}

export default CounterRedux;