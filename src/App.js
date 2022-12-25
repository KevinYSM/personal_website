import './App.css';
import Chessboard from "./components/chessboard/chessboard"

function App() {
  return (
    <div className="App" >
      <Chessboard num_rows={8} num_cols={8} />
      HI
    </div>
  );
}



export default App;
