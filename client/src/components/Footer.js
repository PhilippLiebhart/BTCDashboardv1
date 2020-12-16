import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h6>About</h6>
            <ul>
              <li>Contact Us</li>
              <li>About US</li>
              <li>Stories</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h6>Help</h6>
            <ul>
              <li>FAQ</li>
              <li>How to use</li>
            </ul>
          </div>

          <div>
            <h6>Company</h6>
            <ul>
              <li>Login</li>
              <li>Register</li>
              <li>Sitemap</li>
              <li>Our Products</li>
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
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 5px 0;
  }
  h6 {
    padding: 0;
    margin: 0 0 12px 0;
  }
`;
