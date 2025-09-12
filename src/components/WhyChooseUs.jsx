import React from "react";
import styles from "./WhyChooseUs.module.css";

const benefits = [
  {
    title: "Saves Time",
    description:
      "Quickly find products that fit you perfectly without spending hours trying on multiple sizes. Our tool narrows down your choices to what will suit you best.",
    icon: "/why/why1.png",
  },
  {
    title: "Reduce Returns",
    description:
      "By ensuring you get the right size the first time, our tool helps reduce the number of returns, saving you and the retailer time and resources.",
    icon: "/why/why2.png",
  },
  {
    title: "Sustainability",
    description:
      "Less returns mean less environmental impact. By minimizing the carbon footprint associated with shipping and repackaging, we contribute to a greener planet.",
    icon: "/why/why3.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title" className={styles.heading}>
          Why Choose Us
        </h2>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className={styles.iconImg}
                />
              </div>
              <div>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.description}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
