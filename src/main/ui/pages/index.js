import {getAllTodos} from "../lib/todos";

export async function getStaticProps() {
  const todos = await getAllTodos()
  return {
    props: {
      todos
    }
  }
}

export default function Home({ todos }) {
  return (
      <div className='container'>
        <h1 className='display-1'>Todo-app</h1>
        <ul className='list-group'>
          {todos._embedded.todos.map(todo => <li key={todo.description} className='list-group-item'>{todo.title}<br />{todo.description}<br />{todo.status}</li>)}
        </ul>
      </div>
  )
}