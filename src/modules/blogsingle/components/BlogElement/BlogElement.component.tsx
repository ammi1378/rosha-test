import React from "react";
import { BlogElementProps } from "./BlogElement.props";

const blogElementComponent = "blogElementComponent";

const BlogElementComponent: React.FC<BlogElementProps> = ({ className }) => {
  return <article className={`${blogElementComponent} ${className} rlr-article rlr-article-single--v2`}>
    <header className="rlr-article__header">
      <div className="rlr-article__header__timestamp">Published 09 April Jan 2022</div>
      <h1 className="type-h1">A weekend in Nagarkot</h1>
      <h6 className="type-sub-title">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</h6>
    </header>
    <div className="rlr-article__featured-photo">
      <img src="./assets/images/blog-image--main.jpg" alt="Featured Photo" />
    </div>
    <div className="rlr-article__wrapper">
      <div className="content">
        <div className="content__highlight">
          <h2 className="type-h3">About Nagarkot</h2>
          <p className="type-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </p>
        </div>
        <figure>
          <img src="./assets/images/blog-single-02.jpg" alt="Photo" />
        </figure>
        <p className="type-lead">Nunc commodo eros velit, vitae tempor purus laoreet in. Fusce a condimentum magna, sit amet ultricies nibh. Vivamus tristique enim non accumsan ornare. Cras tincidunt ultrices libero nec bibendum.</p>
        <p className="type-lead">
          Cras dignissim eros ullamcorper sapien porttitor, eget laoreet ipsum dapibus. Nulla tincidunt pulvinar ante, in sollicitudin massa iaculis quis. Praesent ac venenatis mi. Vivamus risus dui, convallis nec risus a, luctus gravida ipsum. Donec erat libero, euismod
          nec quam nec, congue maximus urna. Fusce pharetra urna ut pharetra iaculis. In vitae venenatis sem, nec lacinia nibh. Pellentesque ac consectetur lectus.
        </p>
        <p className="type-lead">Mauris vitae bibendum enim. Curabitur luctus ligula purus, sit amet venenatis orcijar Vivamus tristique enim non accumsan ornare. Cras tincidunt ultrices libero nec bibendum.</p>
        <blockquote>
          <h5 className="type-h6-medium">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
          <p className="type-body content-quote__author">— Sanjeev Jha, Railar Solutions</p>
        </blockquote>
        <h5 className="type-h6-medium">Things to note</h5>
        <p className="type-lead">Nunc commodo eros velit, vitae tempor purus laoreet in. Fusce a condimentum magna, sit amet ultricies nibh. Vivamus tristique enim non accumsan ornare. Cras tincidunt ultrices libero nec bibendum.</p>
        <div className="rlr-article__badges">
          <span className="rlr-badge rlr-badge--left rlr-badge-- rlr-badge rlr-badge--left"> Nomad </span> <span className="rlr-badge rlr-badge--left rlr-badge-- rlr-badge rlr-badge--left"> Wanderer </span>
          <span className="rlr-badge rlr-badge--left rlr-badge-- rlr-badge rlr-badge--left"> Off the Beat </span>
        </div>
      </div>
    </div>
  </article>
};

export default BlogElementComponent;