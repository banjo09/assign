import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.fetchTasks();
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (title: string) => {
  const response = await api.addTask(title);
  return response.data;
});

export const updateTaskStatus = createAsyncThunk('tasks/updateTaskStatus', async ({ id, completed }: { id: string; completed: boolean }) => {
  const response = await api.updateTaskStatus(id, completed);
  return response.data;
});

export const editTask = createAsyncThunk('tasks/editTask', async ({ id, title, completed }: { id: string; title: string; completed: boolean }) => {
  const response = await api.editTask(id, title, completed);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
  await api.deleteTask(id);
  return id;
});
interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: 'all' | 'active' | 'completed';
}

const initialState: TaskState = {
  tasks: [],
  status: 'idle',
  error: null,
  filter: 'all',
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTaskStatus.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task._id !== action.payload);
      });
  },
});

export const { setFilter } = taskSlice.actions;
export default taskSlice.reducer;