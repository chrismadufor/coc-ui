import React from 'react'
import tent from '../../assets/svg/tent.svg'
import fb from '../../assets/svg/fb.svg'
import ig from '../../assets/svg/ig.svg'
import yt from '../../assets/svg/yt.svg'
import arrowUp from '../../assets/svg/arrow-up-right-black.svg'
import footerLogo from '../../assets/svg/footer-logo.svg'

function Footer() {
  return (
    <div>
        <footer className="bg-grey flex flex-col text-sm justify-center text-center py-5 md:py-10 px-side">
        <div className="footer-logo w-64 md:w-80 mx-auto my-10">
          <img src={footerLogo} alt="" />
        </div>
        <p className="max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="address flex flex-col items-center justify-center my-5 md:my-10">
          <div className="flex items-center mb-5">
            <img className="w-10 mr-5" src={tent} alt="" />
            <p className="border-l-2 pl-5 border-gray-300">
              15,Alafia Street,Ajibode ,Ibadan.
            </p>
          </div>
          <p className="flex items-center font-semibold">
            Find us on google maps{" "}
            <img
              className="w-5 ml-2"
              src={arrowUp}
              alt=""
            />
          </p>
        </div>
        <div className="socials flex items-center justify-center my-2 md:my-8">
          <p className="uppercase font-semibold">Follow us</p>
          <div className="social-icons flex items-center ml-3">
            <img className="w-10 mr-2" src={fb} alt="" />
            <img className="w-10 mr-2" src={ig} alt="" />
            <img className="w-10 mr-2" src={yt} alt="" />
          </div>
        </div>
      </footer>
      <div className="copyright bg-grey flex flex-col md:flex-row text-sm items-center justify-center pt-5 pb-5 md:pb-20 border-t-2 border-gray-300 px-side">
        <p className="mb-2 md:mr-5">Church Of Christ, University Of Ibadan.</p>
        <p className="mb-2 md:mr-10">&copy; 2022. All Rights Reserved</p>
        <p className="mb-2">Built with 💓</p>
      </div>
    </div>
  )
}

export default Footer