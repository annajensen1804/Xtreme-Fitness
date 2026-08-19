import Header from "../components/header/Header";
import Button from "../components/button/Button";
import videoIcon from "../assets/icons/video_img_orange.png"
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const handleLoginRedirect = () => {
    navigate('/login')
  }
    return (
      <article>
        <Header
          title="Bliv stærk"
          leadText="Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen."
          buttonText="Tilmeld dig nu"
          onClick={handleLoginRedirect}
          buttonIcon={videoIcon}
        />
      </article>
    );
}

export default Home;