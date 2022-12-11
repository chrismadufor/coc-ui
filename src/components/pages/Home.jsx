import React from "react";
import Header from "../common/Header";
import arrowRight from "../../assets/svg/arrow-right.svg";
import longArrow from "../../assets/svg/long-arrow.svg";
import verse from "../../assets/svg/verse.svg";
import phone from "../../assets/svg/phone.svg";
import calendar from "../../assets/svg/calendar.svg";
import radio from "../../assets/svg/radio.svg";
import podcasts from "../../assets/svg/podcasts.svg";
import arrowUp from "../../assets/svg/arrow-up-right-black.svg";
import pin from "../../assets/svg/pin.svg";
import maps from "../../assets/svg/maps.svg";
import img1 from "../../assets/hero-img1.png";
import img2 from "../../assets/hero-img2.png";
import img3 from "../../assets/hero-img3.png";
import img4 from "../../assets/hero-img4.png";
import img5 from "../../assets/hero-img5.png";
import img6 from "../../assets/hero-img6.png";
import img7 from "../../assets/hero-img7.png";
import eventImg from "../../assets/event.jpg";
import heap from "../../assets/heap.png";
import psalms from "../../assets/psalms.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import about from "../../assets/about.png";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <section className="hero plus-jarkarta flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-32 lg:h-screen xl:pl-20 lg:pt-20">
        <div className="text-center mb-10 lg:mb-0 lg:text-left mx-auto max-w-lg xl:max-w-3xl xl:pl-0">
          <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
            In the beginning God created the heavens and the earth
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-md mt-3 mx-auto lg:mx-0">
            In the begining God created the heavens and the earth
          </p>
          <Link to="/contact">
            <button className="bg-pry text-white py-1 md:py-2 px-5 md:px-14 lg:px-16 mt-8 mx-auto lg:mx-0 text-base md:text-lg rounded-md flex items-center whitespace-nowrap">
              Join Us <img className="ml-2" src={arrowRight} alt="" />
            </button>
          </Link>
        </div>
        <div className="pic-grid max-w-sm lg:max-w-lg grid grid-cols-3">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </section>
      <section className="visit flex flex-col md:flex-row items-center pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="hidden md:block shadow rounded-xl mr-10">
          <div className="h-48 w-72 border-2 border-gray-200 rounded-t-xl">
            <img className="h-full" src={heap} alt="" />
          </div>
          <div className="h-48 w-72 bg-black text-white flex flex-col justify-center px-5 pl-8 border-2 border-black rounded-b-xl">
            <h2 className="trirong text-3xl">Request a Home Visit</h2>
            <img className="w-16 mt-8 ml-auto mr-5" src={longArrow} alt="" />
          </div>
        </div>
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-4xl xl:text-5xl capitalize tracking-wide">
            Are you weary and heavy laden? We are glad to share the good news of
            Jesus with you. He is the balm of Gilead.
          </h2>
          <p className="text-base my-5 uppercase leading-loose text-gray-500">
            For the word of God is living and powerful, and sharper than any
            two-edged sword, piercing even to the division of soul and spirit,
            and of joints and marrow, and is a discerner of the thoughts and
            intents of the heart.
          </p>
          <p className="flex items-center uppercase font-semibold text-sm md:text-base">
            Hebrews 4:12 <img className="w-2 ml-3" src={verse} alt="" />
          </p>
          <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-10 font-semibold uppercase">
            <div className="flex items-center mr-8 mb-5 md:mb-0 text-sm md:text-base">
              <img className="w-5 mr-3" src={phone} alt="" />
              <p>Call Us: 08068058380</p>
            </div>
            <div className="flex items-center text-sm md:text-base">
              <img className="w-5 mr-3" src={calendar} alt="" />
              <p>Schedule A Call With Us</p>
            </div>
          </div>
        </div>
      </section>
      <section className="truth py-10 md:pb-20 px-side">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5">The truth.</h1>
        <div className="iframe-container">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/nqye02H_H6I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="book flex flex-col sm:flex-row items-center justify-center pt-8 sm:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="mx-auto sm:mr-14">
          <img src={psalms} alt="" />
        </div>
        <div className="mt-5 md:mt-0 max-w-xl">
          <h2 className="text-grey text-2xl md:text-4xl lg:text-5xl">
            Do you want to live a fulfilling life?
          </h2>
          <p className="text-lg md:text-xl my-3 text-grey">
            Join us in our Christian Race and be blessed
          </p>
          <p className="font-semibold text-sm">
            Download for free <i className="fas fa-arrow-down ml-1"></i>
          </p>
        </div>
      </section>
      <section className="blog pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side bg-grey">
        <div className="heading mb-10 xl:mb-14">
          <p className="uppercase">Stories & Blog</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Stories & Blog</h1>
        </div>
        <div className="mb-10 md:mb-16 xl:flex items-center">
          <div className="blog-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-10 item-center">
            <div className="blog-item pt-3 pb-5 lg:py-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mx-auto mb-5 md:mb-0">
              <img
                className="h-52 w-full rounded-lg mx-auto"
                src={blog1}
                alt=""
              />
              <div className="blog-item-text relative h-28 pt-3">
                <h3 className="font-semibold text-lg">
                  Falseness In Churches Today
                </h3>
                <p className="absolute bottom-0">
                  Read Story <i className="fas fa-arrow-right ml-2"></i>
                </p>
              </div>
            </div>
            <div className="blog-item pt-3 pb-5 lg:py-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mx-auto mb-5 md:mb-0">
              <img
                className="h-52 w-full rounded-lg mx-auto"
                src={blog2}
                alt=""
              />
              <div className="blog-item-text relative h-28 pt-3">
                <h3 className="font-semibold text-lg">Cornelius Was Saved</h3>
                <p className="absolute bottom-0">
                  Read Story <i className="fas fa-arrow-right ml-2"></i>
                </p>
              </div>
            </div>
            <div className="blog-item pt-3 pb-5 lg:py-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mx-auto mb-5 md:mb-0">
              <img
                className="h-52 w-full rounded-lg mx-auto"
                src={blog3}
                alt=""
              />
              <div className="blog-item-text relative h-28 pt-3">
                <h3 className="font-semibold text-lg">
                  Falseness In Churches Today
                </h3>
                <p className="absolute bottom-0">
                  Read Story <i className="fas fa-arrow-right ml-2"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-10 ml-auto md:w-80 flex items-center justify-center lg:ml-5 xl:block">
            <p className="text-base md:text-xl">Read more Stories</p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
        </div>
        <div className="podcast flex flex-col sm:flex-row items-center justify-between bg-gray-100 py-5 px-5 lg:px-16 max-w-5xl mx-auto rounded-xl">
          <p className="text-base md:text-lg tracking-wider font-semibold uppercase text-teal">
            Listen to our podcast
          </p>
          <img
            className="w-14 md:w-20 lg:w-24 my-5 md:my-0"
            src={radio}
            alt=""
          />
          <img className="w-40 md:w-60" src={podcasts} alt="" />
        </div>
      </section>
      <section className="about flex flex-col md:flex-row items-center justify-between pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side lg:px-left">
        <div className="about-text max-w-2xl mr-10">
          <h2 className="trirong text-3xl md:text-4xl lg:text-5xl">
            Church Of Christ,
          </h2>
          <p className="uppercase text-base md:text-xl font-semibold mb-3">
            University of Ibadan
          </p>
          <div className="text-base md:text-xl my-5">
            <p className="mb-3">
              We are certian like never before to bring the truth to you,
              sharing the word of God in truth and Spirit.
            </p>
            <p>
              Visit us on sunday or do reach out to us let’s share the true
              Gospel with you.
            </p>
          </div>
          <p className="flex items-center uppercase font-semibold text-sm">
            Matthew 18:1-5 <img className="w-2 ml-2" src={verse} alt="" />
          </p>
          <div className="flex items-center my-5 ">
            <img className="w-4 mr-2" src={pin} alt="" />
            <p className="font-semibold text-sm md:text-base">
              Find us on Google Maps
            </p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
          <div className="flex items-center my-5">
            <img className="w-4 mr-2" src={maps} alt="" />
            <p className="font-semibold text-sm md:text-base">
              Find other Churches of Christ closest to you
            </p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
        </div>
        <div className="max-w-lg mx-auto my-5 md:my-0">
          <img src={about} alt="" />
        </div>
      </section>
      <section className="join-us pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
          Join Us In Church Today
        </h1>
        <p className="text-xl">Come and be blessed</p>
        <div className="img-block my-8 md:my-14 flex items-center justify-center">
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src={img1}
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src={img2}
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src={img3}
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src={img4}
            alt=""
          />
        </div>
        <Link to="/contact">
          <button className="bg-pry text-white py-1 md:py-2 px-8 md:px-16 mt-8 text-lg rounded-md flex items-center whitespace-nowrap block mx-auto">
            Join Us <img className="ml-2" src={arrowRight} alt="" />
          </button>
        </Link>
      </section>
      <section className="gallery pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="heading mb-10">
          <p className="text-sm md:text-base uppercase">Events & Programs</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Events & Gallery
          </h1>
          <p className="text-sm md:text-base max-w-lg mt-3 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="event-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-10 item-center max-w-5xl ml-auto">
          <div className="event-item h-72 xl:h-96 relative rounded-md max-w-xs mx-auto">
            <div className="box absolute top-5 right-5 w-3 h-3 bg-gray-50"></div>
            <img className="h-full w-full rounded-xl" src={eventImg} alt="" />
            <div className="absolute bottom-12 xl:bottom-20 left-3 mx-5 text-2xl xl:text-3xl text-white h-20">
              <h2>Fresher's Welcome</h2>
            </div>
          </div>
          <div className="event-item h-72 xl:h-96 relative rounded-md max-w-xs mx-auto">
            <div className="box absolute top-5 right-5 w-3 h-3 bg-gray-50"></div>
            <img className="h-full w-full rounded-xl" src={eventImg} alt="" />
            <div className="absolute bottom-12 xl:bottom-20 left-3 mx-5 text-2xl xl:text-3xl text-white h-20">
              <h2>Evangelism</h2>
            </div>
          </div>
          <div className="event-item h-72 xl:h-96 relative rounded-md max-w-xs mx-auto">
            <div className="box absolute top-5 right-5 w-3 h-3 bg-gray-50"></div>
            <img className="h-full w-full rounded-xl" src={eventImg} alt="" />
            <div className="absolute bottom-12 xl:bottom-20 left-3 mx-5 text-2xl xl:text-3xl text-white h-20">
              <h2>Fresher's Welcome</h2>
            </div>
          </div>
        </div>
        <p className="flex items-center justify-end font-semibold mt-5 ml-auto w-full text-base md:text-xl">
          See more on instagram{" "}
          <img className="w-5 ml-3" src={arrowUp} alt="" />
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
