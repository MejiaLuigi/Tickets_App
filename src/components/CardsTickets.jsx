import React, { useEffect, useState } from "react";

export function CardsTickets({ ticketData }) {
  const [tickets, setTickets] = useState([]);

  console.log("este es mi dato:", ticketData);

  useEffect(() => {
    setTickets(ticketData);
  }, [ticketData]);

  const handleDelete = (id) => {
    console.log("este es el id", id);
    // console.log(ticketData.filter((ticket) => ticket.id != id));
    const filteredTickets = ticketData.filter((ticket) => ticket.id != id);
    setTickets(filteredTickets);

    //como eliminar elementos de un array
  };

  return (
    <div className="content-containerCard">
      {tickets.map((ticket, index) => (
        <div className="content-card" key={index}>
          <div className="content-title">
            <h1>{ticket.title}</h1>
          </div>
          <div className="content-body">
            <p>{ticket.description}</p>
            <div className="content-second">
              <p className="priority">{ticket.priority}</p>
              <button
                className="btn-delete"
                onClick={() => handleDelete(ticket.id)}
              >
                Delete
              </button>
            </div>
            {/* <p>{ticket.resolved ? 'Sí' : 'No'}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

// {ticketData.map((ticket, index) =>
// ticket es el elemento representativo del ticketsData
//  el index es la posición que ocupa en el array general
