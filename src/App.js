import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Event from "./Pages/Event";
import EventTicket from "./Components/EventTicket";
import Order from "./Pages/Order";
import { createContext, useState, useContext } from "react";
import { Fetch } from "./Components/Fetch";
import Receipt from "./Pages/Receipt";
import Start from "./Components/Start";

export const AddPriceContext = createContext();

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [addPrice, setAddPrice] = useState();
  return (
    <AddPriceContext.Provider
      value={{
        addPrice,
        setAddPrice,
        totalPrice,
        setTotalPrice
      }}
    >
      <main>
        <BrowserRouter>
          <Fetch>
            <Routes>
            <Route path="/" element={ <Start />}></Route>
              <Route path="/event" element={<Event />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/ticket" element={<EventTicket />}></Route>
              <Route path="/receipt" element={<Receipt />}></Route>
            </Routes>
          </Fetch>
        </BrowserRouter>
      </main>
    </AddPriceContext.Provider>
  );
}

export default App;
