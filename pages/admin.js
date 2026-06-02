import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Admin() {

  const { orders } = useStore();

  const revenue = orders.reduce(
    (sum, order) =>
      sum + order.total,
    0
  );

  const chartData =
    orders.map((order) => ({
      order: order.id
        .toString()
        .slice(-4),
      revenue: order.total
    }));

  return (
    <Layout>

      <h1>
        Commerce Analytics
      </h1>

      <div
        className="dashboard-grid"
        style={{
          marginTop: "30px"
        }}
      >

        <div className="dashboard-card">
          <h3>Revenue</h3>
          <h1>
            ₹{revenue}
          </h1>
        </div>

        <div className="dashboard-card">
          <h3>Orders</h3>
          <h1>
            {orders.length}
          </h1>
        </div>

      </div>

      <div className="chart">

        <h2>
          Revenue Analytics
        </h2>

        <div
          style={{
            width: "100%",
            height: 400
          }}
        >

          <ResponsiveContainer>

            <BarChart
              data={chartData}
            >

              <XAxis
                dataKey="order"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="revenue"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="chart">

        <h2>
          Recent Orders
        </h2>

        <table className="table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map(
              (order) => (
                <tr
                  key={order.id}
                >
                  <td>
                    {order.id}
                  </td>

                  <td>
                    {order.date}
                  </td>

                  <td>
                    ₹{order.total}
                  </td>

                  <td>
                    {
                      order.status
                    }
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}
