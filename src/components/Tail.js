// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Footer } from "react-materialize"

import githubLogo from '../assets/img/icons/githubLogo.svg';
import twitterLogo from '../assets/img/icons/twitterLogo.svg';
import facebookLogo from '../assets/img/icons/facebookLogo.svg';

const Tail = () => (
  <Footer
    copyrights="© 2019 Copyright"
    moreLinks={
      <div className="right">
        <a href="https://github.com/purunumi" target="_blank" className="github">
          <svg className="icon">
            <use xlinkHref={`#${githubLogo.id}`} />
          </svg>
        </a>
        <a href="https://twitter.com/@purunumi" target="_blank" className="twitter">
          <svg className="icon">
            <use xlinkHref={`#${twitterLogo.id}`} />
          </svg>
        </a>
        <a href="https://www.facebook.com/daejong.bang" target="_blank" className="facebook">
          <svg className="icon">
            <use xlinkHref={`#${facebookLogo.id}`} />
          </svg>
        </a>
      </div>
    }
  />
)

export default Tail
