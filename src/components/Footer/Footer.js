import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex row bg-light py-3 flex-wrap">
        <div className="d-flex justify-content-center">
          <a
            href="https://www.facebook.com/stylegamerssh0p"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/fb-icon.png?alt=media&token=0e9c483d-3e6e-4edd-b39b-704032db5031"
              alt="facebook"
              className="icon social-fb"
            />
          </a>
          <a
            href="https://www.instagram.com/stylegamerssh0p"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/ig-icon.png?alt=media&token=d154c14e-a9c6-4e14-be9c-d44cc8c02cfe"
              alt="instagram"
              className="icon social-ig"
            />
          </a>
          <a
            href="https://twitter.com/stylegamerssh0p"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/tw-icon.png?alt=media&token=4e33c2da-5eab-4da4-b911-2cd457067837"
              alt="twitter"
              className="icon social-tw"
            />
          </a>
          <a href="https://wa.me/591111111111" target="_blank" rel="noreferrer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/wp-icon.png?alt=media&token=37c15c71-6822-47a6-85d9-690288c74aad"
              alt="whatsapp"
              className="icon social-wp"
            />
          </a>
          <a
            href="mailto:stylegamerssh0p@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/email-icon.png?alt=media&token=02f8376c-d84b-40c8-9565-b8be51ba69fe"
              alt="email"
              className="icon social-gmail"
            />
          </a>
          <a
            href="https://goo.gl/maps/3J7b8BGaue65Mf9e7"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/coderhouse-react-d416b.appspot.com/o/location-icon.png?alt=media&token=55142bd7-b627-42de-b73a-1957d8f10edb"
              alt="location"
              className="icon social-ubicacion"
            />
          </a>
        </div>
        <div className="container pt-5">
          <div className="small text-center text-muted">
            Copyright © 2022 - Style Gamers Shop SRL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
