import { NavLink, useNavigate, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import videoIcon from "../assets/icons/video_img_orange.png";
import Exercises from "../components/exercises/Exercises";
import BlogSection from "../components/blogSection/BlogSection";

const Home = () => {
  const { exercises, services, reviews, subscriptions, employees, blogs } = useLoaderData();

  const navigate = useNavigate();
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <article>
      <Header
        title="Bliv stærk"
        leadText="Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen."
        buttonText="Tilmeld dig nu"
        onClick={handleLoginRedirect}
        buttonIcon={videoIcon}
      />

      <Exercises exercises={exercises} />

      <Suspense fallback={<div>Henter blogindlæg...</div>}>
        <Await
          resolve={blogs}
          errorElement={<div>Kunne ikke hente bloggen</div>}
        >
          {(resolvedBlogs) => {
            if (!resolvedBlogs || resolvedBlogs.length === 0) {
              return <div>Ingen blogindlæg fundet</div>;
            }
            const latestPost = resolvedBlogs[resolvedBlogs.length - 1];

            return <BlogSection post={latestPost} />;
          }}
        </Await>
      </Suspense>
    </article>
  );
};

export default Home;
