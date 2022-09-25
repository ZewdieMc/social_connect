import './App.css';
import CommentBox from './components/CommentBox';
function App() {
  return (
    <div className="App">
     <CommentBox
     comments = {[{user:'Nathan',content:'That sounds cool'},{user:'zewdie',content:'That is good'}]}
     />
    </div>
  );
}

export default App;
