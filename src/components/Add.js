import {Form,Button,Alert} from 'react-bootstrap'
import {useState} from 'react'
function Add(prop){
debugger
    const ApiUrl = "http://localhost:8000/data"
    let buttonText = prop.data?"Update":"Add"
    const [Name,SetName]=useState(prop.data?prop.data.Name:"")
    const [Email,SetEmail]=useState(prop.data?prop.data.Email:"")
    const [Mobile,SetMobile]=useState(prop.data?prop.data.Mobile:"")
    const [Address,SetAddress]=useState(prop.data?prop.data.Address:"")
    const [AlertBox,SetAlertBox]=useState(false)

    function saveData(){
        //console.warn(Name,Email)
        let data={Name,Email,Mobile,Address}
        if(prop.data){
            fetch(`${ApiUrl}/${prop.data.id}`,{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
            result.json().then((res)=>{
                console.warn("from Put Method",res)
                SetAlertBox(true)
            })
        })
        }
        else {
            fetch(ApiUrl,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
            console.warn("result from POST",result)
            SetAlertBox(true)
        })
        }
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
                    {buttonText}
                </Button>
                {
                    AlertBox?
                        <Alert variant="success" dismissible onClose={() => SetAlertBox(false)}>
                            <b>Success!!</b> Data has been successfully addded/updated
                        </Alert>
                    : " "
                }
            </Form>
        </div>
    )
}

export default Add