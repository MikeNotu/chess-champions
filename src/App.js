import "./App.css"
import { NavBar } from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Table1 } from "./components/Table1"

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <br />
      <h1>Chess Champions Website</h1>
      <br />

      <div className="container ">
        <div className="row justify-content-around">
          <div className="col-sm marginSidesClass">
            <Table1 />
          </div>
          <div className="col-sm marginSidesClass">
            <Table1 />
          </div>
        </div>
      </div>
      <div className="container ">
        <br />

        <div className="row justify-content-around">
          <div className="col-sm marginSidesClass">
            <Table1 />
            <br />
          </div>
          <div className="col-sm marginSidesClass counter-position">
            <Table1 />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
