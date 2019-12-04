import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
    <Layout>
        <h1>This is the third page</h1>
        <Link to="/">Return Home</Link>
    </Layout>
)

export default ThirdPage;