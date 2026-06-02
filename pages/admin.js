import Layout from "../components/Layout";

export default function Admin() {
  return (
    <Layout>
      <h1>Admin Dashboard</h1>

      <img
        src="/admin-dashboard.png"
        alt="Admin Dashboard"
        className="hero-image"
      />

      <div className="admin-grid">
        <div className="card">
          <h3>Total Orders</h3>
          <p>1,250</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>$45,000</p>
        </div>

        <div className="card">
          <h3>Products</h3>
          <p>320</p>
        </div>

        <div className="card">
          <h3>Customers</h3>
          <p>980</p>
        </div>
      </div>
    </Layout>
  );
}
