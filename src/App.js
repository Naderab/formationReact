import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/Hello';
import TaskPage from './pages/taskPage/taskPage';
import 'antd/dist/antd.css';
function App() {
  return (<>
    <Hello/>
    <TaskPage/>
  </>
  );
}

export default App;
