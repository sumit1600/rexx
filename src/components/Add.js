import {Form,Button} from 'react-bootstrap'
import {useState} from 'react'
function Add(){

    const ApiUrl = "http://localhost:3000/data"
    const [Name,SetName]=useState("")
    const [Email,SetEmail]=useState("")
    const [Mobile,SetMobile]=useState("")
    const [Address,SetAddress]=useState("")

    function saveData(){
        console.warn(Name,Email)
        let data={Name,Email,Mobile,Address}
        fetch(ApiUrl,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
            console.warn("result",result)
        })
    }

    return(
        <div>
            <Form onSubmit={(e)=>e.preventDefault()} style={{width:'400px'}} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={Name} onChange={(e)=>{SetName(e.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>{SetEmail(e.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="mobile" placeholder="Mobile" value={Mobile} onChange={(e)=>{SetMobile(e.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={Address} onChange={(e)=>{SetAddress(e.target.value)}}/>
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={saveData}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Add