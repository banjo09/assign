import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/taskSlice';
import { RootState } from '../store';

const TaskFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div className="task-filter">
      {/* <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => dispatch(setFilter('active'))} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => dispatch(setFilter('completed'))} disabled={filter === 'completed'}>
        Completed
      </button> */}
      <button 
        onClick={() => dispatch(setFilter('all'))} 
        className={filter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button 
        onClick={() => dispatch(setFilter('active'))} 
        className={filter === 'active' ? 'active' : ''}
      >
        Active
      </button>
      <button 
        onClick={() => dispatch(setFilter('completed'))} 
        className={filter === 'completed' ? 'active' : ''}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;