import React from "react";

const Link = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

const Cover = () => (
  <div className="cover">
    <div className="contents">
      <div className="title">elements</div>
      <div className="text body">
        Elements is a series exploring the beauty in simple interactions. ■
        These pieces are neither images nor renderings: they are just a handful
        of elements (using two simple building blocks of the web, html and css).
        ■ Elements was created for the inaugural issue of{" "}
        <Link href="https://thedisconnect.co/one/">The Disconnect</Link>.
      </div>
      <div className="text footnote">
        <Link href="https://chris.bolin.co">Chris Bolin</Link>, 2018
      </div>
      <div className="footer first-footer">↓</div>
    </div>
  </div>
);

export default Cover;
