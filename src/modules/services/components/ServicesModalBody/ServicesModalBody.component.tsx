import React from "react";
import { ServicesModalBodyProps } from "./ServicesModalBody.props";

const servicesModalBodyComponent = "servicesModalBodyComponent";

const ServicesModalBodyComponent: React.FC<ServicesModalBodyProps> = ({
  className,
  titleBanner,
  describtion,
  services,
}) => {
  return (
    <div className={`${servicesModalBodyComponent} ${className} modal-body`}>
      <div className="Rosha-position-modal">
        <img
          className="Rosha-style-banner rounded"
          src="/NewImages/hotels/Espinas-Palace-Hotel-Tehran.jpg"
          alt=""
        />
        <div className="Rosha-layer-on-benner rounded"></div>
        <h2 className="Rosha-layer-title-benner modal-dialog-centered">
          {titleBanner}
        </h2>
      </div>
      <p className="mt-3">{describtion}</p>
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
              {services.map((service, index) => {
                return (
                  <tr key={index} className="rlr-data-table__row woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
                    <td
                      className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                      data-title="Order"
                    >
                      <a href="./product-detail-page.html">{service.service}</a>
                    </td>
                    <td
                      className="rlr-data-table__cell woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number"
                      data-title="Order"
                    >
                      <a href="./product-detail-page.html">
                        {service.condition}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesModalBodyComponent;
