import "./Footer-signup.css"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function Footerup(){
  return(
    <div className="footer-content">
      <div className="contact-content">
        Des questions ? Appelez le <a href=""> (+33) 0805-543-043</a>
      </div>
      <div className="footer-link">
        <div className="footer-link-content">
          <a href=""> FAQ</a>
          <a href="" className="below"> Préférences de cookies</a>
        </div>
        <div className="footer-link-content">
          <a href=""> Centre d'aide</a>
          <a href="" className="below"> Mentions légales </a>
        </div>
        <div className="footer-link-content">
          <a href=""> Conditions d'utilisation</a>
        </div>
        <div className="footer-link-content">
          <a href=""> Confidentialité</a>
        </div>
      </div>
      <div className="selector">
        <a href="">
        <FontAwesomeIcon icon={faGlobe} />
        </a>
      <select>
      <option>
          Français
        </option>
        <option>
          Anglais
        </option>
      </select>
      </div>
      
    </div>
  );
}