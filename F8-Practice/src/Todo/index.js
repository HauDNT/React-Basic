import React, { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJob, deleteJob } from "./actions";
import Logger from "./logger";

function Todo() {
    const [state, dispatch] = useReducer(Logger(reducer), initState);
    const { job, jobs } = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(""));

        inputRef.current.focus();
    };

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                type="text"
                value={job}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span
                            onClick={() => dispatch(deleteJob(index))}
                            style={{ marginLeft: 30 }}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
