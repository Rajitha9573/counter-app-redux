import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { increase, decrease, reset } from "../redux/action/counterAction";





const CounterApp = ()=>{

    const count = useSelector(state => state)

  const dispatch = useDispatch();

  function handleIncrease(){
    dispatch(increase())
    

  }
  function handleDecrease(){
    dispatch(decrease())
  }
  function handleReset(){
    dispatch(reset())
  }


    return (
        <div>
            <h1>{count}</h1>

            <button onClick={handleIncrease}> increase</button>
            <button onClick={handleDecrease}> decrease</button>
            <button onClick={handleReset}> Reset</button>

        </div>
    )
}

export default CounterApp
