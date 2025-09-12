import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "Upload Measurements",
    description:
      "Easily upload your body measurements from the comfort of your home. Use our user-friendly interface to input your details or take advantage of our shipped measuring tape for accuracy.",
    button: "Upload Now",
    icon: "/how/how1.png",
  },
  {
    title: "Get Recommendations",
    description:
      "Based on your measurements, our tool provides you with a curated list of products that will fit you perfectly. Browse through tailored options without the hassle of guessing sizes.",
    button: "See My Matches",
    icon: "/how/how2.png",
  },
  {
    title: "Enjoy Hassle-free Shopping",
    description:
      "With our accurate size recommendations, you can confidently purchase items knowing they'll fit. This leads to a smoother, more enjoyable shopping experience both online and in-store.",
    button: "Start Shopping",
    icon: "/how/how3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className={styles.heading}>
          How It Works
        </h2>
        <div className={styles.grid}>
         
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <img
                  src={step.icon}
                  alt={step.title}
                  className={styles.iconImg}
                />
              </div>

              {index < 2 && (
                <div className={styles.connector}>
                  <span className={styles.dottedLine}></span>
                  <span className={styles.circle}></span>
                </div>
              )}

              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <button className={styles.cta}>{step.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
