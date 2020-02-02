import React from "react"
import SEO from "../components/seo"
import LatestEpisode from "../episodes/s02e05.mdx"

const IndexPage = () => {
  return (
    <>
      <SEO title="Trevlig Mjukvara" />
      <LatestEpisode />
    </>
  )
}

export default IndexPage
