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

  return (
    <Layout>
      <h1>Business Analytics</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <h1>${revenue}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Orders</h3>
          <h1>{orders.length}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Products Sold</h3>
          <h1>{productsSold}</h1>
        </div>

      </div>

      <div className="chart">
        <h2>Recent Orders</h2>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  );
}
