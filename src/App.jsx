import { useState } from 'react'
import './App.css'
import { FormTickets } from './components/FormTickets'
import { serviceApi } from './service/serviceApi'
import { serviceResponseApi } from './service/serviceResponseApi'
import { CardsTickets } from './components/CardsTickets';

function App() {
  const [ticketsData, setTicketsData] = useState([])
  
  const handleFormSubmit = (FormData) => {

    serviceApi(FormData)
      .then( (response) => {
       return serviceResponseApi(response)
      })
      .then((data) =>{
        setTicketsData(data)
        console.log(data)
      })
    .catch((error) => {
      console.error("Error al obtener los datos del ticket:", error);
    });
  }

  return (
    <>
    <div className='content-main-form'>
      <FormTickets onFormSubmit={handleFormSubmit}/>
    </div>
    <div className='content-main-card'>
      <h1>Current Tickets</h1>
      {ticketsData && <CardsTickets ticketData={ticketsData} />}
    </div>
    
    </>
  )
}

export default App
