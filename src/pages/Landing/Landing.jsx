import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <section className="landing-hero">
        <h1>Build faster with AI, all in one place</h1>
        <p>
          Chat with AI, analyze your resume, generate code, and fix bugs —
          everything a developer needs, powered by Gemini.
        </p>
        <Link to="/signup">
          <Button variant="primary">Get Started Free</Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
