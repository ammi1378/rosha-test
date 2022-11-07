import React from "react";
import BookingFormSingleTourComponent from "../BookingFormSingleTour/BookingFormSingleTour.component";
import ProductDetailHeaderComponent from "../ProductDetailHeader/ProductDetailHeader.component";
import { ProductDetailSectionProps } from "./ProductDetailSection.props";

const productDetailSectionComponent = "productDetailSectionComponent";

const ProductDetailSectionComponent: React.FC<ProductDetailSectionProps> = ({
  className,
  service,
}) => {
  return (
    <section
      className={`${productDetailSectionComponent} ${className} row rlr-product-detail-section`}
    >
      <ProductDetailHeaderComponent service={service} />
      <BookingFormSingleTourComponent product={service} />
    </section>
  );
};

export default ProductDetailSectionComponent;
