import { socialLazyLoadImages } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialLazyLoadImages.map((socialLazyLoadImage) => (
            <a
              key={socialLazyLoadImage.id}
              href={socialLazyLoadImage.link} 
              target="_blank"       
              rel="noopener noreferrer"
              className="icon"
            >
               <LazyLoadImage  effect="blur" src={socialLazyLoadImage.LazyLoadImagePath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Rahul Shakya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
