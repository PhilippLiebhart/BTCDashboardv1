import PropTypes from "prop-types";
import usePhemexTicker from "../../hooks/usePhemexTicker";

const Orderbook = (props) => {
  //const [tick, dayMarket, orderbook] = usePhemexTicker();
  return (
    <h1>orderbook</h1>
    // <div className="d-flex flex-nowrap p-3">
    //   <div>
    //     <h6>Asks</h6>
    //     <table className="table table-striped table-dark w-auto small mr-3">
    //       <thead>
    //         <tr>
    //           <th scope="col">price</th>
    //           <th scope="col">volume</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {orderbook.data?.asks?.map((order, index) => {
    //           return (
    //             <tr key={index}>
    //               <td className="p-0 m-0 text-center">{order[0] / 10000}</td>
    //               <td className="p-0 m-0 text-center">{order[1]}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    //   <div>
    //     <h6>Bids</h6>
    //     <table className="table table-striped table-dark w-auto small">
    //       <thead>
    //         <tr>
    //           <th scope="col">price</th>
    //           <th scope="col">volume</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {orderbook.data?.bids?.map((order, index) => {
    //           return (
    //             <tr key={index}>
    //               <td className="p-0 m-0 text-center">{order[0] / 10000}</td>
    //               <td className="p-0 m-0 text-center">{order[1]}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

Orderbook.propTypes = {};

export default Orderbook;
