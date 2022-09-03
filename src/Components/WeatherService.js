import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Icon, Input, Search, Table } from 'semantic-ui-react'

const WeatherService = () => {

  const[weather, setWeatehr] = useState()



  const searchHandler=(e)=>{
    let location = e.target.value;
    axios.get(`http://api.weatherapi.com/v1/current.json?key=a46392c3dfd041b49fd14606222706&q=${location}&aqi=no`).then((response) => {
        setWeatehr(response.data);
        console.log(response.data);
    });

  }




return(
    <Container>
    <Input label='Location'  icon placeholder='Search...'>
      <input onChange={searchHandler}/>
      <Icon name='search' />
    </Input>

        <Table celled>
            <Table.Header>
            <Table.Row>

                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Humidty</Table.HeaderCell>
                <Table.HeaderCell>Pressure</Table.HeaderCell>
                <Table.HeaderCell>Wind Speed</Table.HeaderCell>

            </Table.Row>
            </Table.Header>

            <Table.Body>


{ weather &&
                <Table.Row  >
                <Table.Cell>{weather.location.name}</Table.Cell>
                <Table.Cell>{weather.current.humidity}</Table.Cell>
                <Table.Cell>{weather.current.pressure_in}</Table.Cell>   
                <Table.Cell> {weather.current.wind_kph}</Table.Cell>
                </Table.Row>
            


}
            </Table.Body>
        </Table>
    </Container>
)

}

export default WeatherService