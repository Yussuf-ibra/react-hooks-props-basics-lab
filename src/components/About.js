import React from "react";
import user from "../data/user";
import Links from "./link";

function About(bio) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>https://github.com/liza</h3>
      <h3>https://www.linkedin.com/in/liza/</h3>
      <Links github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default About;
