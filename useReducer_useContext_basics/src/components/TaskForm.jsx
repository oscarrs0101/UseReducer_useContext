import { GlobalContext } from '../context/GlobalContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate('/');
  };
  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);
  return (
    <div className="flex justify-center items-center h-3/4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3x1">
          {task.id ? 'editing task' : 'creating a task'}
        </h2>
        <div className="mb-5">
          <div className="mb-5">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Write a title"
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
              autoFocus
            />
          </div>
          <textarea
            className="py-3 px-4 focus:outline-none focus:text-grey-100 bg-gray-700 w-full"
            name="description"
            onChange={handleChange}
            rows="2"
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          {task.id ? 'edit task' : 'Create Task'} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
