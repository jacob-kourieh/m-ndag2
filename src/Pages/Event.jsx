import { useEffect, useState, useContext } from "react";
import EventCard from "../Components/EventCard";
import { Link, useLocation } from "react-router-dom";
import { EventContext } from "../Components/Fetch";

export default function Event(props) {
  const location = useLocation();
  const { filteredResults, setFilteredResults, events, setEvents } =
    useContext(EventContext);

  let textValue;
  let newEventList;

  function searchItems(e) {
    let eventList = [...events];
    textValue = e.target.value.toLowerCase();
    newEventList = eventList.filter((event) =>
      event.name.toLowerCase().includes(textValue)
    );
    setFilteredResults(newEventList);
    // console.log(filteredResults);
  }

  return (
    <EventContext.Provider
      value={{
        filteredResults,
        setFilteredResults,
        events,
        setEvents,
        newEventList,
      }}
    >
      {props.children}

      <section className="container">
        <h1 className="title">Events</h1>
        <input className="search" type="search" onChange={(e) => searchItems(e)} />
        {/* Skapar innehåll för varje objekt i events-listan */}
        {filteredResults.map((event, index) => (
          <div onClick={() => event.name.toLowerCase()} key={index}>
            <EventCard event={filteredResults} />
          </div>
        ))}
      </section>
    </EventContext.Provider>
  );
}

// export default Event;
