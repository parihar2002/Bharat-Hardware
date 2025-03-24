import { Link } from "react-router-dom";
import "../../styles/Home.css";
import heroImage from "../../assets/hero.jpg"; // Add an image in /assets folder

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Hardware Hub</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Power Your Work with Premium Hardware</h1>
          <p>Find the best tools and equipment for every job.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
        <img src={heroImage} alt="Hardware Tools" className="hero-image" />
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Top Categories</h2>
        <div className="category-grid">
          <div className="category-item">
            <img src="https://via.placeholder.com/200" alt="Handle" />
            <p>Handle</p>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/200" alt="Door Lock" />
            <p>Door Lock</p>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/200" alt="Hangers" />
            <p>Hangers</p>
          </div>
          <div className="category-item">
            <img src="https://via.placeholder.com/200" alt="Clickers" />
            <p>Clickers</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Get the Best Deals on Hardware!</h2>
        <p>Exclusive discounts on premium tools and accessories.</p>
        <Link to="/signup" className="signup-btn">Sign Up & Save</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hardware Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
