import React from "react";
import { Button, Icon, Label, Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";



const Menubar = (props) => {


  function handleItemClick() {
    return "null";
  }

  return (
    <Menu color='blue' stackable>
      <Link to="/home">
        <Menu.Item name="home" onClick={handleItemClick}>
          Home
        </Menu.Item>
      </Link>

      <Link to="/weather-service">
        <Menu.Item name="weather" onClick={handleItemClick}>
          Weather Service
        </Menu.Item>
      </Link>

      { localStorage.getItem('token') && <Link to="/weather-alert">
        <Menu.Item name="alert" onClick={handleItemClick}>
          Weather Alerts
        </Menu.Item>
      </Link>}
      { localStorage.getItem('token') && <Link to="/weather-service">
        <Menu.Item name="logout" onClick={() => {localStorage.clear(); window.location.reload()}}>
        <Button type='submit' color='blue'>
          <Icon name='bell slash' />
          Unsubscribe
        </Button>
        </Menu.Item>
      </Link>}
     { !localStorage.getItem('token') && <Link to="/subscribe">
        <Menu.Item name="subscribe" >
          <Button type='submit' color='red'>
          <Icon name='bell' />
          Subscribe
        </Button>
        <Label as='a' basic color='red' pointing='left'>
          weather alert
        </Label>
        </Menu.Item>
      </Link>}
    </Menu>
  
  );
};

export default Menubar;
