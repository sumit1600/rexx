import {Table} from 'react-bootstrap'
import {useEffect,useState} from 'react'

function Home(){
    const ApiUrl = "http://localhost:3000/data"
    const [tableData,SetTableData]= useState([])

    useEffect(()=>{
        fetch(ApiUrl).then((result)=>{
            result.json().then((res)=>{
                //console.warn("x",res)
                SetTableData(res)
            })
        })
    },[SetTableData])

    return(
        <div className="home">
            <h5>All Rexx</h5>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    </tr>
                </thead>        
                <tbody>
                    {
                        tableData.map((item)=>
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>{item.Mobile}</td>
                            <td>{item.Address}</td>
                        </tr> 
                        )
                    }  
                </tbody>
            </Table>
        </div>
    )
}

export default Home