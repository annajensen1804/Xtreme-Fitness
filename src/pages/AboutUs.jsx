import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import Header from "../components/header/Header";
import About from "../components/about/About";
import videoImg from "../assets/images/video_img.jpg";
import BlogSection from "../components/blogSection/BlogSection";

const AboutUs = () => {
    const {blogs} =
      useLoaderData();

  return (
    <article>
      <Header title="Om os" />

      <About variant="light" videoImg={videoImg}></About>

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

export default AboutUs;
