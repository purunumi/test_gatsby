import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
import SEO from "../components/SEO"
import BlogFeed from "../components/BlogFeed"
import PortfolioFeed from "../components/PortfolioFeed"

const IndexPage = () => (
  <Layout wrap="page_index">
    <SEO title="Home" />

    <a href="#!" className="recent-post container">
      <div className="cover" style={{ backgroundImage: `url('https://placehold.it/640x700')` }} />
      <div className="row">
        <div className="content col s12 m7 l6">
          <div className="card-panel">
            <h1 className="h5">Dolore aliquip nostrud sint Lorem commodo.</h1>
            <p className="description">Quis minim ut occaecat anim laboris occaecat officia magna id fugiat adipisicing qui.</p>
          </div>
        </div>
      </div>
    </a>

    <div className="container">
      <div className="section">
        <BlogFeed />
      </div>

      <div className="section">
        <PortfolioFeed />
      </div>
    </div>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
