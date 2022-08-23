import { useAppState } from "../AppState";
import Counter from "./Counter";
function DataLayer() {
  const { state, dispatch } = useAppState();

  return (
    <Counter
      count={state.count}
      add={() => dispatch({ type: "add", payload: 1 })}
      subtract={() => dispatch({ type: "subtract", payload: 1 })}
    />
  );
}

export default DataLayer