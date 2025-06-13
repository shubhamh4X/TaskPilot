import { useEffect, useState } from 'react';
import { getTasks } from '../services/taskService';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <ul>
        {tasks.map((task: any, idx) => (
          <li key={idx} className="mb-2 p-2 bg-gray-800 rounded">
            {task.title} – {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
