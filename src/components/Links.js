import React from "react";

function Links({ links }) {
  return (
    <>
      <h3>Links</h3>
      <a href={links.github}>{links.github}</a>
      <a href={links.github}>{links.linkedin}</a>
    </>
  );
}

export default Links;
