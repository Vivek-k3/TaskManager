import { BrowserRouter, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <h1>TODO</h1>
        <div className="tododiv">
        <CreateTodo className="todo" />
           <ShowTodoList className="todo1"/>

        </div>
           
            
        </div>
    );
}

export default App;
