import React from "react";
import { AsidBlogesProps } from "./AsidBloges.props";

const asidBlogesComponent = "asidBlogesComponent";

const AsidBlogesComponent: React.FC<AsidBlogesProps> = ({ className }) => {
  return <aside className={`${ asidBlogesComponent } ${className} col-xl-3 rlr-search-results-page__sidebar`}>
      <aside className="rlr-sidebar">
        <div className="rlr-sidebar__widget rlr-sidebar--search widget_search">
          <form role="search" method="get" action="http://railar.net/staging/" className="wp-block-search__button-outside wp-block-search__text-button wp-block-search">
            <label htmlFor="wp-block-search__input-1" className="wp-block-search__label">Search</label>
            <div className="wp-block-search__inside-wrapper"><input type="search" id="wp-block-search__input-1" className="wp-block-search__input" name="s" value="" placeholder="" required /></div>
          </form>
        </div>
        <div className="rlr-sidebar__widget rlr-sidebar--text">
          <h4>Text widget</h4>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className="rlr-sidebar__widget">
          <h4>Tag cloud</h4>
          <p className="wp-block-tag-cloud">
            <a href="#">Travel</a>
            <a href="#">Walking</a>
            <a href="#">Outdoor Fun</a>
            <a href="#">Trekking</a>
            <a href="#">Water Sports</a>
            <a href="#">Cinema</a>
            <a href="#">Asia</a>
            <a href="#">Nomad</a>
            <a href="#">Jip Lining</a>
          </p>
        </div>
        <div className="rlr-sidebar__widget">
          <h4>Categories</h4>
          <ul className="wp-block-categories">
            <li><a href="#">Hiking & Trekking</a></li>
            <li><a href="#">Rafting</a></li>
            <li><a href="#">Water Sports</a></li>
            <li><a href="#">Mountains</a></li>
            <li><a href="#">Summer Escapes</a></li>
          </ul>
        </div>
        <div className="rlr-sidebar__widget rlr-sidebar--posts">
          <h4>Recent posts</h4>
          <ul>
            <li>
              <a href="#">
                <img src="/NewImages/hotels/parsian-esteghlal-internationa.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>How to stay safe in pandemic</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/NewImages/hotels/parsian-esteghlal-internationa.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>Stoics ways of traveling</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/NewImages/hotels/parsian-esteghlal-internationa.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>Ways of living with the locals</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  </aside>
};

export default AsidBlogesComponent;