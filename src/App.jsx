import { useReducer } from "react"

const INCREMENT = "increment";
const DECREMENT = "decrement";
const SETVAL = "setVal";
const SUBMITVAL = "submitVal";


function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1
        }
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        }
      case SETVAL:
        return {
          ...state,
          value: action.payload
        }

      case SUBMITVAL:
        return {
          ...state,
          count: state.count + state.value
        }

      default:
        return state

    }
  }

  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
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