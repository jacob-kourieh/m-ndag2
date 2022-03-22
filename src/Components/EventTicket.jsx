import { useContext} from "react";
import { useLocation, Link } from "react-router-dom";
import AddButton from "./Addbutton";
import { EventContext } from "./Fetch";
import styles from "./Ticket.module.css";

let btnText = "Lägg till i varukorg";
let getPrice;




function EventTicket ({ filteredResults, name, price, where, date, to }) {
  const { totalPrice } = useContext(EventContext);
  const location = useLocation();
  const { from } = location.state;



  function getPriceFunction() {
    from.filteredResults.map((item, index) => {
      getPrice = item.price;
    });
  }

  
  getPriceFunction();




  return (
   
      <section className={styles.container}>
      <h1 className='title'>Event</h1>
        <span className={styles.Ticketinfo}>You are about to score some tickets to</span>
        {from.filteredResults.map((item, index) => (
          <article key={index}>
            <h1 className='title'>{item.name}</h1>
           <p className='price'>
                {item.when.date} kl {item.when.from} -
                {item.when.to}
            </p>
            <p className='where-event'>@ {item.where}</p>
            
            
          </article>
        ))}

     
        <AddButton price={from} />
        <Link
          to="/order"
          state={{
            from: {
              name,
              price,
              where,
              date,
              to,
              from,
              totalPrice,
              filteredResults,
            },
          }}
        >
          <button className='cart-button'>{btnText}</button>
        </Link>
      </section>
   
  );
}

export default EventTicket;
