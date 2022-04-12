import { Todo } from "../types/Todo";

type Props = {
  todo: Todo[]
}

const Todo = ({ todo }: Props) => {
  return(
    <div>
      <h1> To Do List</h1>

      <ul>
        { todo.map((todoItem, index)=>(
          <li key={index}> {todoItem.title} - {todoItem.completed.toString()} </li>
        )) }
      </ul>
    </div>
  )
}

export default Todo;

/* A cada requisição recarrega executa cara antes de carregar o components*/
export const getServerSideProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todoList: Todo[] = await res.json();


  return{
    props:{
      todo: todoList
    }
  }
}