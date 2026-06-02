import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="container">
        {children}

        <footer
          style={{
            marginTop: "80px",
            padding: "30px",
            textAlign: "center",
            color: "#94a3b8",
            borderTop: "1px solid #334155"
          }}
        >
          <p>
            Built with Next.js • React •
            Context API • Recharts • Vercel
          </p>

          <br />

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#60a5fa"
            }}
          >
            GitHub
          </a>

          {" | "}

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#60a5fa"
            }}
          >
            LinkedIn
          </a>
        </footer>
      </div>
    </>
  );
}
