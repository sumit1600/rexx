import {Table} from 'react-bootstrap'
import {useEffect,useState} from 'react'
import {BsTrash} from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai';
import Add from './Add';
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'

function Home(){
    const ApiUrl = "http://localhost:8000/data"
    const [tableData,SetTableData]= useState([])
    const [updateItem,SetUpdateItem]= useState({})

    useEffect(()=>{
        getData()
    },[])
    function getData(){
        fetch(ApiUrl).then((result)=>{
            result.json().then((res)=>{
                //console.warn("x",res)
                SetTableData(res)
            })
        })
    }

    function handleDelete(id){
        //console.warn(`${ApiUrl}/${id}`)
        fetch(`${ApiUrl}/${id}`,{method:'DELETE'}).then((result)=>{
            result.json().then((res)=>{
                console.warn(res)
                getData()
            })
        })
    }

    function modifyData(item){
        console.warn(1)
        return (<Add/>)
    }

    return(
        <div className="home">
            <Router>
                <Switch>
                    <Route path="/Home">
                        <h5>All Rexx</h5>
                        <Table striped bordered hover variant="dark" >
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Actions</th>
                                </tr>
                            </thead>        
                            <tbody>
                                {
                                    tableData.map((item,i)=>
                                    <tr key={i}>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Mobile}</td>
                                        <td>{item.Address}</td>
                                        <td>
                                            <Link to = {"/Add"} onClick={()=>SetUpdateItem(item)}>
                                                <AiOutlineEdit/>
                                            </Link>&nbsp;&nbsp;
                                            <Link onClick={()=>handleDelete(item.id)}>
                                                <BsTrash/>
                                            </Link>&nbsp;&nbsp;
                                        </td>
                                    </tr> 
                                    )
                                }  
                            </tbody>
                        </Table>
                    </Route>
                    <Route path="/Add">
                        <Add data={updateItem} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home