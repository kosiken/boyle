import React from "react"

export default function Footer({ fixed }) {
  return (
    <div className={"footer" + (fixed ? " fixed bl" : "")}>
      &copy; Boyle Joseph 2020
    </div>
  )
}
