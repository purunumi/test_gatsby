import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const PortfolioFeed = () => {

  return (
    <div className="row">
      <div className="col s12 m6 l4">
        <div className="card medium sticky-action">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src="https://placehold.it/640x700" />
          </div>
          <div className="card-action">
            <span className="card-title activator grey-text text-darken-4">Eu nulla nulla occaecat nisi deserunt.<i className="material-icons right">more_vert</i></span>
            <p><a href="#!">github</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
            <p>Tempor consequat labore in commodo irure id.Duis irure anim do fugiat magna consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioFeed;