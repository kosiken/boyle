import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import lonely from "../images/word-image-1063.png"

import lonely2 from "../images/creative_bookcover.webp"

import camera from "../images/noo.jpg"
import lion from "../images/lion.jpg"
import moduleName from "../images/book-cover-art-Down-Dog-Lucy-Edge-1.jpg"
import bc8 from "../images/bc8.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="secondary" id="tint"></div>
    <div className="content">
      <div className="container-small flex-row">
        <div className="haf">
          <p className="large-text white">
            Hi, I'm a writer <br /> and editor
          </p>

          <p
            className="white"
            style={{
              margin: "10px 20% 10px 0",
              fontSize: "1.2em",
            }}
          >
            I know it seems peculiar that I'm a woman and my name is Joseph but
            I don't care Im a writer , with Orin Martin, of Fruit Trees for
            Every Garden (Ten Speed Press, 2019)
          </p>
        </div>
        <div className="haf">
          <div id="profile-img-holder">
            <Image src="girl-237871_1920.jpg" />
          </div>
        </div>
      </div>
      <div className="masonry">
        <div className="underline" style={{ marginBottom: "1.5em" }}>
          <h3 className="title grey">My works</h3>
        </div>

        <div className="grids container">
          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={camera} />
              </div>
              <div className="section">
                <h6 className="title">The Overlay</h6>

                <p className="small-text">
                  Just like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={lonely2} />
              </div>
              <div className="section">
                <h6 className="title">Papers and Letters</h6>

                <p className="small-text">
                  Just like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={lonely} />
              </div>
              <div className="section">
                <h6 className="title">The Overlay</h6>

                <p className="small-text">
                  ust like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={lion} />
              </div>
              <div className="section">
                <h6 className="title">The Overlay</h6>

                <p className="small-text">
                  Just like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={bc8} />
              </div>
              <div className="section">
                <h6 className="title">Papers and Letters</h6>

                <p className="small-text">
                  Just like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="overlayed">
              <div className="img">
                <img src={moduleName} />
              </div>
              <div className="section">
                <h6 className="title">The Overlay</h6>

                <p className="small-text">
                  ust like in fairy tales, once true love is found, people live
                  happily ever after.
                </p>
                <div className="btn-div">
                  <Link
                    className={"btn secondary"}
                    to={"/works/prose?book=the_overlay"}
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    <div className=""></div>
  </Layout>
)

export default IndexPage
