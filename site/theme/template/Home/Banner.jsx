import React from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import 'react-github-button/assets/style.css';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default class Banner extends React.Component {
  typeFunc(a) {
    if (a.key === 'line') {
      return 'right';
    } else if (a.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="banner">
        <div className="home-content">
          <h1>Work Smarter, Not Harder</h1>
          <h3>A revolutionary workflow to optimise your design and development.</h3>
          <Link to="/docs/atui/introduce">
              <span className="btn-more">Learn more</span>
          </Link>
        </div>
      </section>
    );
  }
}
