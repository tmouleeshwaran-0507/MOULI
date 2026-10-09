import { useState } from "react";
import "./App.css";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
  });

  const events = [
    {
      id: 1,
      icon: "💡",
      category: "HACKATHON",
      title: "Cybersecurity & Technology",
      date: "28 OCT 2026",
      time: "10:00 AM",
      venue: "IT Aditorium",
      description:
        "Build creative AI solutions and turn your ideas into real-world projects.Cybersecurity protects digital systems and data, while technology drives innovation and builds a safer digital future.",
    },
    {
      id: 2,
      icon: "💻",
      category: "TECHNOLOGY",
      title: "CodeCraft Contest",
      date: "28 OCT 2026",
      time: "10:00 AM",
      venue: "Computer Lab 6",
      description:
        "Test your programming skills through exciting coding challenges.Coding Craft transforms creative ideas into innovative solutions through the art of programming.",
    },
    {
      id: 3,
      icon: "🚀",
      category: "PROJECT EXPO",
      title: "FutureTech Expo",
      date: "28 OCT 2026",
      time: "12:00 AM",
      venue: "Main Auditorium",
      description:
        "Showcase innovative student projects and explore future technologies.",
    },
    {
      id: 4,
      icon: "🎤",
      category: "WORKSHOP",
      title: "Tech Talk 2026",
      date: "29 OCT 2026",
      time: "10:00 PM",
      venue: "IT Seminar Hall",
      description:
        "Learn from industry experts and discover new career opportunities.",
    },
    {
      id: 5,
      icon: "🏆",
      category: "COMPETITION",
      title: "Campus Battle",
      date: "29 OCT 2026",
      time: "09:30 AM",
      venue: "College Ground",
      description:
        "Compete with talented students and prove your skills.",
    },
    {
      id: 6,
      icon: "🎨",
      category: "CREATIVE",
      title: "Design Sprint",
      date: "28 OCT 2026",
      time: "01:00 PM",
      venue: "Design Studio",
      description:
        "Create beautiful digital experiences and solve creative challenges.",
    },
  ];

  const openRegistration = (event) => {
    setSelectedEvent(event);

    setForm({
      name: "",
      email: "",
      department: "",
      year: "",
    });
  };

  const closeRegistration = () => {
    setSelectedEvent(null);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Registration successful!\n\nEvent: ${selectedEvent.title}\nName: ${form.name}`
    );

    setSelectedEvent(null);

    setForm({
      name: "",
      email: "",
      department: "",
      year: "",
    });
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="brand">

          <div className="brand-mark">
            MCE
          </div>

          <div>
            <h2>MAHENDRA CAMPUS</h2>
            <span>College Event Hub

            </span>
          </div>

        </div>

        <nav>

          <a href="#home">
            Home
          </a>

          <a href="#events">
            Events
          </a>

          <a href="#about">
            About
          </a>

          <a href="#events" className="nav-button">
            Explore Events
          </a>

        </nav>

      </header>


      {/* ================= HERO ================= */}

      <main id="home">

        <section className="hero">

          <div className="hero-left">

            <div className="small-label">
              ✦ YOUR CAMPUS. YOUR MOMENTS.
            </div>

            <h1>
              Make Your
              <br />

              <span>Campus</span>

              <br />

              Experience
              <br />

              Unforgettable.
            </h1>

            <p>
              Discover exciting events, meet talented people,
              learn new skills and create memories that last.
            </p>


            <div className="hero-buttons">

              <a
                href="#events"
                className="primary-button"
              >
                Discover Events

                <span>
                  →
                </span>
              </a>

              <a
                href="#about"
                className="secondary-button"
              >
                Learn More
              </a>

            </div>


            <div className="hero-stats">

              <div>
                <strong>
                  25+
                </strong>

                <span>
                  Events
                </span>
              </div>

              <div>
                <strong>
                  1K+
                </strong>

                <span>
                  Students
                </span>
              </div>

              <div>
                <strong>
                  15+
                </strong>

                <span>
                  Clubs
                </span>
              </div>

            </div>

          </div>


          {/* HERO RIGHT */}

          <div className="hero-right">

            <div className="yellow-circle"></div>

            <div className="floating-card card-one">

              <span>
                🔥
              </span>

              <div>

                <strong>
                  Trending Now
                </strong>

                <small>
                  AI Innovation Challenge
                </small>

              </div>

            </div>


            <div className="main-illustration">

              <div className="illustration-top">
                CAMPUS
              </div>

              <div className="illustration-icon">
                🎓
              </div>

              <h3>
                Learn.
                <br />
                Build.
                <br />
                Shine.
              </h3>

            </div>


            <div className="floating-card card-two">

              <span>
                ✓
              </span>

              <div>

                <strong>
                  Easy Registration
                </strong>

                <small>
                  Join events in seconds
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* ================= EVENTS ================= */}

        <section
          className="events-section"
          id="events"
        >

          <div className="section-top">

            <div>

              <div className="small-label">
                ✦ WHAT'S HAPPENING
              </div>

              <h2>
                Events worth
                <span>
                  showing up for.
                </span>
              </h2>

            </div>

            <p>
              From coding challenges to creative workshops,
              find something that matches your passion.
            </p>

          </div>


          <div className="event-grid">

            {events.map((event) => (

              <article
                className="event-card"
                key={event.id}
              >

                <div className="event-icon">
                  {event.icon}
                </div>

                <div className="event-category">
                  {event.category}
                </div>

                <h3>
                  {event.title}
                </h3>

                <p className="event-description">
                  {event.description}
                </p>


                <div className="event-details">

                  <span>
                    📅 {event.date}
                  </span>

                  <span>
                    ⏰ {event.time}
                  </span>

                  <span>
                    📍 {event.venue}
                  </span>

                </div>


                <button
                  className="event-button"
                  onClick={() => openRegistration(event)}
                >
                  Register Now

                  <span>
                    ↗
                  </span>

                </button>

              </article>

            ))}

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-box">

            <div className="about-number">
              01
            </div>

            <div className="about-content">

              <div className="small-label">
                ✦ WHY MAHENDRA?
              </div>

              <h2>
                More than events.
                <br />

                <span>
                  It's your campus story.
                </span>
              </h2>

              <p>
                MAHENDRA CAMPUS

More than events. It's your campus story.

Your campus. Your community. Your future.

Mahendra Campus brings college events into one simple platform. Discover exciting events, explore hackathons, register instantly, and participate with your friends.



              </p>


              <div className="about-features">

                <div>

                  <b>
                    01
                  </b>

                  <strong>
                    Discover
                  </strong>

                  <span>
                    Find events you love.
                  </span>

                </div>


                <div>

                  <b>
                    02
                  </b>

                  <strong>
                    Register
                  </strong>

                  <span>
                    Reserve your spot easily.
                  </span>

                </div>


                <div>

                  <b>
                    03
                  </b>

                  <strong>
                    Participate
                  </strong>

                  <span>
                    Make memories together.
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= COLLEGE INFO ================= */}

        <section className="college-section">

          <div>

            <span>
              MAHENDRA INSTITUTIONS
            </span>

            <h2>
              Mahendra College of Engineering
            </h2>

            <p>
              Department of Information Technology
            </p>

          </div>


          <div className="college-badge">

            <span>
              🎓
            </span>

            <strong>
              MAHENDRA CAMPUS
            </strong>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-main">

          <div className="footer-brand">

            <div className="brand-mark">
              CS
            </div>

            <div>

              <h3>
                MAHENDRA CAMPUS
              </h3>

              <p>
                Mahendra College of Engineering
              </p>

              <p>
                Department of Information Technology
              </p>

            </div>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#events">
              Events
            </a>

            <a href="#about">
              About
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 MAHENDRA CAMPUS. All rights reserved.
          </span>

          <span>
            Created by <strong>MOULEESHWARAN</strong> ✦
          </span>

        </div>

      </footer>


      {/* ================= REGISTRATION MODAL ================= */}

      {selectedEvent && (

        <div
          className="modal-overlay"
          onClick={(e) => {

            if (
              e.target.className ===
              "modal-overlay"
            ) {
              closeRegistration();
            }

          }}
        >

          <div className="registration-modal">

            <button
              className="close-button"
              onClick={closeRegistration}
            >
              ×
            </button>


            <div className="modal-icon">
              {selectedEvent.icon}
            </div>


            <div className="small-label">
              EVENT REGISTRATION
            </div>


            <h2>
              Join the event.
            </h2>


            <p className="modal-event">
              {selectedEvent.title}
            </p>


            <form onSubmit={handleSubmit}>

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />


              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />


              <label>
                Department
              </label>

              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select department
                </option>

                <option>
                  Information Technology
                </option>

                <option>
                  Computer Science Engineering
                </option>

                <option>
                  Electronics & Communication
                </option>

                <option>
                  Mechanical Engineering
                </option>

                <option>
                  Civil Engineering
                </option>

              </select>


              <label>
                Year
              </label>

              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select year
                </option>

                <option>
                  1st Year
                </option>

                <option>
                  2nd Year
                </option>

                <option>
                  3rd Year
                </option>

                <option>
                  4th Year
                </option>

              </select>


              <button
                type="submit"
                className="modal-submit"
              >

                Complete Registration

                <span>
                  →
                </span>

              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;