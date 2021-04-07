import React from 'react';

export default function Link({ href, clickAction = null }) {
  return (
    <li>
      <a className="link" href={`#${href}`} onClick={clickAction}>
        {href}
      </a>
    </li>
  );
}
