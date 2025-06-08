import { useState } from "react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    pending: [
      { id: "1", title: "Design Homepage" },
      { id: "2", title: "Write Blog Post" },
    ],
    inProgress: [{ id: "3", title: "Develop Login Page" }],
    completed: [{ id: "4", title: "Set up Repo" }],
  });

  const [draggedTask, setDraggedTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskColumn, setNewTaskColumn] = useState("pending");

  const handleDragStart = (task, fromColumn) => {
    setDraggedTask({ ...task, fromColumn });
  };

  const handleDrop = (toColumn) => {
    if (!draggedTask) return;

    const fromList = [...tasks[draggedTask.fromColumn]];
    const toList = [...tasks[toColumn]];

    const updatedFromList = fromList.filter((t) => t.id !== draggedTask.id);
    toList.push({ id: draggedTask.id, title: draggedTask.title });

    setTasks({
      ...tasks,
      [draggedTask.fromColumn]: updatedFromList,
      [toColumn]: toList,
    });

    setDraggedTask(null);
  };

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
    };

    setTasks((prev) => ({
      ...prev,
      [newTaskColumn]: [...prev[newTaskColumn], newTask],
    }));

    setNewTaskTitle("");
  };

  const columnClasses =
    "bg-gray-100 rounded-xl p-4 w-full h-full md:w-1/3 min-h-[300px]";
  const taskClasses =
    "bg-white rounded-md p-3 mb-3 shadow hover:bg-gray-100 cursor-move";

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Kanban Board</h1>

      {/* Add Task Form */}
      <div className="mb-6 max-w-3xl mx-auto flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none"
        />
        <select
          value={newTaskColumn}
          onChange={(e) => setNewTaskColumn(e.target.value)}
          className="px-3 py-2 rounded border border-gray-300"
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {/* Board */}
      <div className="flex flex-col md:flex-row gap-4">
        {["pending", "inProgress", "completed"].map((columnKey) => (
          <div
            key={columnKey}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(columnKey)}
            className={columnClasses}
          >
            <h2 className="text-xl font-semibold capitalize mb-4 text-center">
              {columnKey === "pending"
                ? "Pending"
                : columnKey === "inProgress"
                ? "In Progress"
                : "Completed"}
            </h2>
            {tasks[columnKey].map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={() => handleDragStart(task, columnKey)}
                className={taskClasses}
              >
                {task.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
