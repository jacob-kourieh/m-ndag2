import { useContext, useState } from "react";
import { EventContext } from "../Components/Fetch";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Order.module.css";
import BackIcon from "../img/BackIcon.svg"


function Order() {


  const location = useLocation();
  const {
    totalPrice,
    setTotalPrice,
    nrTicket,
    setNrTicket,
    orderArray,
    setOrderArray,
  } = useContext(EventContext);


 
  
  const [price, setPrice] = useState(totalPrice / nrTicket);
  console.log(price);





  useEffect(() => {
    if (totalPrice > 0) {
      setOrderArray((orderArray) => [
        ...orderArray,
        location.state.from.from.filteredResults,
      ]);
    }
  }, []);

  




  let fullArray = [];
  orderArray.forEach((element) => {
    element.map((objekt) => {
      fullArray.push(objekt);
    });
  });

  


  function addButton() {
    setNrTicket(nrTicket + 1);
    setPrice(price);
    setTotalPrice((prev) => prev + price);
  }

 



  function subButton(e) {
    if (nrTicket > 0) {
      setNrTicket(nrTicket - 1);
      setPrice(price);
      setTotalPrice((prev) => prev - price);
    }
  }




  return (
    <section className={styles.container} >
      <Link to="/Event"><img className= " backIcon" src={BackIcon} alt="Go-back" /></Link>
      <h1 className='title'>Order</h1>
      {fullArray.map((event, index) => (
        <section key={index} className={styles.tickets} >
         <article className={styles.nameDate}>
          <h2 className='title'>{event.name}</h2>

          <p className='price'>
                {event.when.date} kl {event.when.from} -
                {event.when.to}
            </p>
            </article>
          
          {nrTicket === 0 ? <p>No ticket yet</p> : null}
          

          
      {/* <h1 className={styles.FirstPrice}>{totalPrice} kr </h1> */}
      <article className={styles.ticketAmount}>
        <button value={index} onClick={({}) => subButton({ index })} className={styles.LeftBtn} >-</button>
        <span> {nrTicket} st</span>
        <button className={styles.RightBtn} onClick={addButton}>+</button>
      </article>
    
        </section>
      ))}


          <span className={styles.information}>Totalt värde på order</span>
            <span className={styles.firstPrice}>{totalPrice} SEK</span>


      <Link to="/receipt" state={{ from: { fullArray } }}>
        <button className='cart-button'> Skicka order</button>
      </Link>
    </section>
  );
}

export default Order;
