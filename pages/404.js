import Link from "next/link";

export default function Custom404() {

  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <h1>
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <br />

      <Link href="/">

        <button
          className="primary-btn"
        >
          Back To Store
        </button>

      </Link>

    </div>
  );
}
