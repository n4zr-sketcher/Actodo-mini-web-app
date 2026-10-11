import { useState } from "react"

function AddTodoList(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newActivity,setNewActivity] = useState("")

    function handleChange(event) {
        setNewActivity(event.target.value)

    }

   function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:newActivity}])
        setNewActivity("")
   } 


    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} type="text" className="border my-3 mx-3 p-0.5" placeholder="Enter the next activity" />
                <button onClick={addActivity} className="bg-gray-500 text-amber-50 border p-0.5 py-0.5 hover:bg-black active:bg-blue-400">Add</button>
            </div>
        </div>
    )
}

export default AddTodoList