import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-item">
            <h6 className="footer-headline">About</h6>
            <ul className="footer-list">
              <li className="footer-list-item">Contact Us</li>
              <li className="footer-list-item">About US</li>
              <li className="footer-list-item">Stories</li>
              <li className="footer-list-item">Press</li>
            </ul>
          </div>
          <div className="footer-item">
            <h6 className="footer-headline">Help</h6>
            <ul className="footer-list">
              <li className="footer-list-item">FAQ</li>
              <li className="footer-list-item">How to use</li>
            </ul>
          </div>

          <div className="footer-item">
            <h6 className="footer-headline">Company</h6>
            <ul className="footer-list">
              <li className="footer-list-item">Login</li>
              <li className="footer-list-item">Register</li>
              <li className="footer-list-item">Sitemap</li>
              <li className="footer-list-item">Our Products</li>
            </ul>
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

  padding-top: 80px;

  .footer-grid {
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    justify-content: space-evenly;
  }
  .footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .footer-list-item {
    margin: 5px 0;
  }
  .footer-headline {
    padding: 0;
    margin: 0 0 12px 0;
  }
`;
