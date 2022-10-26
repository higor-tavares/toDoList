import Task from  "./Task"
import  React from "react";

export default {
    title: 'Task',
    component: Task,
    argTypes:{
        dateToDo: {control: 'date'}
    }
}

const taskTemplate = (args) => <Task {...args}/>

export const taskStoryBook = taskTemplate.bind({});

taskStoryBook.args = {
    done: false,
    name: 'Mostrar o storybook',
    dateToDo: '2022-10-26', 
    callBack: () => {}
}