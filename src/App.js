import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table1 } from "./components/Table1"
import { Challenge } from "./components/Challenge"
import { Jumbo } from "./components/Jumbo"
import NavBar2 from "./components/NavBar2"

function App(props) {
  return (
    <div className="App">
      <NavBar2 />
      {/* <br />
      <br /> */}
      <Jumbo />
      <div className="container ">
        <div className="row justify-content-around">
          <div className="col-sm marginSidesClass">
            <Table1 />
          </div>
          <div className="col-sm marginSidesClass">
            <h4>Can you solve, today's chess.com's Daily Puzzle?</h4>
            <Challenge />
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default App
