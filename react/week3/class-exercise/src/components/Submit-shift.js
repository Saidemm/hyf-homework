import React from 'react';
import {useState} from 'react';


const SubmitShift = () => {
    const [name, setName] = useState("");
    const [StartTime, setStartTime] = useState(new Date());
    const [EndTime, setEndTime] = useState(new Date());
    return (
        <div>
            <form>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                <lable>Employee name</lable>
                <input type='time' value={StartTime} onChange={(event) =>setStartTime(event.target.value)}></input>
                <lable>Start time</lable>
                <input type='time' value={EndTime} onChange={(event) => setEndTime(event.target.value)}></input>
                <lable>End time</lable>
            </form>
        </div>
    )
}

export default SubmitShift;