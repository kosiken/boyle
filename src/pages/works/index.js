import React from "react"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import camera from "../../images/noo.jpg"
import { Link, graphql, useStaticQuery } from "gatsby"

//import camera from "../../images/noo.jpg"

class Works extends React.Component {
  state = {
    featured: "the_overlay",
    literature: "Prose",
    lits: ["Prose", "Poems", "Short Stories"],
    works: [],
  }
  nav = e => {
    e.persist()

    console.log(e.target.dataset)

    let n = e.target.dataset["lits"]
    this.setState({
      literature: this.state.lits[n],
    })
  }
  async componentDidMount() {
    let data = await fetch(this.props.file, {
      method: "GET",
    })
    data = await data.json()

    this.setState({ works: data })
  }

  renderWorks = () => {
    if (this.state.works[0]) {
      return this.state.works.map((n, i) => (
        <div className="card" key={"liom" + i}>
          <div className="overlayed">
            <div className="img">
              <img src={"books/" + n.image} />
            </div>
            <div className="section">
              <h6 className="title">{n.title}</h6>

              <p className="small-text">{n.short}</p>
              <div className="btn-div">
                <Link
                  className={"btn secondary"}
                  to={"/works/prose?book=" + n.link.slice(1)}
                >
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))
    }
    return <div>Loading</div>
  }

  render() {
    return (
      <Layout sel="works">
        <SEO title="My work" />
        <div className="slides secondary" style={{ margin: "1.5em 0" }}>
          <div
            id="featured-book"
            className="grid p20"
            style={{
              gridTemplateColumns: "30% 40% 30%",
            }}
          >
            <div className="img">
              <img src={camera} style={{ width: "80%" }} />
            </div>
            <section
              className="about br"
              style={{ paddingLeft: "1em", border: "none" }}
            >
              <h4 className="titles">The Overlay</h4>
              <p className="small-text">
                Students are expected to go into examination halls with their
                biros, erasers, rulers, pencils and any other materials that are
                permitted. No borrowing of any material is allowed during
                examinations. Students are not allowed to bring any papers,
                books or bags into the examination hall. However, where a
                particular course requires the use of tables, graphs, etc., the
                University shall supply these during examinations. Also,
                scientific calculators, organisers, etc., are not allowed during
                examinations unless specifically permitted by course lecturers.
                Students are advised to search themselves before entering the
                examination halls.
              </p>
              <p className="small-text">
                Students are expected to go into examination halls with their
                biros, erasers, rulers, pencils and any other materials that are
                permitted. No borrowing of any material is allowed during
                examinations. Students are not allowed to bring any papers,
                books or bags into the examination hall. However, where a
                particular course requires the use of tables, graphs, etc., the
                University
              </p>
            </section>
            <section className="recomendations br">
              <div className="comment">
                <p>{false}</p>
                <blockquote className="comment-text">
                  {" "}
                  Students are expected to go into examination halls with their
                  biros, erasers, rulers, pencils and any other materials that
                  are permitted. No borrowing of any material is allowed during
                </blockquote>
                <section style={{ paddingLeft: "1.5em" }}>
                  <strong>Martha Hall</strong> <span>Senior Analyst</span>
                </section>
              </div>
              <div className="comment">
                <p>{false}</p>
                <blockquote className="comment-text">
                  {" "}
                  Students are expected to go into examination halls with their
                  biros, erasers, rulers, pencils and any other materials that
                  are permitted. No borrowing of any material is allowed during
                </blockquote>
                <section>
                  <strong style={{ paddingLeft: "1.5em" }}>Martha Hall</strong>{" "}
                  <span>Senior Analyst</span>
                </section>
              </div>
            </section>
          </div>
        </div>

        <div className="flex-row center">
          {this.state.lits.map((v, n) => (
            <button
              className={
                "link-btn" + (v === this.state.literature ? " active" : "")
              }
              onClick={this.nav}
              data-lits={n}
              key={"lit" + (n + 1)}
            >
              {v}
            </button>
          ))}
        </div>

        <div className="grids container" style={{ margin: "5vh auto" }}>
          {this.renderWorks()}
        </div>
      </Layout>
    )
  }
}

function Page() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "books" }, ext: { eq: ".json" }) {
        publicURL
      }
    }
  `)

  return <Works file={data.file.publicURL} />
}
export default Page
