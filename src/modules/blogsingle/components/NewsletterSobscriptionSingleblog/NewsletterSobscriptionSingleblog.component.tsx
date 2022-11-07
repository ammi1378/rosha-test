import React from "react";
import { NewsletterSobscriptionSingleblogProps } from "./NewsletterSobscriptionSingleblog.props";

const newsletterSobscriptionSingleblogComponent = "newsletterSobscriptionSingleblogComponent";

const NewsletterSobscriptionSingleblogComponent: React.FC<NewsletterSobscriptionSingleblogProps> = ({ className }) => {
  return <section className={`${newsletterSobscriptionSingleblogComponent} ${className} rlr-section rlr-section__mt row align-items-center`}>
    <div className="col-lg-6">
      <div className="rlr-gallery--newsletter">
        <div className="rlr-gallery--newsletter__thumbs">
          <div className="rlr-gallery--newsletter__thumbs__col-1">
            <img src="./assets/images/rlr-newsletter-01.jpg" alt="gallery image" />
          </div>
          <div className="rlr-gallery--newsletter__thumbs__col-2">
            <img src="./assets/images/rlr-newsletter-02.jpg" alt="gallery image" />
            <img src="./assets/images/rlr-newsletter-03.jpg" alt="gallery image" />
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="rlr-newsletter">
        <div className="rlr-newsletter__content" data-aos="fade-down" data-aos-offset="250" data-aos-duration="700">
          <div className="rlr-newsletter__subtitle">Subscribe For Offers</div>
          <h2 className="rlr-newsletter__title">Adventures Calling You Guys!</h2>
          <p>The Brilliant reasons Emprise should be your one-stop-shop!</p>
          <form className="rlr-subscribe" data-aos="fade-up" data-aos-offset="250" data-aos-duration="700">
            <input type="email" className="rlr-subscribe__input" placeholder="Enter your email" />
            <button className="btn">Send Now!</button>
          </form>
          <p className="rlr-newsletter__ps">Expect a reply in 2-3 working days</p>
        </div>
      </div>
    </div>
  </section>
};

export default NewsletterSobscriptionSingleblogComponent;