import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <Services/>
      <About />
      <BookAppointment />
      {/* <Doctors /> */}
      <Footer />
    </div>
  );
}

export default Home;
