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
                <li className="mb-2">Contact Us</li>
                <li className="mb-2">About US</li>
                <li className="mb-2">Stories</li>
                <li className="mb-2">Press</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Help</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">FAQ</li>
                <li className="mb-2">How to use</li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">Login</li>
                <li className="mb-2">Register</li>
                <li className="mb-2">Sitemap</li>
                <li className="mb-2">Our Products</li>
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

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  color: var(--secondary);
`;
