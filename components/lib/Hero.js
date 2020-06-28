import React from 'react';
import Link from "next/link";

/**
 * Hero Image
 * @param {*} props 
 */

export default (props) => {
  return (
    <div
      className="hero-item"
      style={{ backgroundImage: `url('${props.bgImage.src}')` }}
    >
      <h3>Here Title</h3>
      <ul>
        <li>More Here</li>
        <li>More There</li>
      </ul>
      <Link href="/"><a>More to explore ></a></Link>
    </div>
  );
}

