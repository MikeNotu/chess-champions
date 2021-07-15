import MaterialTable from "material-table"
import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "relative",
    top: "15% !important",
    left: "20% !important",
    width: "60%",
    height: "7px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export const Table1 = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [data, setData] = useState([])
  const [sr, setSr] = useState([])

  const columns = [
    {
      field: "avatar",
      title: "Avatar",
      render: (rowData) => (
        <img
          src={rowData.avatar}
          style={{ width: 50, borderRadius: "50%" }}
          alt="user_avatar"
        />
      ),
    },
    { title: "Rank", field: "rank" },
    { title: "Username", field: "username" },
    { title: "Score", field: "score" },
  ]

  useEffect(() => {
    fetch("https://api.chess.com/pub/leaderboards")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.live_blitz)
      })
  }, [])

  function toggleModalWithData(selectedRow) {
    setSr(selectedRow)
    handleOpen()
  }

  return (
    <div className="size">
      {/* <p className="lead">
        Try clicking a Row from this table (Press the Icon on the top-right to
        export this table(PDF and CSV))
      </p> */}
      <MaterialTable
        title="Chess.com Blitz Ranking."
        data={data}
        columns={columns}
        onRowClick={(evt, selectedRow) => toggleModalWithData(selectedRow)}
        options={{
          search: false,
          paging: false,
          filtering: true,
          exportButton: true,
          maxBodyHeight: "30em",
          pageSize: 10,
          pageSizeOptions: [10, 25, 50],
        }}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        // className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3>
              {" "}
              <i className="fas fa-times close" onClick={handleClose}></i>
            </h3>
            <div className="container reverse-br">
              <div className="row justify-content-around">
                <div className="col-sm marginSidesClass">
                  <img
                    className="modal-smallimage "
                    src={sr.avatar}
                    alt="HID"
                  ></img>{" "}
                </div>
                <div className="col-sm marginSidesClass">
                  <h6>
                    <i className="fas fa-chess-king big-br"></i>&nbsp;Name:{" "}
                    {sr.name}
                  </h6>
                  <h6>
                    <i className="fas fa-chess-queen"></i>&nbsp;User:{" "}
                    {sr.username}
                  </h6>
                  <h6>
                    <i className="fas fa-chess-rook"></i>&nbsp;&nbsp;Title:{" "}
                    {sr.title}
                  </h6>
                  <h6>
                    {" "}
                    <i className="fas fa-chess-bishop"></i>
                    &nbsp;&nbsp;&nbsp;Score: {sr.score}
                  </h6>
                  <h6>
                    <i className="fas fa-chess-knight"></i>
                    &nbsp;&nbsp;&nbsp;Rank: {sr.rank}
                  </h6>{" "}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
