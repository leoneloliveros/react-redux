 
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

import { fetchTodos, deleteTodo } from '../store/actions'

const List = [
  { id: 1, isCompleted: false, name: 'Levantarse' },
  { id: 2, isCompleted: false, name: 'Comer' },
  { id: 3, isCompleted: false, name: 'Metoria' },
  { id: 4, isCompleted: false, name: 'Dormir' }
]


const TodoList = ({ filter }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)

  const onToggleTodo = (id) => {
    console.log('onToggleTodo', id);
  };

  const onDeleteTodo = (id) => {
    console.log('onDeleteTodo', id);
    dispatch(deleteTodo(id))
    // aqui la consulta a nuestro action del redux y a la base de datos
  };

  useEffect(() => {
    // fetch(`https://fakestoreapi.com/carts?sort=${filter}`)
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    // dispatch(toggleLoader(true))
    // dispatch(addTodo(List))
    // dispatch(toggleLoader(false))

    dispatch(fetchTodos())
  }, [])

  useEffect(() => {
    if (filter === 'completed') {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [filter]);

  return (
    <div className="Todo-List">
      <ul>
        {todos.filter(i => i.isCompleted === isCompleted).map((todo) => (
          <TodoItem
            key={todo.id}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            {...todo}
          />
        ))}
      </ul>
    </div>
  );
};

/**
 * Typechecking props
 */
TodoList.propTypes = {
  filter: PropTypes.string,
};

TodoList.defaultProps = {
  filter: null,
};


export default TodoList;
