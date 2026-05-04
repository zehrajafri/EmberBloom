import React, { useState } from "react";
import "./App.css";

const menu = {
  drinks: [
    { name: "Caramel Latte", price: 180, desc: " A rich espresso blended with steamed milk and sweet caramel for a smooth indulgence." },
    { name: "Hazelnut Cappuccino", price: 300, desc: "A warm coffee infused with nutty hazelnut flavor, perfectly balanced with creamy steamed milk." },
    { name: "Classic Espresso", price: 200, desc: "A bold and intense shot of pure coffee, delivering rich flavor and a smooth crema in every sip" },
    { name: "Iced Vanilla Coffee", price: 220, desc: "A refreshing blend of chilled coffee, milk, and sweet vanilla for a cool, smooth pick-me-up." },
    { name: "Hot Chocolate", price: 250, desc: "A comforting cup of rich, velvety chocolate melted into warm milk for a cozy indulgence." }
  ],
  snacks: [
    { name: "Butter Croissant", price: 240, desc: "A light, flaky, and buttery smooth pastry baked to golden perfection with delicate layers." },
    { name: "Chocolate Muffin", price: 200, desc: "A soft and moist muffin loaded with rich chocolate for a perfectly sweet treat." },
    { name: "Grilled Cheese Sandwich", price: 200, desc: "Golden, crispy bread filled with gooey, melted cheese for a simple yet satisfying bite."},
    { name: "Herby and Veggie Wrap", price: 190, desc: "A fresh and flavorful mix of crisp veggies wrapped in a soft tortilla with a tasty dressing"},
    { name: "Blueberry Cheesecake", price: 260, desc: "A fresh and flavorful mix of crisp veggies wrapped in a soft tortilla with a tasty dressing"}
  ]
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">

      {/* ✅ Navbar */}
      <nav className="navbar">
        <h2 className="logo">Ember & Bloom</h2>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* 🛒 Cart Button */}
        <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
          🛒 {cart.length}
        </div>
      </nav>

      {/* 🧾 Cart Panel */}
      {openCart && (
        <div className="cart-panel">
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <p>No items yet</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  {item.name} - ₹{item.price}
                </div>
              ))}

              <h4>Total: ₹{total}</h4>
              <button className="checkout-btn">Checkout</button>
            </>
          )}
        </div>
      )}

      {/* ✅ Hero */}
      <header className="hero">
        <h1>Ember & Bloom Café</h1>
        <p>A warm corner for coffee, comfort, and conversations.</p>
      </header>

      {/* ✅ Menu */}
      <section id="menu" className="menu-section">
        <h2>Menu</h2>
        <p>Indulge in the delicacies of Ember & Bloom</p><br />

        <h2>Drinks</h2>
        <div className="menu-grid">
          {menu.drinks.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {item.desc && <p className="desc">{item.desc}</p>}

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Snacks</h2><br />

        <div className="menu-grid">
          {menu.snacks.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.desc}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="special" className="special">
        <h2>Special Limited Time Deals</h2> <br />
        <p>Daily Offers: <br /><br />
	•	Morning Glow – Coffee + croissant combo at a special price before 11 AM <br />
	•	Midday Bloom – Any sandwich/wrap with iced coffee combo deal <br />
	•	Sweet Escape Wednesdays – Buy any beverage, get 20% off desserts <br />
	•	Lazy Sunday Special – Flat discount on brunch combos <br /><br />

BOGO Offers: <br /><br />
	•	Bring a Friend – Buy 1 coffee, get the second at 50% off <br />
	•	Perfect Pair – Any hot beverage + pastry combo <br />
	•	Double the Comfort – 2 hot chocolates + 1 dessert deal <br />

<br /><br />Loyalty Offers: <br /><br />
	•	Bloom Rewards – Buy 5 coffees, get the 6th free <br />
	•	Member Mondays – Exclusive discount for loyalty members <br />

<br /><br />Seasonal Offers: <br /><br />
	•	Golden Hour Special – Discounts on selected drinks from 4–6 PM <br />
	•	Rainy Day Comfort – Hot chocolate + muffin special <br />
	•	Study & Sip – Student discount on weekdays</p> <br />
      </section>

      {/* ✅ About */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          At Ember & Bloom, we bring together warmth and freshness in every detail—where rich coffee, comforting bites, and a cozy atmosphere create moments worth savoring. Inspired by the glow of slow mornings and the vibrance of new beginnings, our café is a space to unwind, connect, and indulge in thoughtfully crafted flavors made with care. Whether you’re here for your daily brew or a sweet escape, Ember & Bloom is where comfort meets a little spark of joy.
        </p>
      </section><br />

      {/* ✅ Contact */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: hello@emberbloom.com</p>
        <p>Phone: +91 98765 43210</p>
      </section><br />

      {/* ✅ Footer */}
      <footer className="footer">
        <p>Made with warmth | Ember & Bloom Café</p>
      </footer>

    </div>
  );
}