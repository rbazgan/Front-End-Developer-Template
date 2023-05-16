/*import { useEffect, useState } from 'react';*/
import TaskCard from '../TaskCard/TaskCard';
import'./TasksContainer.css';

const TasksContainer = () => {
    /*const [todos, setTodos]=useState([]);*/
    
    const items = [
        { 
            id: '1',
            status: 'Todo',
            title: 'Create a Design System for Enum Workspace.',
            date: 'Due Date',
            data: '24/01/2021'

        }, 
        {   
            id: '1',
            status: 'In Progress',
            title: 'Create a Design System for Enum Workspace.',
            date: 'Due Date',
            data: '24/01/2021'

        },
        { 
            id: '1',
            status: 'Completed',
            title: 'Create a Design System for Enum Workspace.',
            date:'Due Date',
            data: '24/01/2021'

        }, 
    {
        id: '1',
        status: 'Done',
        title: 'Create a Design System for Enum Workspace.',
        date: 'Due Date',
        data: '24/01/2021'
    }, 
    {
        id: '1',
        status: 'In Progress',
        title: 'Create a Design System for Enum Workspace.',
        date: 'Due Date',
        data: '24/01/2021'
    }, 
    {
        id: '1',
        status: 'Todo',
        title: 'Create a Design System for Enum Workspace.',
        date: 'Due Date',
        data: '24/01/2021'
    },
    {
        id: '1',
        status: 'Completed',
        title: 'Create a Design System for Enum Workspace.',
        date: 'Due Date',
        data: '24/01/2021'
    },
    
    ];

    /*useEffect(() => {
      fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then((res) => {
           SetTodos(res.todos);
        });
    }, []);

    console.log(todos);*/

    return (
        <div className="tasks-container"> 
        {items.map ((item) => (
        <TaskCard key={item.id} task={item} />
        ))}
        </div>
    );
}

export default TasksContainer;