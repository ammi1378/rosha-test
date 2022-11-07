import React from "react";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import AsidBlogesComponent from "../AsidBloges/AsidBloges.component";
import CardBlogesComponent from "../CardBloges/CardBloges.component";
import { BloglistProps } from "./Bloglist.props";

const bloglistComponent = "bloglistComponent";

const BloglistComponent: React.FC<BloglistProps> = ({ className }) => {
  return <div className={`${bloglistComponent} ${className} row rlr-search-results-page__product-details rlr-section__py`}>
   <AsidBlogesComponent />
   <CardBlogesComponent />
  </div>
};

export default BloglistComponent;