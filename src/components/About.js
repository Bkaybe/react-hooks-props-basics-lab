import React from "react";
import Links from "./Links";

function About({links, bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && typeof bio === "string" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={links} />
    </div>
  );
}

export default About;
