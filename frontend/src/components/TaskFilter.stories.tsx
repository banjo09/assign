import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import TaskFilter from "./TaskFilter";

const mockStore = configureStore([]);

export default {
  title: "Components/TaskFilter",
  component: TaskFilter,
  decorators: [
    (StoryFn) => {
      const store = mockStore({ tasks: { filter: "all" } });
      return (
        <Provider store={store}>
          <StoryFn />
        </Provider>
      );
    },
  ],
} as Meta;

const Template: StoryFn = (args) => <TaskFilter {...args} />;

export const Default = Template.bind({});
