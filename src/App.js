import './App.css';
import Chessboard from "./components/chessboard/chessboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/navbar";
import Endcredits from "./components/endcredits/endcredits"

function App() {
  return (
    <div className="App" >
       
        <Navbar/>
      <Chessboard num_rows={8} num_cols={8} />
      <Endcredits/>
    </div>
  );
}



export default App;
