import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "amber jones",
    job: "UX designer",
    img: "https://raw.githubusercontent.com/kolonatalie/frontend-practice-projects/refs/heads/main/Projects/Reviews/assets/person-1.jpg",
    text:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    id: 2,
    name: "emma brown",
    job: "web designer",
    img: "https://raw.githubusercontent.com/kolonatalie/frontend-practice-projects/refs/heads/main/Projects/Reviews/assets/person-2.jpg",
    text:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 3,
    name: "john smith",
    job: "web developer",
    img: "https://raw.githubusercontent.com/kolonatalie/frontend-practice-projects/refs/heads/main/Projects/Reviews/assets/person-3.jpg",
    text:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
  {
    id: 4,
    name: "colin willson",
    job: "writer",
    img: "https://raw.githubusercontent.com/kolonatalie/frontend-practice-projects/refs/heads/main/Projects/Reviews/assets/person-4.jpg",
    text:
      "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const { img, name, job, text } = reviews[index];

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const random = () => setIndex(Math.floor(Math.random() * reviews.length));

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>client love</h2>
        </div>
        <article className="review">
          <div className="button-container">
            <button className="prev-btn" onClick={prev} aria-label="Previous review">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="img-container">
              <img id="person-img" src={img} alt={name} />
            </div>
            <button className="next-btn" onClick={next} aria-label="Next review">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <p id="info">{text}</p>
          <h4 id="author">{name}</h4>
          <p id="job">{job}</p>
          <button className="random-btn" onClick={random}>random review</button>
        </article>
      </section>
    </main>
  );
}

