import './App.css';
import Chessboard from "./components/chessboard/chessboard/chessboard";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MobileNavbar from "./components/navbar/mobile/navbar";
import Endcredits from "./components/endcredits/endcredits";
import PieceTray from "./components/chessboard/piecetray/piecetray"
import Square from "./components/chessboard/square/square"
import Gamelogic from "./components/logic/piecelogic";

function App() {
        var pieceSelected=false;
  return (
    <div className="App" >
       
        <MobileNavbar/>
      <Chessboard num_rows={8} num_cols={8} />
      <PieceTray/>
      <Endcredits/>
      <Gamelogic/>
      
    </div>
  );
}



export default App;
