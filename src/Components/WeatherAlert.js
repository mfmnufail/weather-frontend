import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Icon, Table } from 'semantic-ui-react'

const WeatherAlert = () => {

  const[weather, setWeatehr] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/weather").then((response) => {
      setWeatehr(response.data);
      console.log(response.data);
    });
  }, []);



return(
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Index</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Humidty</Table.HeaderCell>
        <Table.HeaderCell>Pressuer</Table.HeaderCell>
        <Table.HeaderCell>Wind Speed</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>

      {weather.map((e,index)=>(

        <Table.Row key={e.id} >
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell>{e.location}</Table.Cell>
          {/* <Table.Cell>{e.humidity}</Table.Cell>
          <Table.Cell>{e.pressure}</Table.Cell> */}
          <Table.Cell>
          {e.humidity >80 && <Icon name='attention' />}
            {e.humidity}</Table.Cell>
          <Table.Cell>
          {e.pressure >29.8 && <Icon name='attention' />}
            {e.pressure}</Table.Cell>
          <Table.Cell>
          {e.wind_speed >8 && <Icon name='attention' />}
            {e.wind_speed}</Table.Cell>
        </Table.Row>
       

      ))}

    </Table.Body>
  </Table>
)

}

export default WeatherAlert