function Todoitem(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(delId){
        var temparr = activityArr.filter(function(item){
            if(item.id === delId){
                return false
            }
            else{
                return true
            }


        })

        setActivityArr(temparr)

    }

    return(
        <div className="flex justify-between p-1">
        <p>{props.index + 1 + "." + " " + props.item.activity}</p>
        <button className="border border-black bg-emerald-950 text-red-600 px-0.5 active:bg-gray-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )

}

export default Todoitem