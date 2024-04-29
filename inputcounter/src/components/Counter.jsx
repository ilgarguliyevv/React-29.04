import React, { useRef } from 'react'
import { useReducer } from 'react'
import reducer from './reducers'
const Counter = () => {

    function reducer(state, action) {
        switch (action.type) {
            case "setValue":
                return { ...state, count: state.count - action.newValue }

            case "getValue":
                return { ...state, count: state.count + action.newValue }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0, newValue: "" })

    const decInput = useRef();

    return (
        <div>
            <h3>{state.count}</h3>
            <input type="text" name="" id="" ref={decInput} />
            <button onClick={() => {
                console.log(decInput.current.value * 1);
                dispatch({
                    type: "setNewValue",
                    newValue: decInput.current.value * 1
                })
            }}>Dec</button>
            <button onClick={() => {
                dispatch({
                    type: "getValue",
                    newValue: decInput.current.value * 1
                })
            }}>Inc</button>
        </div>
    )
}

export default Counter