import Layout from "../components/Layout";
import { useStore } from "../context/StoreContext";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

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

  const avgOrder =
    orders.length > 0
      ? revenue / orders.length
      : 0;

  const revenueTrend = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 24000 },
    { month: "Apr", revenue: 32000 },
    { month: "May", revenue: 41000 },
    { month: "Jun", revenue: 52000 }
  ];

  const paymentData = [
    { name: "UPI", value: 62 },
    { name: "Credit Card", value: 23 },
    { name: "Debit Card", value: 11 },
    { name: "Net Banking", value: 4 }
  ];

  const productData = [
    {
      product: "4K Monitor",
      revenue: 58200,
      units: 146,
      conversion: "6.2%"
    },
    {
      product: "Keyboard",
      revenue: 34100,
      units: 264,
      conversion: "5.4%"
    },
    {
      product: "Headphones",
      revenue: 22900,
      units: 231,
      conversion: "4.7%"
    },
    {
      product: "Gaming Mouse",
      revenue: 13340,
      units: 226,
      conversion: "4.1%"
    }
  ];

  const COLORS = [
    "#3b82f6",
    "#22c55e",
    "#f59e0b",
    "#ef4444"
  ];

  return (
    <Layout>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "25px"
        }}
      >
        <h2>
          Analytics Environment
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginTop: "10px"
          }}
        >
          Demo analytics dataset generated
          to simulate enterprise
          e-commerce operations for
          portfolio demonstration.
        </p>
      </div>

      <h1
        style={{
          marginBottom: "30px"
        }}
      >
        Executive Commerce Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Revenue</h3>
          <h1>
            ₹{revenue.toLocaleString()}
          </h1>
        </div>

        <div className="dashboard-card">
          <h3>Total Orders</h3>
          <h1>{orders.length}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Products Sold</h3>
          <h1>{productsSold}</h1>
        </div>

        <div className="dashboard-card">
          <h3>Average Order Value</h3>
          <h1>
            ₹{avgOrder.toFixed(0)}
          </h1>
        </div>

      </div>

      <div className="chart">

        <h2>
          Revenue Growth Trend
        </h2>

        <div
          style={{
            height: 350
          }}
        >
          <ResponsiveContainer>

            <LineChart
              data={revenueTrend}
            >

              <XAxis
                dataKey="month"
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>
        </div>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "20px",
          marginBottom: "30px"
        }}
      >

        <div className="chart">

          <h2>
            Payment Analytics
          </h2>

          <div
            style={{
              height: 300
            }}
          >
            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={paymentData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {paymentData.map(
                    (
                      entry,
                      index
                    ) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[
                            index
                          ]
                        }
                      />
                    )
                  )}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>
          </div>

        </div>

        <div className="chart">

          <h2>
            Sales Funnel
          </h2>

          <table
            className="table"
          >
            <tbody>

              <tr>
                <td>
                  Visitors
                </td>
                <td>
                  120,000
                </td>
              </tr>

              <tr>
                <td>
                  Product Views
                </td>
                <td>
                  21,600
                </td>
              </tr>

              <tr>
                <td>
                  Add To Cart
                </td>
                <td>
                  8,640
                </td>
              </tr>

              <tr>
                <td>
                  Checkout Started
                </td>
                <td>
                  3,888
                </td>
              </tr>

              <tr>
                <td>
                  Orders
                </td>
                <td>
                  2,799
                </td>
              </tr>

            </tbody>
          </table>

        </div>

      </div>

      <div className="chart">

        <h2>
          Product Performance
        </h2>

        <div
          style={{
            height: 350
          }}
        >

          <ResponsiveContainer>

            <BarChart
              data={productData}
            >

              <XAxis
                dataKey="product"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="revenue"
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      <div className="chart">

        <h2>
          Product Performance Table
        </h2>

        <table className="table">

          <thead>

            <tr>
              <th>Product</th>
              <th>Revenue</th>
              <th>Units</th>
              <th>Conversion</th>
            </tr>

          </thead>

          <tbody>

            {productData.map(
              (product) => (
                <tr
                  key={
                    product.product
                  }
                >
                  <td>
                    {
                      product.product
                    }
                  </td>

                  <td>
                    ₹
                    {product.revenue.toLocaleString()}
                  </td>

                  <td>
                    {
                      product.units
                    }
                  </td>

                  <td>
                    {
                      product.conversion
                    }
                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      <div className="chart">

        <h2>
          AI Generated Insights
        </h2>

        <ul
          style={{
            lineHeight: "2"
          }}
        >
          <li>
            UPI contributes 62% of
            transactions.
          </li>

          <li>
            4K Monitor generates
            highest revenue despite
            lower volume.
          </li>

          <li>
            Checkout abandonment
            rate is 28%.
          </li>

          <li>
            Revenue increased
            24.3% month-over-month.
          </li>

          <li>
            Mobile traffic converts
            11% lower than desktop.
          </li>

          <li>
            Gaming Mouse inventory
            projected to run out
            within 5 days.
          </li>
        </ul>

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
                    {order.status}
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
