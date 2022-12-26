import './App.css';
import Chessboard from "./components/chessboard/chessboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App" >
       
        <Navbar/>
      <Chessboard num_rows={8} num_cols={8} />
      
    </div>
  );
}



export default App;
