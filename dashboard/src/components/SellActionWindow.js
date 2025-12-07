import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
//import GeneralContext from "./GeneralContext";


const SellActionWindow = ({uid}) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post ("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL"
    })
    //closeBuyWindow();
  };

  // const {closeBuyWindow} = useContext(GeneralContext);

  // const handleCancelClick = () => {
  //   closeBuyWindow();
  // }

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <span>qty.</span>
            <input
              type='number'
              name='qty'
              id='qty'
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <span>Price</span>
            <input
              type='number'
              name='price'
              id='price'
              step='0.5'
              value={stockPrice}
              onChange={(e)=> setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className='buttons'>
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>Sell</Link>
          <Link className="btn btn-grey">Cancel</Link>
        </div>
      </div>
      
    </div>
  )
};

export default SellActionWindow;
