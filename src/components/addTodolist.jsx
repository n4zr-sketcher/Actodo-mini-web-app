function AddTodoList() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">Manage Activities</h1>
            <div>
                <input type="text" className="border my-3 mx-3 p-0.5" placeholder="Enter the next activity" />
                <button className="bg-gray-500 text-amber-50 border p-0.5 py-0.5 hover:bg-black active:bg-blue-400">Add</button>
            </div>
        </div>
    )
}

export default AddTodoList