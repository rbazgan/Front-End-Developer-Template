import './TaskCard.css';

const TaskCard = (props) => {
    const {id, status, title, date, data} = props.task;
    return (
        <div className="task-card">
            <div class="task-card-header">
            <span class="task-card-id">T-{id}</span>
            <span class="task-card-status">{status}</span>
            </div>
            <h3 class="task-card-title">{title}</h3>
            <div class="task-card-footer">
            <span class="task-card-due">{date}</span>
            <span class="task-card-data">{data}</span>
            </div>
            </div>
    )
}

export default TaskCard