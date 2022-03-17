import { task } from "./TaskList";

interface propTypes {
  task: task;
  canCreate: boolean;
  onChange: (value: task) => void;
  onCreate: () => void;
}

export default function renderForm(props: propTypes) {
  return (
    <>
      <h1 style={{ marginBottom: "10px" }}>C'est par ici que ca se passe.</h1>
      <label style={{ marginBottom: "10px" }}>Titre</label>
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        value={props.task.title}
        placeholder="Titre"
        onInput={(e) =>
          props.onChange({ ...props.task, title: e.currentTarget.value })
        }
      />
      <label style={{ marginBottom: "10px" }}>Description</label>
      <input
        style={{ marginBottom: "10px" }}
        type="text"
        value={props.task.description}
        placeholder="Description"
        onInput={(e) =>
          props.onChange({ ...props.task, description: e.currentTarget.value })
        }
      />
      <button
        className="btn btn-primary"
        onClick={props.onCreate}
        disabled={!props.canCreate}
      >
        Submit
      </button>
    </>
  );
}
