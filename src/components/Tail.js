// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Footer } from "react-materialize"

const Tail = () => (
  // <footer class="page-footer">
  //   <div class="footer-copyright">
  //     <div class="container">
  //       © 2019 Copyright Text
  //       <div class="right">
  //         <a href="#" class="grey-text">github</a>
  //         <a href="#" class="grey-text">twitter</a>
  //         <a href="#" class="grey-text">facebook</a>
  //       </div>
  //     </div>
  //   </div>
  // </footer>
  <Footer
    copyrights="© 2019 Copyright Text"
    moreLinks={
      <div className="right">
        <a href="#!" className="grey-text">github</a>
        {' '}
        <a href="#!" className="grey-text">twitter</a>
        {' '}
        <a href="#!" className="grey-text">facebook</a>
      </div>
    }
    links={false}
  />
)

export default Tail
