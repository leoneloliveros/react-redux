import { useDispatch, useSelector } from 'react-redux';
import { saveTodo, updateCurrent } from '../store/actions'

const TodoForm = () => {
  const currentTodo = useSelector(state => state.currentTodo)
  const dispatch = useDispatch()

  const handleInputChange = (evt) => {
    const val = evt.target.value;
    dispatch(updateCurrent(val))
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(saveTodo(currentTodo))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} value={currentTodo} />
    </form>
  );
};

export default TodoForm;
