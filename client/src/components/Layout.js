import PropTypes from "prop-types";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./side-nav/sideNav";

function Layout(props) {
  return (
    <LayoutWrapper>
      <Navbar />
      <SideNav />
      <main>{props.children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

Layout.propTypes = {};

export default Layout;

const LayoutWrapper = styled.div`
  height: 100vh;
`;
