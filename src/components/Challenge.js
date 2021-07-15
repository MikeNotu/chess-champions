import React, { useState, useEffect } from "react"

export const Challenge = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.chess.com/pub/puzzle")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp)
        console.log(resp)
      })
  }, [])

  return (
    <div className="">
      {" "}
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        <img
          className="challenge"
          src={data.image}
          alt="Challenge"
          // onClick={openChallenge}
          href="https://www.cluemediator.com/"
          target="_blank"
          rel="noopener noreferrer"
        ></img>{" "}
      </a>
    </div>
  )
}
