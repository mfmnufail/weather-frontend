import React from "react";
import { Button, Icon, Label, Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";



const Menubar = (props) => {


  function handleItemClick() {
    return "null";
  }

  function handleDelete(){
    

    axios.delete(`http://localhost:8080/api/observer/${localStorage.getItem("Id")}`)
    localStorage.clear(); 
    window.location.reload();

  }

  return (
    <Menu color='blue' stackable>
      <Link to="/home">
        <Menu.Item name="home" onClick={handleItemClick}>
          Home
        </Menu.Item>
      </Link>

      <Link to="/weatherservice">
        <Menu.Item name="weather" onClick={handleItemClick}>
          Weather Service
        </Menu.Item>
      </Link>

      { localStorage.getItem('token') && <Link to="/weatheralert">
        <Menu.Item name="alert" onClick={handleItemClick}>
          Weather Alerts
        </Menu.Item>
      </Link>}
      { localStorage.getItem('token') && <Link to="/weatherservice">
        <Menu.Item name="logout" >
        <Button type='submit' color='blue' onClick={handleDelete}>
          <Icon name='bell slash' />
          Unsubscribe
        </Button>
        </Menu.Item>
      </Link>}
     { !localStorage.getItem('token') && <Link to="/subscribe">
        <Menu.Item name="subscribe" position="right" >
          <Button type='submit' color='red'>
          <Icon name='bell' />
          Subscribe
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          weather alert
        </Label>
        </Menu.Item>
      </Link>}
     { !localStorage.getItem('token') && <Link to="/subscribe">
        <Menu.Item name="subscribe" position="right" >
          <Button type='submit' color='blue' >
          {/* <Icon name='bell' /> */}
          Login
        </Button>
        </Menu.Item>
      </Link>}
    </Menu>
  
  );
};

export default Menubar;
