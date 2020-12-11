import styled from "styled-components";
import Footer from "./Footer";
import SliderNav from "./SliderNav/SliderNav";

function Layout(props) {
  return (
    <>
      <LayoutWrapper>
        <SliderNav />

        <main className="main">{props.children}</main>

        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  .main {
    padding-left: 57px;
    /* padding-right: 20px; */
  }
`;
