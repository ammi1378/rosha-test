import React from "react";
import { MoreInfoModalProps } from "./MoreInfoModal.props";

const moreInfoModalComponent = "moreInfoModalComponent";

const MoreInfoModalComponent: React.FC<MoreInfoModalProps> = ({
    service,
}) => {
    return (
        <div className="modal fade" id={service + "-modal"}>
            <div className="modal-dialog modal-dialog-centered mt-5">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title"> VIP Bus</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <div className="Rosha-position-modal">
                            <img className="Rosha-style-banner rounded" src="./assets/NewImages/Bus=-0p/bignes.4k4jnsyl.3hb.jpg" alt="" />
                            <div className="Rosha-layer-on-benner rounded"></div>
                            <h2 className="Rosha-layer-title-benner modal-dialog-centered">
                                Parsian eskania International Bus
                            </h2>
                        </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="rlr-data-container woocommerce-MyAccount-content">
                            <h1 className="type-h3 rlr-data-table__title">Services</h1>
                            <div className="table">
                                <table className="rlr-data-table woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
                                    <thead className="rlr-data-table__header">
                                        <tr className="rlr-data-table__header-row">
                                            <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-number">
                                                <span className="nobr"> service </span>
                                            </th>
                                            <th className="woocommerce-orders-table__header woocommerce-orders-table__header-order-date">
                                                <span className="nobr"> Condition </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="rlr-data-table__row woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> location </a>
                                            </td>
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> tehran </a>
                                            </td>
                                        </tr>
                                        <tr className="rlr-data-table__row woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> point </a>
                                            </td>
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> 4.5/10 </a>
                                            </td>
                                        </tr>
                                        <tr className="rlr-data-table__row woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> Services</a>
                                            </td>
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> Restaurant, gym, cafe, ... </a>
                                            </td>
                                        </tr>
                                        <tr className="rlr-data-table__row woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html"> WIFI </a>
                                            </td>
                                            <td className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
                                                <a href="./product-detail-page.html">
                                                    <i className="flaticon-check"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="row">
                            <div className=" my-2">
                                <a href="Rosha-Form.html" className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1">Booking </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInfoModalComponent;
