import {useState} from 'react'
import Header from './components/Header'
import Tasks from"./components/Tasks"

function App() {
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'feb 6th at 5:30pm',
        reminder: true,

    },
    {
        id: 3,
        text: 'Shopping',
        day: 'feb 7th at 3:00pm',
        reminder: false,

    }
])

  return (
    <div className="container">
      <Header  />
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
