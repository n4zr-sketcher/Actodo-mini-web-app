import Header from "./components/header"
import Card from "./components/card"

function App() {
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header />
                <div className="flex justify-between my-5 gap-7 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Coimbatore"} />
                    <Card bgcolor={"#FD6663"} title={"October 10"} subtitle={"22:17:13"} />
                    <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React js"} />
                </div>
                <div>
                    <div>AddTodolist</div>
                    <div>TodoList</div>
                </div>
            </div>


        </div>
    )
}


export default App