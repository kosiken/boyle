import React, { Component } from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import camera from "../../images/noo.jpg"
import lion from "../../images/lion.jpg"

import bc8 from "../../images/bc8.jpg"
import lonely2 from "../../images/creative_bookcover.webp"
import { Link, useStaticQuery, graphql } from "gatsby"
export class Prose extends Component {
  state = {
    featured: "The Overlay",
    excerpt: "excerpt",
    works: [],
    offset: 0,
  }
  async componentDidMount() {
    let data = await fetch(this.props.file, {
      method: "GET",
    })
    data = await data.json()
    console.log(
      "data.map(p => p.link)",
      this.props.book,
      data.map(p => p.link.slice(1)).find(v => v == this.props.book)
    )
    this.setState({
      works: data,
      featured: data.find(v => v.link.slice(1) === this.props.book),
    })
  }

  renderWorks = () => {
    if (this.state.works[0]) {
      return this.state.works.slice(this.state.offset, 3).map((v, n) => (
        <Link key={"work" + n} className="book" to="works/prose">
          <img className={"book-thumb"} src={"/books/" + v.image} />
          <h4 className="grey book-name">{v.title}</h4>
        </Link>
      ))
    }
    return "loading"
  }

  render() {
    return (
      <Layout sel="works">
        <SEO
          title={this.state.featured.title || "loading"}
          description={this.state.featured.excerpt || "loading"}
          image={camera}
        />

        <div
          className="grid"
          style={{
            margin: "1.8em 0",
            gridTemplateColumns: "25% 60% 15%",
            overflow: "hidden",
          }}
        >
          <div id={"book-data"}>
            <div className={"book-image-container"}>
              <img
                id={"book-image"}
                src={"/books/" + this.state.featured.image}
              />
            </div>

            <div className={"meta-data-div"}>
              <span className="meta">Adventure</span>
              <span className="meta">188 pages</span>
              <span className="meta">2017</span>
              <span className="meta">284 reads</span>
            </div>
          </div>
          <div className="book-story ">
            <div className="underline">
              <h3 className={"title grey"}>
                {this.state.featured.title || "loading"}
              </h3>
            </div>

            <section className="quote grey  ">
              <strong>"</strong>
              <p>{this.state.featured.short || "loading"}</p>
              <strong className="right">"</strong>
            </section>
            <section className="story grey">
              <p>{this.state.featured.excerpt || "loading"}</p>
            </section>
          </div>
          <div className={"scroll text-center p20"}>
            {this.renderWorks()}
            <Link className={"btn secondary"} to={"/works"}>
              More
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

function Page2(props) {
  let book = props.location.search.slice(6)
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      file(name: { eq: "books" }, ext: { eq: ".json" }) {
        publicURL
      }
    }
  `)

  return <Prose file={data.file.publicURL} book={book} />
}
export default Page2
