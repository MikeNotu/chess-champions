import './App.css';
import {NavBar} from './components/NavBar'
import "bootstrap/dist/css/bootstrap.min.css"
import { Table1 } from './components/Table1';


function App() {
  return (
    <div className="App">
            <NavBar/>
            <Table1/>

      <h1>Chess Champions Website</h1>
    </div>
  );
}

export default App;
