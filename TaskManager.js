import TasksContainer from "../TasksContainer/TasksContainer";
import './TaskManager.css';

const TaskManager = () => {
    return (
        <div className="task-manager-container">
        <h1 className="task-manager-title"> Task Manager </h1>
        <TasksContainer />
        </div>
    );
}

export default TaskManager;