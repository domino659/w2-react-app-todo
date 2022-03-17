export interface task {
  title: string;
  description: string;
  done: boolean;
}

interface propTypes {
  tasks: task[];
  onDelete: (index: number) => void;
  onChangeTaskStatus: (index: number) => void;
}

export default function renderTasksList(props: propTypes) {
  return (
    <>
      {props.tasks.map((task, index) => (
        <div className="card" style={{ marginBottom: "10px" }} key={index}>
          <div className="card-body">
            <h3 style={{ textDecoration: task.done ? "line-through" : "" }}>
              {task.title}
            </h3>
            <div style={{ textDecoration: task.done ? "line-through" : "" }}>
              {task.description}
            </div>
            <button
              className={task.done ? "btn btn-success" : "btn btn-warning"}
              style={{ marginRight: "10px" }}
              onClick={() => props.onChangeTaskStatus(index)}
            >
              {" "}
              {task.done ? "Uncheck" : "Check"}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => props.onDelete(index)}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
