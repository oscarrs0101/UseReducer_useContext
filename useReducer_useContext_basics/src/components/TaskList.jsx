import React from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  return (
    <div className="flex justify-center">
      {/* <button onClick={() => deleteTask()}>Delete All</button> */}
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2xl mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h2>{task.title}</h2>
              <h4>{task.id}</h4>
              <p>{task.description}</p>
              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-3 mt-2 "
                onClick={() => toggleTaskDone(task.id)}
              >
                {task.done ? 'Undone' : 'Done'}
              </button>
            </div>
            <div>
              <Link
                to={`edit/${task.id}`}
                className="bg-grey-600 hover:bg-gray-500 py-2 px-4 mr-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 ,mr-2 rounded-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
