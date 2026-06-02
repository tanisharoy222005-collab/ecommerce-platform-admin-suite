import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <h1>Manage Your Store Like an Enterprise</h1>

        <p>
          Modern e-commerce platform featuring product catalog,
          inventory management, revenue analytics, customer insights,
          order tracking, and secure checkout workflows.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Selling
          </button>

          <button className="secondary-btn">
            View Dashboard
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>Revenue</p>
            <h2>$248K</h2>
          </div>

          <div className="stat-card">
            <p>Orders</p>
            <h2>12,450</h2>
          </div>

          <div className="stat-card">
            <p>Customers</p>
            <h2>8,320</h2>
          </div>

          <div className="stat-card">
            <p>Products</p>
            <h2>2,140</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
