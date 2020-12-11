import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <LayoutWrapper>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  height: 100vh;
`;
