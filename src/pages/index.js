import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="SERV Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to SERV Docs</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/evmos-cli/single-node"
                header={{
                  label: "🚀 Launch Your Local Node",
                }}
                body={{
                  label:
                    "Getting started on SERV is simple and easy with a local node",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "🫡 Learn about SERV",
                }}
                body={{
                  label:
                    "Discover why SERV is built to be a perpetual data layer for the world's data",
                }}
              />

              <Card
                to="./validate"
                header={{
                  label: "🧑‍💻 Become a Validator",
                }}
                body={{
                  label:
                    "Join SERV's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="./develop/api"
                header={{
                  label: "💻 View SERV APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "🛠️ Launch dApp on SERV",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="./protocol/security"
                header={{
                  label: "🛡️ Security on SERV",
                }}
                body={{
                  label:
                    "Learn about our Security Policy",
                }}
              />

              <Card
                to="https://github.com/servprotocolorg"
                header={{
                  label: "🛠️ Contribute to SERV",
                }}
                body={{
                  label:
                    "Contribute to the thriving ecosystem of SERV and its open-source initiatives",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home