import React from "react";
import styles from "./Features.module.css";

// const features = [
//   {
//     title: "Accurate Size Recommendations",
//     description:
//       "Eliminate guesswork with our precise size recommendation algorithm. By analyzing detailed body measurements, we provide highly accurate size suggestions, reducing returns and enhancing customer satisfaction.",
//     icon: "👕", // Replace with SVG if needed
//   },
//   {
//     title: "Bulk Orders Made Easy",
//     description:
//       "Store and manage size data for every team member, simplifying bulk orders for uniforms, workwear, or team apparel. Our system keeps detailed records, making it easy to place large orders with confidence that each item will fit perfectly.",
//     icon: "📦",
//   },
//   {
//     title: "Convenient Data Entry",
//     description:
//       "Enter and access size data from anywhere. Customers can input their measurements online, and retailers can use this data for both online and offline shopping, ensuring a seamless shopping experience.",
//     icon: "💻",
//   },
// ];

const features = [
  {
    title: "Accurate Size Recommendations",
    description:
      "Eliminate guesswork with our precise size recommendation algorithm. By analyzing detailed body measurements, we provide highly accurate size suggestions, reducing returns and enhancing customer satisfaction.",
    icon: "/features/features1.png", // ✅ path from public folder
  },
  {
    title: "Bulk Orders Made Easy",
    description:
      "Store and manage size data for every team member, simplifying bulk orders for uniforms, workwear, or team apparel. Our system keeps detailed records, making it easy to place large orders with confidence that each item will fit perfectly.",
    icon: "/features/features2.png",
  },
  {
    title: "Convenient Data Entry",
    description:
      "Enter and access size data from anywhere. Customers can input their measurements online, and retailers can use this data for both online and offline shopping, ensuring a seamless shopping experience.",
    icon: "/features/features3.png",
  },
];

export function Features() {
  return (
    <section className={styles.section} aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className={styles.heading}>
          Features
        </h2>
        <div className={styles.grid}>
          {/* {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))} */}

          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className={styles.iconImg}
                />
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





