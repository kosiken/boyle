import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import Image from "../components/girl2"
const About = () => {
  return (
    <Layout sel="about" fixed>
      <SEO title="About Boyle" />

      <div className={"container"} style={{ margin: " 5vh 0" }}>
        <div className="grid col">
          <Image src="model-4605248_1920.jpg" />
          <div className="story" style={{ margin: " 0 5em 0" }}>
            <div className="underline" style={{ margin: "0.5em 0" }}>
              <h3 className="title grey">About Me</h3>
            </div>
            <p className="small-text">
              For any student to be adjudged qualified to be certificated by
              Covenant University as her graduate, he/she is expected to have
              successfully gone through the Towards A Total Graduate (TTG)
              Course which is specially designed as a consolidated approach
              towards raising a new generation of leaders equipped in their
              total personality to positively influence their community and
              restore hope to the citizens of their nations and to mankind in
              general. This course shall partly examine and provide teachings
              and counsel on the character status for Covenant University
              Students. There shall be a lecture component for this programme as
              well as appropriate examinations/tests to validate levels of
              comprehension in the course and the character disposition of the
              intending graduate. Attendance at all lectures and
              examinations/test is compulsory for graduating students. Students
              who fail the TTG Programme shall not be deemed to have graduated
              until the failure is remedied.
            </p>

            <p className="small-text">
              This section presents the regulations governing all examinations
              at the University. This is to avoid those pitfalls that have
              tended to erode the public's confidence in University Degrees.
              Students are admonished to study well, attend lectures and
              cultivate the habit of personal reading and studying. All students
              should observe the regulations, as ignorance of them shall not be
              entertained.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default About
