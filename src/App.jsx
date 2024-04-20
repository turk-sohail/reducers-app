import { useReducer } from "react"
import { produce } from "immer";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SETVAL = "setVal";
const SUBMITVAL = "submitVal";
const RESETVAL = "reset"


function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        state.count = state.count + 1
        return
      case DECREMENT:
        state.count = state.count - 1
        return
      case SETVAL:
        state.value = action.payload
        return

      case SUBMITVAL:
        state.count = state.count + state.value
        state.value = 0
        return;

      // case RESETVAL:
      //   return {
      //     ...state,
      //     count: state.value = 0
      //   }

      default:
        return state

    }
  }

  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: 0,
    value: 0
  })


  const increment = () => {
    //setCount(count + 1);
    dispatch({
      type: INCREMENT
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT
    })
  }

  const handleChange = (e) => {
    const val = parseInt(e.target.value) || 0;
    dispatch({
      type: SETVAL,
      payload: val
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SUBMITVAL
    })
    dispatch({
      type: SETVAL,
      payload: 0
    })
  }


  return (
    <div>
      <h1>count is {state.count}</h1>
      <h1>{state.value}</h1>



      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Enter number </label>
        <input type="number" value={state.value || ""} onChange={handleChange} />
        <button>Enter</button>
      </form>
    </div>
  )
}

export default App