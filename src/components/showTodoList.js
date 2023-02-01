import { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'moment';
// let ObjectId = require('mongodb').ObjectId;


// export function ShowTodoList() {
//   const {todo, setTodo} = useState([]);
//   const [update,setUpdate] = useState(false);

//   useEffect(
//     function () {
    
//       axios
//         .get("http://localhost:8000/api/todo")
//         .then((res) => {
//           console.log(res.data);
//           setTodo(res.data);
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     },
//     [setTodo, update]
    
//   );

//     // const persists=(todoItem)=>{

//     //   console.log(todoItem)
//     //   axios
//     //     .put(`http://localhost:8000/api/todo/${todoItem._id}`,todoItem)
//     //     .then((res) => {
//     //       console.log(res.todo);
//     //       setTodo({ title: "", description: "", checked: false, assignTo: "" });
//     //     console.log(res.todo.message);
//     //     })
//     //     .catch((err) => {
//     //       console.log(err.message);
//     //     });
      
//     // }

//     function persists(e){
//       // e.preventDefault();
//       console.log(todo)
//       axios.delete(`http://localhost:8000/api/todo/`)
//     axios
//       .post(`http://localhost:8000/api/todo/`, todo)
//       .then((res) => {
//         setTodo({ title: "", description: "", checked: false, assignTo: "" });
//         console.log(res.todo.message);
//       })
//       .catch((err) => {
//         console.log("Error couldn't create TODO");
//         console.log(err.message);
//       });
//     }



//   // const persist = (newTodos) => {
//   //   fetch("http://localhost:8000/api/todo/${_id}", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "applicaton/json",
//   //     },
//   //     body: JSON.stringify(todo),
//   //   }).then(() => {});
//   // };

// //   function persist(e) {
// //     e.preventDefault();

// //     console.log({ _id }, { data });

// //     axios
// //         .put(`http://localhost:8000/api/todo/${_id}`, todo)
// //         .then((res) => {
// //             setTodo({ title: "", description: "",checked:false,assignTo:"", });
// //             console.log(res.data.message);
// //         })
// //         .catch((err) => {
// //             console.log("Failed to update todo");
// //             console.log(err.message);
// //         });
// // }

//   const toggleTodo = (id) => {
//     const newTodoList = [...todo];
//     const todoItem =newTodoList.find((todo)=>todo._id===id);
//     console.log(todoItem)
//     todoItem.checked=!todoItem.checked;
    
    
//     setTodo(newTodoList);
//     // console.log(setTodo)
//     persists(id,todoItem);
//   };
  
//   return (
//     <section className="container">
//       <section className="contents">
//         <table>
//           <tr>
//             <th>Task</th>
//             <th>Description</th>
//             {/* <th>Checked</th> */}
//             <th>Assigned to</th>
//             {/* <th>Created on</th> */}
//           </tr>
//           {todo.map((data) => (
              
//               <tr key={data.id}>
//                 <th>{data.title}</th>
//                 <th>{data.description}</th>
//                 {/* <th>
//                   <input checked={data.status}  onChange={() => toggleTodo(data._id)} type="checkbox" />
//                 </th> */}

//                 <th> {data.assignTo}</th>
//                 {/* <th>
//       {Moment(data.createdAt).format("MMM Do YYYY, h:mm:ss a")}</th> */}
//               </tr>
            
            
//           ))}
//         </table>
//       </section>
      
//     </section>
//   );
// }





export function ShowTodoList() {
  const [todo, setTodo] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(
      function () {
          axios
              .get("http://localhost:8000/api/todo")
              .then((res) => {
                  console.log(res.data);
                  setTodo(res.data);
              })
              .catch((err) => {
                  console.log(err.message);
              });
      },
      [update]
  );

 

 

  return (
      <section className="container">
          
          <section className="contents">
          <table>
          <tr>
            <th>Task</th>
            <th>Description</th>
            {/* <th>Checked</th> */}
            <th>Assigned to</th>
            {/* <th>Created on</th> */}
          </tr>
          {todo.map((data) => (
              
              <tr key={data.id}>
                <th>{data.title}</th>
                <th>{data.description}</th>
                {/* <th>
                  <input checked={data.status}  onChange={() => toggleTodo(data._id)} type="checkbox" />
                </th> */}

                <th> {data.assignTo}</th>
                {/* <th>
      {Moment(data.createdAt).format("MMM Do YYYY, h:mm:ss a")}</th> */}
              </tr>
            
            
          ))}
        </table>
          </section>
        
      </section>
  );
}
