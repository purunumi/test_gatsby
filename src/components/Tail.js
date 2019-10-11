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
    moreLinks={<a href="#!">test</a>}
    links={<ul />}
    className="example"
  >
    <h5 className="white-text">
      Footer Content
    </h5>
    <p className="grey-text text-lighten-4">
      You can use rows and columns here to organize your footer content.
    </p>
  </Footer>
)

export default Tail
