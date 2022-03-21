import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { EventContext } from "../Components/Fetch";
import styles from "./Receipt.module.css";

let seatNr;
let randomSeaction;
let section = ["A", "B", "C", "D", "E", "F"];
let receiptItem;
function Receipt() {
  const { orderArray } = useContext(EventContext);

  orderArray.forEach((element) => {
    receiptItem = element;
  });

  function randomNumber() {
    seatNr = Math.floor(Math.random() * 500);
    randomSeaction = section[Math.floor(Math.random() * section.length)];
  }

  randomNumber();
  return (
    <section id="receipt">
      {receiptItem.map((item, index) => (
        <article key={index}>

          <h3 className={styles.ticketsName}>{item.name}</h3>
          <p >WHERE</p>
          <h3 >{item.where}</h3>
          <div className={styles.ticketsContainer}>
            <p className={styles.ticketsMainWhen}>WHEN</p>
            <h3 className={styles.ticketsWhen}>{item.when.date}</h3>
            <p>FROM</p>
            <h3 className={styles.ticketsFrom} >{item.when.from}</h3>
            <p>TO</p>
            <h3 className={styles.ticketsTo}>{item.when.to}</h3>
          </div>
        </article>




      ))}
      <p>INFO</p>
      <p>Section C - seat 233, bring umbrella. - seat {seatNr} </p>

    </section>
  );
}

export default Receipt;