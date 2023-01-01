import './App.css';
import CommentBox from './components/forum/CommentBox';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Counter from './components/Counter';
import WrongState from './components/WrongState';
function App() {
  return (
    <div className="App">
     <nav>
      <Link className = "list-item"to='/'>Social</Link>
      <Link className = "list-item"to='/counter'>Couter</Link>
      <Link className = "list-item"to='/grid'>Grid</Link>
      <Link className = "list-item"to='/state'>StateObject</Link>
     </nav>
     <Routes>
      <Route path='/' element={<CommentBox />}></Route>
      <Route path='/counter' element={<Counter />}></Route>
      <Route path='/state' element={<WrongState />}></Route>
     </Routes>
    </div>
  );
}

export default App;
