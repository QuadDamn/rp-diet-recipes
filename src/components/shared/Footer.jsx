import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="foot" role="contentinfo">
      <div className="wrap clearfix">
        <div className="row">
          <article className="one-half">
            <h5>About SocialChef Community</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
            </p>
          </article>
          <article className="one-fourth">
            <h5>Need help?</h5>
            <p>Contact us via phone or email</p>
            <p>
              <em>T:</em> +1 555 555 555
              <br />
              <em>E:</em> <a href="#!">socialchef@email.com</a>
            </p>
          </article>
          <article className="one-fourth">
            <h5>Follow us</h5>
            <ul className="social">
              <li>
                <a href="#!" title="facebook">
                  <i className="fa fa-fw fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="youtube">
                  <i className="fa  fa-fw fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="rss">
                  <i className="fa  fa-fw fa-rss"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="gplus">
                  <i className="fa fa-fw fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="linkedin">
                  <i className="fa fa-fw fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="twitter">
                  <i className="fa fa-fw fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="pinterest">
                  <i className="fa fa-fw fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#!" title="vimeo">
                  <i className="fa fa-fw fa-vimeo"></i>
                </a>
              </li>
            </ul>
          </article>

          <div className="bottom">
            <p className="copy">
              Copyright 2016 SocialChef. All rights reserved
            </p>

            <nav className="foot-nav">
              <ul>
                <li>
                  <a href="index.html" title="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="recipes.html" title="Recipes">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="blog.html" title="Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="contact.html" title="Contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="find_recipe.html" title="Search for recipes">
                    Search for recipes
                  </a>
                </li>
                <li>
                  <a href="login.html" title="Login">
                    Login
                  </a>
                </li>
                <li>
                  <a href="register.html" title="Register">
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
