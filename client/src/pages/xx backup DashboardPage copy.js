import React, { Component } from "react";

import "./DashboardPage.css";
import RGL, { WidthProvider } from "react-grid-layout";
//  import css -- IMP!!!
import "./Grid-styles/grid-layout-styles.css";
import "./Grid-styles/resizable-styles.css";

import DashboardHeader from "../components/Dashboard/DashboardHeader";
import TwitterWidget from "../components/Dashboard/TwitterWidget";
import FearAndGreedIndex from "../components/Dashboard/FearAndGreedIndex";
import FinHubNewsfeed from "../components/Dashboard/FinHubNewsWidget";
import TickerWIdget from "../components/Dashboard/TickerWidget";

const ReactGridLayout = WidthProvider(RGL);
class Dashboardpage extends Component {
  state = {
    layout: [
      { i: "1", x: 0, y: 0, w: 12, h: 1, minH: 1, static: true },
      { i: "2", x: 0, y: 0, w: 3, h: 4, minW: 3, minH: 1 },
      { i: "3", x: 3, y: 0, w: 5, h: 3, minH: 1 },
      { i: "4", x: 8, y: 0, w: 3, h: 3, minH: 1 },
      { i: "5", x: 5, y: 1, w: 3, h: 1, minH: 1, minW: 2 },
    ],
    resizeplotly: false,
  };

  onLayoutChange = (layout) => {
    this.setState({ layout });
  };

  onResize = (layouts) => {
    this.setState({
      layout: layouts,
    });
  };

  render() {
    return (
      <>
        <ReactGridLayout
          //rowHeight={200}
          cols={12}
          onResize={this.onResize}
          //width={100}
          // breakpoints={{ lg: 1200, xxs: 1 }}
          // cols={{ lg: 12, xxs: 2 }}
          //autoSize={true}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          draggableHandle=".MyDragHandleClassName"
          draggableCancel=".MyDragCancel"
          isDraggable={true}
          isResizable={true}

          // useCSSTransforms={true}
        >
          <div className="item" key={1}>
            <DashboardHeader />
          </div>

          {/* <FearAndGreedIndex className="item" key={3} />
            <FinHubNewsfeed className="item" key={4} />
            <TwitterWidget className="item" key={5} /> */}
          <div className="item" key={2}>
            <div className="MyDragHandleClassName">
              Drag from Here - <span className="text">2</span>
            </div>
            <TickerWIdget />
          </div>
          <div className="item" key={3}>
            <div className="MyDragHandleClassName">
              Drag from Here - <span className="text">3</span>
            </div>
            <FinHubNewsfeed />
          </div>
          <div className="item" key={4}>
            <div className="MyDragHandleClassName">
              Drag from Here - <span className="text">4</span>
            </div>
            <TwitterWidget />
          </div>
          <div className="item" key={5}>
            <div className="MyDragHandleClassName">
              Drag from Here - <span className="text">5</span>
            </div>
            <FearAndGreedIndex />
          </div>
        </ReactGridLayout>
      </>
    );
  }
}

export default Dashboardpage;

Dashboardpage.defaultProps = {
  rowHeight: 150,
  cols: 2, // to make grid item 50% or 100%
};

//const TwitterWidgetWrapper = styled.div``;
