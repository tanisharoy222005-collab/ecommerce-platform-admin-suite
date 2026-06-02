import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

export default function Admin() {

  const { orders } = useStore();

  const revenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const productsSold = orders.reduce(
    (sum, order) =>
      sum + order.items.length,
    0
  );

  const customers = orders.length;

  return (
    <Layout>

      <h1 style={{ marginBottom: "30px" }}>
        Commerce Analytics Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <h1>
            ${revenue.toFixed(2)}
          </h1>
        </div>

        <div className="dashboard-card">
          <h3>Orders</h3>
          <h1>{orders.length}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Products Sold</h3>
          <h1>{productsSold}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Customers</h3>
          <h1>{customers}</h1>
        </div>

      </div>

      <div className="chart">

        <h2>Revenue Trend</h2>

        <div className="chart-bars">

          <div
            style={{
              height: "120px"
            }}
          />

          <div
            style={{
              height: "180px"
            }}
          />

          <div
            style={{
              height: "250px"
            }}
          />

          <div
            style={{
              height: "220px"
            }}
          />

          <div
            style={{
              height: "300px"
            }}
          />

          <div
            style={{
              height: "270px"
            }}
          />

        </div>

      </div>

      <div className="analytics-section">

        <h2>Top Products</h2>

        <div className="top-products">

          <div className="top-product-card">
            <h3>Wireless Headphones</h3>
            <p>Revenue Leader</p>
          </div>

          <div className="top-product-card">
            <h3>Gaming Mouse</h3>
            <p>High Conversion</p>
          </div>

          <div className="top-product-card">
            <h3>Mechanical Keyboard</h3>
            <p>Best Seller</p>
          </div>

        </div>

      </div>

      <div
        className="chart"
        style={{
          marginTop: "40px"
        }}
      >

        <h2>Recent Orders</h2>

        <table className="table">

          <thead>

            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order.id}>

                <td>
                  {order.id}
                </td>

                <td>
                  {order.date}
                </td>

                <td>
                  ${order.total}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}
