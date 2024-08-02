import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTaskStatus, editTask, deleteTask } from '../store/taskSlice';
import { RootState, AppDispatch } from '../store';

const TaskList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tasks, status, error, filter } = useSelector((state: RootState) => state.tasks);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');

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

  const handleEdit = (id: string, title: string) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const handleSaveEdit = (id: string, completed: boolean) => {
    dispatch(editTask({ id, title: editTitle, completed }));
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

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
          {editingId === task._id ? (
            <>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(task._id, task.completed)}>Save</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
              <button onClick={() => handleEdit(task._id, task.title)}>Edit</button>
            </>
          )}
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;