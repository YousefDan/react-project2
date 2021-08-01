import { useReducer } from "react";
import CounterItem from "../common/CounterItem";

const counterReducer = (state, action) => {
  if (action.type === "COUNTER_HANDLER") {
    return (state = action.data);
  }
};
const Counters = () => {
  const [countersState, dispatchCounter] = useReducer(counterReducer, [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  //Increment Handler
  const incrementHandler = (counter) => {
    const allCounters = [...countersState];
    let index = allCounters.indexOf(counter);
    allCounters[index].value++;
    dispatchCounter({ type: "COUNTER_HANDLER", data: allCounters });
  };
  //Decrement Handler
  const decrementHandler = (counter) => {
    const allCounters = [...countersState];
    let index = allCounters.indexOf(counter);
    allCounters[index].value--;
    dispatchCounter({ type: "COUNTER_HANDLER", data: allCounters });
  };
  //Delete Handler
  const deleteHandler = (counter) => {
    const allCounters = countersState.filter((c) => c !== counter);
    dispatchCounter({ type: "COUNTER_HANDLER", data: allCounters });
  };

  return countersState.map((counter) => (
    <CounterItem
      onDecrement={() => decrementHandler(counter)}
      onIncremet={() => incrementHandler(counter)}
      onDelete={() => deleteHandler(counter)}
      key={counter.id}
      value={counter.value}
    />
  ));
};

export default Counters;
