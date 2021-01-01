import PropTypes from "prop-types";
import { useContext } from "react";

import styled from "styled-components";
import { DashboardContext } from "../context/DashboardContext";
import Footer from "./Footer";
import MobileNav from "./Navigation/MobileNav";
import SliderNav from "./Navigation/SliderNav/SliderNav";

function Layout(props) {
  const dashboardContext = useContext(DashboardContext);
  console.log("##########", dashboardContext.breakpoint);

  return (
    <LayoutWrapper>
      {dashboardContext.breakpoint === "xs" ? <MobileNav /> : <SliderNav />}

      <main className="main">{props.children}</main>

      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  padding-left: 57px;

  @media only screen and (max-width: 785px) {
    padding: 0;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
