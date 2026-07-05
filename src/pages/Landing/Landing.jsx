import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";
import InstallButton from "../../components/common/InstallButton/InstallButton.jsx";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <section className="landing-hero">
        <h1>Build faster with TrenDora, all in one place</h1>
        <p>
          Chat with TrenDora, analyze your resume, generate code, and fix bugs —
          everything a developer needs, powered by Gemini.
        </p>
        <Link to="/signup">
          <Button variant="primary">Get Started Free</Button>
        </Link>
        <InstallButton />
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
