import React from "react"
import Layout from "../components/layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello people!</h1>
      <h1>Home</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
