import React,{useState} from 'react'
import { Button, Checkbox, Form, Icon, Label, Segment } from 'semantic-ui-react'
import axios from 'axios'

const Login = () => {

    const[username, setUsername] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")
    const[observer, setObserver] = useState([])
    const[isFound, setIsFound] = useState()
    
    

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('token', "login success");
       

        axios.get(`http://localhost:8080/api/observer/username/${username}`).then((response) => {
          axios.get(`http://localhost:8080/api/observer/email/${email}`).then((res)=>{

            if(!response.data && !res.data ){
  
              const user = {
                username: username,
                email:email
                
                
              };
              
              console.log("Login details" + JSON.stringify(user))
              
              axios.post("http://localhost:8080/api/observer", user).then((res) => {
                console.log("Login" + res.data.id)
                localStorage.setItem('Id', res.data.id);
                window.location.reload()
              });
           
            }else{
              setError("User name already exist!!!")
            }
          })


        })  


      

      

        
      };

  return (
    <Form widths={4} onSubmit={handleSubmit} >
       <Segment style={{"margin":"200px","margin-left":"400px","width":"400px"}} >
                  
                         
    <Form.Field >
      <label>Username</label>
      <input name="name" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)} />
    </Form.Field>
    {error && <Label basic color='red' pointing>
        Username Already Exist
      </Label>}
    <Form.Field >
      <label>Email</label>
      <input name="email" type="email"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    </Form.Field>
    {/* <Form.Field >
      <label>Password</label>
      <input name="password" type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
    </Form.Field> */}

    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' color='blue'>
        <Icon name='plus' />
        Login
      </Button>
     
      </Segment> 
  </Form>
  )
}

export default Login