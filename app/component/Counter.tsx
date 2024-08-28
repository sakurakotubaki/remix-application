import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(count + 1)
  
  return (
    <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter