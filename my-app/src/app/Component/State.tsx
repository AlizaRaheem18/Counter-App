'use client'
import { useState } from "react"

const State = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }
    const handleReset= () => {
        setCount(0)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5  bg-white h-screen ">
            <div className="flex flex-col justify-center items-center gap-3 my-10 py-5 rounded-md bg-gray-500 border border-gray-500 w-64 sm:w-64 md:w-72 lg:w-80 justify-centre">
            <h1 className="text-2xl font-extrabold">Counter App</h1>
            <p  className="text-3xl">{count}</p>
            <button className="py-2 px-5 bg-blue-700 text-white  rounded-md " onClick={handleIncrement}>
                Increment
            </button>

            <button className="py-2 px-5 bg-blue-700 text-white   rounded-md " onClick={handleDecrement}>
                Decrement
            </button>
            <button className="py-2 px-6 bg-red-700 text-white   rounded-md " onClick={handleReset}>
            
                Reset
            </button>
            </div>
        </div>
    )
}

export default State