import React from 'react';

export default function BrowserDemo(props) {
  return (
    <article className="window-frame focus">
      <header className="top-bar">
        <div className="controls">
          <div className="control close"></div>
          <div className="control minify"></div>
          <div className="control expand"></div>
        </div>
        <input className="address-bar" defaultValue="http://www.example.com" />
      </header>
      <section className="window-content">
        {props.children}
      </section>
    </article>
  );
}
