import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Agency</Link>
          </div>
          <div class="footer-link-items">
            <h2>S Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://twitter.com/?lang=en">Twitter</a>
            <a href="https://www.linkedin.com/">LinkedIn</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">Becoming you © 2020</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com/"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://twitter.com/?lang=en"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
