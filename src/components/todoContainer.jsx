import AddTodoList from "./addtodolist"
import TodoListCont from "./todoListCont"

function TodoContainer() {
    // const 
    return (
        <div>
            <div className="flex gap-4 flex-wrap">
                <AddTodoList/>
                <TodoListCont/>

               
            </div>
        </div>
    )



}

export default TodoContainer