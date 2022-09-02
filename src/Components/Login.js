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
        window.location.reload()

      //   axios.get("http://localhost:8080/api/observer").then((response) => {
      //     setObserver(response.data);
      //     console.log(response.data);
      // });

        // axios.get("http://localhost:8080/api/observer").then((response) => {
        //   setObserver(response.data)
        //   console.log("observer " + response.data)
        //   // const isFound = response.data.some(element => {
        //   //   if (element.username === username || element.email === email) {
        //   //     return true;
              
        //   //   } 
          
        //   //   return false
        //   // })

        //   // if(!isFound){

        //   //   const user = {
        //   //     username: username,
        //   //     email:email
              
              
        //   //   };
            
        //   //   console.log("Login details" + JSON.stringify(user))
            
        //   //   axios.post("https://localhost:4000/login", user).then((res) => {
        //   //   });
        //   //   localStorage.setItem('token', "login success");
         
        //   // }else{
        //   //   setError("User name already exist!!!")
        //   // }

        // })  


      

      
      // window.location.reload()

        
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