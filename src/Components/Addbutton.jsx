import { useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { EventContext } from "./Fetch";
import { TestContext } from "../App";
import styles from "./Ticket.module.css";

export default function AddButton(props) {
  console.log(props);
  const location = useLocation();
  let getPrice;
  //Funktion som hämtar priset
  function getPriceFunction(props) {
    props.price.filteredResults.map((item) => {
      getPrice = item.price;
    });
  }
  getPriceFunction(props);
  const [price, setPrice] = useState(getPrice);
  const { test, setTest } = useContext(TestContext);

  const {
    totalPrice,
    setTotalPrice,
    nrTicket,
    setNrTicket,
    filteredResults,
    setFilteredResults,
  } = useContext(EventContext);

  //Funktioner som beräknar totalt pris
  function addButton() {
    setNrTicket(nrTicket + 1);
    setPrice(price);
    setTotalPrice((prev) => prev + price);
    setTest({
      ...filteredResults,
      nr: nrTicket,
      total: totalPrice,
    });
  }
  function subButton() {
    if (nrTicket > 0) {
      setNrTicket(nrTicket - 1);
      setPrice(price);
      setTotalPrice((prev) => prev - price);
    }
  }

  useEffect(() => {
    setNrTicket(0);
    setTotalPrice(0);
  }, []);

  console.log(test);
  return (
    <section className={styles.tickets}>
      <h1 className={styles.FirstPrice}>{totalPrice} kr </h1>
      <section className={styles.ticketAmount}>
        <button className={styles.LeftBtn} onClick={subButton}>-</button>
        <span>{nrTicket} st</span>
        <button className={styles.RightBtn} onClick={addButton}>+</button>
      </section>
    </section>
  );
}
