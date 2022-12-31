import './App.css';
import Chessboard from "./components/chessboard/chessboard/chessboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileNavbar from "./components/navbar/mobile/navbar";
import Endcredits from "./components/endcredits/endcredits";
import

function App() {
  return (
    <div className="App" >
       
        <MobileNavbar/>
      <Chessboard num_rows={8} num_cols={8} />
      <Endcredits/>
      
    </div>
  );
}



export default App;
