import Header from "../components/header/Header";
import About from "../components/about/About";
import videoImg from "../assets/images/video_img.jpg"

const AboutUs = () => {
    return (
      <article>
        <Header
          title="Om os"
        />

        <About variant="light" videoImg={videoImg}>

        </About>
      </article>
    );
}

export default AboutUs;