import {Table} from 'react-bootstrap'
import {useEffect} from 'react'

function Home(){
    const ApiUrl = "http://localhost:3000/data"
    useEffect(()=>{
        fetch(("http://localhost:3000/data").then((result)=>{
            result.json().then((res)=>{
                console.warn(res)
            })
        }),[])
    })
    return(
        <div className="home">
            <h5>All Rexx</h5>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Home