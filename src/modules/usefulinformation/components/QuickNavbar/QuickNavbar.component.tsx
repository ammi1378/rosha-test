import Link from "next/link";
import React from "react";
import { QuickNavbarProps } from "./QuickNavbar.props";

const quickNavbarComponent = "quickNavbarComponent";

const QuickNavbarComponent: React.FC<QuickNavbarProps> = ({ className }) => {
  return (
    <div className={`${quickNavbarComponent} ${className}`}>
      <div className="rlr-search-results-page__breadcrumb-section">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb rlr-breadcrumb__items">
            <li className="breadcrumb-item rlr-breadcrumb__item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item rlr-breadcrumb__item"><Link href="/">Destination</Link></li>
            <li className="breadcrumb-item rlr-breadcrumb__item active" aria-current="page">Tour</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default QuickNavbarComponent;
