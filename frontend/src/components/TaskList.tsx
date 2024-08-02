import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTaskStatus } from '../store/taskSlice';
import { RootState, AppDispatch } from '../store';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, status, error, filter } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li key={task._id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(updateTaskStatus({ id: task._id, completed: !task.completed }))}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
