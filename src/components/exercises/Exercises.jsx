import styles from './exercises.module.css'
import { useState } from 'react';

const Exercises = ({ exercises }) => {

  // SLIDER
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = exercises.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="sectionsContainer">
      <p className="kicker">Dette tilbyder vi</p>
      <h2 className="black">VI TILBYDER EKSKLUSIVE ØVELSER</h2>

      <div className={styles["slider-wrapper"]}>
        <div className={styles["slider-track-wrapper"]}>
          <div
            className={styles["slider-track"]}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {exercises.map((item, index) => (
              <div
                className={styles["slide-item"]}
                key={item._id || item.id || index}
              >
                <div className={styles["slide-card"]}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles["slide-image"]}
                  />
                  <h3 className={styles["slide-title"]}>{item.title}</h3>
                  <p className={styles["slide-teaser"]}>{item.teaser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles["controls-container"]}>
          <button onClick={prevSlide} className={styles["nav-btn"]}>
            &#10094;
          </button>

          <button onClick={nextSlide} className={styles["nav-btn"]}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Exercises;