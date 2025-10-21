import { useTranslation } from "react-i18next";
import Seperator from "../common/Seperator";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { triggerConfetti } from "@/lib/utilities/confetti";


const Footer = () => {
  const [t] = useTranslation("common");
  const targetDate = new Date("2026-02-18T10:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime(); // number in ms

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const positionRef = useRef<HTMLDivElement>(null);
  
    const handleClick = () => {
      if (positionRef.current) {
        triggerConfetti(positionRef.current);
      }
    };

  //https://systemvetardagen.se/images/nod.webp

  return (
    <footer className="bg-white w-full">
      <Seperator />
      
      

      <div className="container mx-auto flex gap-4 px-10 py-0 md:py-6 text-gray-600">
        {" "}

        <style>
        {`
          .instagram-hover:hover {
            fill: url(#instagramGradient);
          }
        `}
        </style>

        <div className="hidden md:block text-left flex-1">
          <h3 className="text-lg font-semibold pb-2">Systemvetardagen 2026</h3>
          <p className="text-xs italic w-1/2 mb-2">{t("disk")}</p>
          {/* <p className="text-sm">
            <a
              href="https://www.google.com/maps/place/DSV,+Institutionen+f%C3%B6r+data-+och+systemvetenskap/@59.4068103,17.9426538,543m/data=!3m1!1e3!4m15!1m8!3m7!1s0x465f9eedb4b0b12f:0x17108ff333fa684a!2sBorgarfjordsgatan+6C,+164+40+Kista!3b1!8m2!3d59.4068103!4d17.9452287!16s%2Fg%2F11c5d8mhp9!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Borgarfjordsgatan 6C 164 40 Kista
            </a>
          </p> */}
          <div className="mb-1">
            <a 
              className="hover:text-black" 
              href="https://disk.su.se/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Studentkåren DISK
            </a>
          </div>
          <div className="mb-1">
            <Link className="hover:text-black" to="/companies">
              Companies
            </Link>
          </div>
          <div className="mb-1">
            <Link className="hover:text-black" to="/visit-info">
              Visitor
            </Link>
          </div>
          <div className="mb-1">
            <Link className="hover:text-black" to="/about">
              About us
            </Link>
          </div>
          <div className="mb-1">
            <a className="hover:text-black" href="mailto:systemvetardagen@disk.su.se">
              Contact:
            </a>
          </div>
          <div className="text-sm">
            <a className="text-link" href="mailto:systemvetardagen@disk.su.se">
              systemvetardagen@disk.su.se
            </a>
          </div>
          
        </div>

        
        <div className="hidden md:block text-left text-gray-600 flex-1">
          <h3 className="text-lg font-semibold pb-2">Socials</h3>
          <p className="text-xs italic w-1/2 mb-2">
            For more information follow us on our social medias to receive regular updates about the event.
          </p>
          <div className="flex gap-2 py-2">
            
            <a
              href="https://www.facebook.com/Systemvetardagen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img src="/svgs/facebook.svg" alt="facebook logo" /> */}
              <svg 
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 24 24" 
                width="36px" 
                height="36px"
                className="text-gray-900 hover:text-blue-600"
                fill="currentColor"
              >    
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/systemvetardagen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 24 24" 
                width="36px" 
                height="36px"
                className="text-gray-900 instagram-hover w-9 h-9"
                fill="currentColor"
              >
                <defs>
                  <linearGradient id="instagramGradient" x1="0.7" y1="0" x2="0.3" y2="1">
                    <stop offset="5%" stopColor="#dd2a7b" />   /* orange f58529*/
                    <stop offset="25%" stopColor="#515bd4" />  /* pink dd2a7b*/
                    <stop offset="30%" stopColor="#8134af" />  /* purple 8134af*/
                    <stop offset="60%" stopColor="#dd2a7b" />  /* deep purple/blue  515bd4*/
                    <stop offset="100%" stopColor="#f58529" /> /* loop back to orange f58529*/
                  </linearGradient>
                </defs>

                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
              </svg>

              {/* <img src="/svgs/instagram.svg" alt="instagram logo" /> */}
            </a>
            <a
              href="https://www.linkedin.com/company/systemvetardagen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 24 24" 
                width="36px" 
                height="36px"
                className="text-gray-900 hover:text-sky-700"
                fill="currentColor"
              >
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
              </svg>
              {/* <img src="/svgs/linkedin.svg" alt="linkedin logo" /> */}
            </a>
          </div>


          <div 
            className="pt-4 cursor-pointer w-1/2"
            ref={positionRef}
            onClick={handleClick}
          >
            {timeLeft ? (
              <div className="hover:text-[110%]">
                <p>Or see us at the event in</p>
                <p className="font-bold">
                  {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes
                </p>
                <p className="font-bold">
                  and {timeLeft.seconds} seconds!
                </p>
              </div>
            ) : (
              <div className="hover:text-[110%]">
                <p>Or see us at the event</p>
                <p className="font-bold">ongoing right now!</p>
              </div>
            )}
          </div>

          



          {/* <div className="text-xs text-gray-600">
            <span>Contact: </span>
            <a className="text-link" href="mailto:systemvetardagen@disk.su.se">
              systemvetardagen@disk.su.se
            </a>
            <br />
          </div> */}
        </div>
        

        <div className="hidden md:flex">
          <div className="flex flex-col">
            <h3 className="text-center text-lg pb-2 font-semibold">Find us</h3>
            <a
              className="pb-3 text-sm text-center"
              // href="https://www.google.com/maps/place/DSV,+Institutionen+f%C3%B6r+data-+och+systemvetenskap/@59.4068103,17.9426538,543m/data=!3m1!1e3!4m15!1m8!3m7!1s0x465f9eedb4b0b12f:0x17108ff333fa684a!2sBorgarfjordsgatan+6C,+164+40+Kista!3b1!8m2!3d59.4068103!4d17.9452287!16s%2Fg%2F11c5d8mhp9!3m5!1s0x465f9eed05efbb67:0x18ac39c13897c4a9!8m2!3d59.4067198!4d17.9452225!16s%2Fg%2F1tczcj6x?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Borgarfjordsgatan 6C 164 40 Kista
            </a>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.2724538117486!2d17.94447928059294!3d59.40656019752912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9eed05efbb67%3A0x18ac39c13897c4a9!2sDSV%2C%20Institutionen%20f%C3%B6r%20data-%20och%20systemvetenskap!5e0!3m2!1ssv!2sse!4v1738844966811!5m2!1ssv!2sse"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="rounded-3xl w-80 h-48 pointer-events-auto"
            ></iframe>
            
          </div>
        </div>



      </div>

      <div className="bg-gray-200 container mx-auto flex justify-between items-center px-6 py-4">
        <img
          src="/svgs/specialLogo.svg"
          alt="Left Logo"
          className="h-10 p-0 m-0"
          fetchPriority="high"
        />
        <p className="text-sm">© 2025 Systemvetardagen</p>
      </div>
      {/* <Seperator /> */}
    </footer>
  );
};

export default Footer;
