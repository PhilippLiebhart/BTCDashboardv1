import PropTypes from "prop-types";
import styled from "styled-components";

function Footer(props) {
  return (
    <FooterWrapper>
      <footer className="footer body-bg">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    About US
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Stories
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    How to use
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Login
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Register
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Sitemap
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-muted">
                    Our Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0" />
        <div className="body-bg  py-2">
          <div className="container text-center">
            <p className=" text-primary mb-0 py-2">© 2020 BTC DASH</p>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
}

Footer.propTypes = {};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  color: var(--secondary);
`;
