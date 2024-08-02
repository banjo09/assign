import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTask from './AddTask';

const mockStore = configureStore([]);

export default {
  title: 'Components/AddTask',
  component: AddTask,
  decorators: [(StoryFn) => {
    const store = mockStore({});
    return <Provider store={store}><StoryFn /></Provider>;
  }],
} as Meta;

const Template: StoryFn = (args) => <AddTask {...args} />;

export const Default = Template.bind({});