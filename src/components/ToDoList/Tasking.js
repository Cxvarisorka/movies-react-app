import React, { useState } from "react";


function Tasking(){
    const [inputValue, setInputValue] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleChange = function(e){
        setInputValue(e.target.value);
    }

    const handleClick = function(){
        setTaskList([...taskList,inputValue]);
        setInputValue('');
    }

    const deleteItem = function(index){
        let updatedArr = [...taskList];
        updatedArr.splice(index,1);
        setTaskList(updatedArr);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={inputValue}/>
            {inputValue ? <button onClick={handleClick}>Add Task</button> : null}

            <ul>
                {taskList.map(function(task,index){
                    return <li key={index} onClick={() => deleteItem(index)}>{task}</li>
                })}
            </ul>
        </div>
    )
}

export default Tasking;