import type { NextPage } from "next";
import FormBookingComponent from "../../modules/booking/components/FormBooking/FormBooking.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";


const booking: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-section__content--md-top">
          <div className="rlr-section rlr-section__my">
            <div className="rlr-checkout">
              <article id="post-7" className="post-7 page type-page status-publish hentry">
                <div className="container-xxl">
                  <div className="entry-content">
                    {/* <FormBookingComponent /> */}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default booking;
