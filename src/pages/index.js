import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout";
import RecipieList from "../components/RecipieList";
import Banner from "../components/Banner";
const IndexPage = () => (
  <Layout>
    <Banner />
  <RecipieList />
  </Layout>
)

export default IndexPage
