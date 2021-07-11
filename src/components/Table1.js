import MaterialTable from "material-table"
import React, {useState,useEffect} from "react"

export const Table1 = () =>{

    const [data, setData] = useState([])

    const columns = [
        {title:"Name", field: "name"},
        {title:"Email", field: "email"},
    ]

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>resp.json())
        .then((resp)=>{
            setData(resp)
        })
    },[])



    return(
        <div className="size">
    <MaterialTable
        title="Usuarios"
        data={data}
        columns={columns}
        options={{
          search: false,
          paging: true,
          filtering: true,
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        localization={{
          body: {
            editRow: {
              deleteText: "¿Esta seguro que desea eliminar a este usuario?",
            },
          },
        }}

      />
        </div>
    )
}