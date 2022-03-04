import React from 'react';
import Article from '../../components/article/Article';
import { laptop1, laptop2, laptop3, laptop4, laptop5 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Visit out Works</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={laptop1} date="Sep 26, 2021" text="This is a online product selling sit" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={laptop2} date="Sep 26, 2021" text="This is a online product selling sit" />
        <Article imgUrl={laptop3} date="Sep 26, 2021" text="This is a online product selling sit" />
        <Article imgUrl={laptop4} date="Sep 26, 2021" text="This is a online product selling sit" />
        <Article imgUrl={laptop5} date="Sep 26, 2021" text="This is a online product selling sit" />
      </div>
    </div>
  </div>
);

export default Blog;
