import { useState } from "react"
import AddTodoList from "./addtodolist"
import TodoListCont from "./todoListCont"

function TodoContainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have breakfast"
        },
        {
            id: 3,
            activity: "Do yoga for 15mins"
        }
    ])
    // const 
    return (
        <div>
            <div className="flex gap-4 flex-wrap">
                <AddTodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
                <TodoListCont activityArr={activityArr} setActivityArr={setActivityArr}/>


            </div>
        </div>
    )



}

export default TodoContainer