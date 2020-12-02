import GridLayout from "react-grid-layout";
const Playground = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 2, y: 1, w: 3, h: 5, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 3, h: 3 },
  ];
  return (
    <>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" style={{ backgroundColor: "red" }}>
          HULA AAAAAAAAAA
        </div>
        <div key="b">HULA BBBBBBBBBB</div>
        <div key="c" style={{ border: "1px solid red" }}>
          HULA CCCCCCCCCC
        </div>
      </GridLayout>
    </>
  );
};

export default Playground;
