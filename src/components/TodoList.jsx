 
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const List = [
  { id: 1, isCompleted: false, name: 'Levantarse' },
  { id: 2, isCompleted: false, name: 'Comer' },
  { id: 3, isCompleted: false, name: 'Metoria' },
  { id: 4, isCompleted: false, name: 'Dormir' }
]

const TodoList = ({ filter }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onToggleTodo = (id) => {
    console.log('onToggleTodo', id);
  };

  const onDeleteTodo = (id) => {
    
  };

  useEffect(async () => {
    
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
        {List.filter(i => i.isCompleted === isCompleted).map((todo) => (
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
