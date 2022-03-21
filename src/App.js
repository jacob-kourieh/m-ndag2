import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Event from "./Pages/Event";
import EventTicket from "./Components/EventTicket";
import Order from "./Pages/Order";
import { createContext, useState, useContext } from "react";
import { Fetch } from "./Components/Fetch";
import Receipt from "./Pages/Receipt";
import Start from "./Components/Start";

export const TestContext = createContext();

function App() {
  const [test, setTest] = useState();
  return (
    <TestContext.Provider
      value={{
        test,
        setTest,
      }}
    >
      <main>
        <BrowserRouter>
          <Fetch>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/event"> Event </Link>
                </li>
                <li>
                  <Link to="/order" state={{ from: { test } }}>
                    {" "}
                    Order{" "}
                  </Link>
                </li>
              </ul>
            </nav> */}
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
    </TestContext.Provider>
  );
}

export default App;
