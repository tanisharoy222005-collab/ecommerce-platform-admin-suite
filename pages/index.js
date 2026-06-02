import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>E-Commerce Platform with Admin Suite</h1>

      <p>
        Production-ready e-commerce solution featuring product management,
        checkout workflow, order tracking, and administration dashboard.
      </p>

      <img
        src="/homepage.png"
        alt="Homepage"
        className="hero-image"
      />
    </Layout>
  );
}
