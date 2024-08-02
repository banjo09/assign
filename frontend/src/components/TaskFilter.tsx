import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/taskSlice';
import { RootState } from '../store';

const TaskFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => dispatch(setFilter('active'))} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => dispatch(setFilter('completed'))} disabled={filter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;