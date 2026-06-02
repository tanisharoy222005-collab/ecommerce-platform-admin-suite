import {
  useEffect,
  useState
} from "react";

import { useRouter }
from "next/router";

import Layout
from "../components/Layout";

import { useStore }
from "../context/StoreContext";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar
}
from "recharts";

export default function Admin() {

  const router =
    useRouter();

  const { orders } =
    useStore();

  const [period,
    setPeriod] =
    useState("30");

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    if(!token){
      router.push(
        "/login"
      );
    }

  }, []);

  const revenue =
    orders.reduce(
      (sum,o)=>
        sum + o.total,
      0
    );

  const revenueData = [
    {name:"Jan",sales:2400},
    {name:"Feb",sales:3500},
    {name:"Mar",sales:4200},
    {name:"Apr",sales:5800},
    {name:"May",sales:7600},
    {name:"Jun",sales:9100}
  ];

  const paymentData = [
    {name:"UPI",value:62},
    {name:"Card",value:23},
    {name:"Wallet",value:11},
    {name:"Bank",value:4}
  ];

  const funnelData = [
    {name:"Visitors",value:120000},
    {name:"Product Views",value:21600},
    {name:"Add To Cart",value:8600},
    {name:"Checkout",value:3800},
    {name:"Purchases",value:2799}
  ];

  const colors = [
    "#3b82f6",
    "#06b6d4",
    "#22c55e",
    "#f59e0b"
  ];

  return (

    <Layout>

      <div
        className=
        "dashboard-header"
      >

        <div>

          <div
            className=
            "analytics-badge"
          >
            Analytics Sandbox
          </div>

          <h1>
            Commerce BI Dashboard
          </h1>

          <p
            style={{
              color:"#94a3b8",
              marginTop:"10px"
            }}
          >
            Seeded with representative
            commerce data.
            Connect a live backend
            to enable real-time
            reporting.
          </p>

        </div>

        <select
          className=
          "date-filter"
          value={period}
          onChange={(e)=>
            setPeriod(
              e.target.value
            )
          }
        >

          <option value="7">
            Last 7 Days
          </option>

          <option value="30">
            Last 30 Days
          </option>

          <option value="90">
            Last 90 Days
          </option>

          <option value="365">
            Year To Date
          </option>

        </select>

      </div>

      <div
        className=
        "dashboard-grid"
      >

        <div
          className=
          "dashboard-card"
        >

          <h3>
            Revenue
          </h3>

          <h1>
            $
            {revenue > 0
              ? revenue.toFixed(0)
              : "248,400"}
          </h1>

          <span
            className=
            "kpi-positive"
          >
            +18.4%
          </span>

        </div>

        <div
          className=
          "dashboard-card"
        >

          <h3>
            Orders
          </h3>

          <h1>
            {orders.length > 0
              ? orders.length
              : "12,450"}
          </h1>

          <span
            className=
            "kpi-positive"
          >
            +12.8%
          </span>

        </div>

        <div
          className=
          "dashboard-card"
        >

          <h3>
            Conversion
          </h3>

          <h1>
            2.33%
          </h1>

          <span
            className=
            "kpi-positive"
          >
            +0.4%
          </span>

        </div>

        <div
          className=
          "dashboard-card"
        >

          <h3>
            Refund Rate
          </h3>

          <h1>
            1.4%
          </h1>

          <span
            className=
            "kpi-negative"
          >
            -0.2%
          </span>

        </div>

      </div>

      <div className="chart">

        <h2>
          Revenue Trend
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <LineChart
            data={revenueData}
          >

            <CartesianGrid
              strokeDasharray=
              "3 3"
            />

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      <div
        className=
        "dashboard-grid"
      >

        <div className="chart">

          <h2>
            Payment Analytics
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie
                data={paymentData}
                dataKey="value"
                outerRadius={100}
              >

                {paymentData.map(
                  (entry,index)=>(

                  <Cell
                    key={index}
                    fill={
                      colors[index]
                    }
                  />

                ))}

              </Pie>

              <Tooltip/>

            </PieChart>

          </ResponsiveContainer>

          <div
            style={{
              marginTop:"15px",
              color:"#94a3b8"
            }}
          >
            UPI 62% • Card 23% •
            Wallet 11% • Bank 4%
          </div>

        </div>

        <div className="chart">

          <h2>
            Sales Funnel
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={funnelData}
            >

              <XAxis
                dataKey="name"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>
      <div
        className=
        "insight-card"
      >

        <h3>
          AI Generated Insights
        </h3>

        <ul>

          <li>
            UPI remains the
            dominant payment
            channel at 62%.
          </li>

          <li>
            Checkout abandonment
            estimated at 28%.
          </li>

          <li>
            Audio category
            contributes highest
            revenue share.
          </li>

          <li>
            Conversion improved
            0.4% MoM.
          </li>

          <li>
            Mobile traffic
            contributes 67%
            of overall sessions.
          </li>

        </ul>

      </div>

      <div
        className="dashboard-grid"
        style={{
          marginTop:"30px"
        }}
      >

        <div className="chart">

          <h2>
            Geographic Revenue
          </h2>

          <table
            className="table"
          >

            <thead>

              <tr>
                <th>
                  Region
                </th>

                <th>
                  Revenue Share
                </th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>
                  United States
                </td>
                <td>
                  42%
                </td>
              </tr>

              <tr>
                <td>
                  Canada
                </td>
                <td>
                  21%
                </td>
              </tr>

              <tr>
                <td>
                  United Kingdom
                </td>
                <td>
                  18%
                </td>
              </tr>

              <tr>
                <td>
                  Germany
                </td>
                <td>
                  10%
                </td>
              </tr>

              <tr>
                <td>
                  Other
                </td>
                <td>
                  9%
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="chart">

          <h2>
            Inventory Alerts
          </h2>

          <table
            className="table"
          >

            <thead>

              <tr>

                <th>
                  Product
                </th>

                <th>
                  Stock
                </th>

                <th>
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>
                  Gaming Mouse
                </td>

                <td>
                  8
                </td>

                <td
                  className=
                  "low-stock"
                >
                  Low Stock
                </td>

              </tr>

              <tr>

                <td>
                  4K Monitor
                </td>

                <td>
                  5
                </td>

                <td
                  className=
                  "out-stock"
                >
                  Critical
                </td>

              </tr>

              <tr>

                <td>
                  Mechanical Keyboard
                </td>

                <td>
                  14
                </td>

                <td>
                  Healthy
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

      <div
        className="chart"
        style={{
          marginTop:"30px"
        }}
      >

        <h2>
          Recent Orders
        </h2>

        <table
          className="table"
        >

          <thead>

            <tr>

              <th>
                Order ID
              </th>

              <th>
                Date
              </th>

              <th>
                Total
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map(
                (order)=>(

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
                    $
                    {order.total}
                  </td>

                </tr>

              ))

            ) : (

              <>

                <tr>
                  <td>
                    ORD-10342
                  </td>
                  <td>
                    02 Jun 2026
                  </td>
                  <td>
                    $399
                  </td>
                </tr>

                <tr>
                  <td>
                    ORD-10341
                  </td>
                  <td>
                    02 Jun 2026
                  </td>
                  <td>
                    $129
                  </td>
                </tr>

                <tr>
                  <td>
                    ORD-10340
                  </td>
                  <td>
                    01 Jun 2026
                  </td>
                  <td>
                    $99
                  </td>
                </tr>

                <tr>
                  <td>
                    ORD-10339
                  </td>
                  <td>
                    01 Jun 2026
                  </td>
                  <td>
                    $458
                  </td>
                </tr>

              </>

            )}

          </tbody>

        </table>

      </div>

    </Layout>

  );

}
