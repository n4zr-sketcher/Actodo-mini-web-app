import { useState } from "react"
import Todoitem from "./todoitem"
function TodoListCont() {
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
            id:3,
            activity:"Do yoga for 15mins"
        }
    ])



    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {
                activityArr.length===0?<p>There is no activity to do now</p>:""
            }
            {
                activityArr.map(function (item, index) {
                    return (<Todoitem item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr} id={item.id}/>)
                })
            }
        </div>
    )
}

export default TodoListCont

