import React, { useReducer, useRef } from "react";

const initState = {
    job: '',
    jobs: [],
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    };
};

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    };
};

const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };

            break;
        case ADD_JOB: 
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
            break;
        case DELETE_JOB: 
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs,
            };  
            break;
        default:
            throw new Error("Invalid action");
    };

    return newState;
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state;
    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));

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
                    dispatch(setJob(e.target.value))
                }}
                placeholder="Enter todo..." 
            />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>
                            {job}
                            <span 
                                onClick={() => dispatch(deleteJob(index))}
                                style={{marginLeft: 30}}
                            >
                                x
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;