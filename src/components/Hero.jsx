

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles["container"]}>
      <div className={styles["herotext"]}>
        <h1>
          Find Your Perfect <br />
          Fit Every Time
        </h1>
        <p>Revolutionizing the way you shop,online and offline</p>
        <button className={styles["cta"]}>Try It Now</button>
      </div>

    
      <div className={styles["image"]}>
        <img src="model.png" className={styles["modelimg"]} />
      </div>
    </section>
  );
}
