import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import SideNav from "./side-nav/sideNav";
import SliderNav from "./SliderNav/SliderNav";

function Layout(props) {
  return (
    <LayoutWrapper>
      {/* <Navbar /> */}
      <SliderNav />
      <main>{props.children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  height: 100vh;
  padding-left: 57px;
`;
