import React, { useMemo, useState } from "react";

const calculateLength = (todos: Array<Number>) => {
    console.log('I am Calculating')
    return todos.length
}

interface LengthProps {
    todos: Array<Number>
}

const Length: React.FC<LengthProps> = (props) =>{
    const length = useMemo(() => calculateLength(props.todos),[])
    return (<div className="py-2">
        <h1 className=" p-2 text-cyan-300 border-violet-400 border-2 rounded-xl">Total todos fetched: {length}</h1>
        </div>)
}

export default Length;