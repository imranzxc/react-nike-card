import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [inCart, setInCart] = useState(false);
  const [detailsExtended, setDetailsExtended] = useState(false);

  const handleButton = () => {
    setInCart(true);
  };
  const handleAbout = () => {
    setInCart(false);
  };
  const handleDetails = () => {
    setDetailsExtended(true);
  };
  const removeDetails = () => {
    setDetailsExtended(false);
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="nike" />
      </div>
      <div className="main">
        <div className="text">
          <h1>Nike Sneaker</h1>
          <h1>120$</h1>
        </div>
        <div className="btn">
          {''}
          <form>
            <input type="button" value="Детали" onClick={handleDetails} />
            {detailsExtended && (
              <div className="details">
                <div onClick={removeDetails}>x</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente debitis
                  autem dolorum porro at.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
      <hr />
      <div className="footer">
        <h7>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis omnis porro laboriosam,
          veniam numquam voluptatum.
        </h7>
        <form>
          <input
            className={`active ${inCart ? 'disabled' : ''}`}
            type="button"
            disabled={inCart}
            onClick={handleButton}
            value="Добавить в корзину"></input>
          {inCart && (
            <div onClick={handleAbout} className="about">
              Удалить из корзины
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
