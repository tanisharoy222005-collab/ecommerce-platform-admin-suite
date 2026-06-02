import {
  useState
} from "react";

import Layout from "../components/Layout";

import {
  useStore
} from "../context/StoreContext";

import {
  useRouter
} from "next/router";

export default function Checkout() {

  const router = useRouter();

  const { cart } =
    useStore();

  const [form, setForm] =
    useState({

      name: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod:
        "upi"

    });

  const [errors, setErrors] =
    useState({});

  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
          item.quantity,
      0
    );

  const tax =
    subtotal * 0.10;

  const total =
    subtotal + tax;

  const validate = () => {

    const newErrors = {};

    if (!form.name)
      newErrors.name =
        "Name required";

    if (
      !form.email ||
      !form.email.includes("@")
    )
      newErrors.email =
        "Valid email required";

    if (
      !form.phone ||
      form.phone.length < 10
    )
      newErrors.phone =
        "Valid phone required";

    if (!form.address)
      newErrors.address =
        "Address required";

    setErrors(
      newErrors
    );

    return (
      Object.keys(
        newErrors
      ).length === 0
    );
  };

  const proceedPayment =
    () => {

      if (
        cart.length === 0
      ) {
        alert(
          "Cart is empty"
        );
        return;
      }

      if (!validate())
        return;

      router.push(
        `/payment?method=${form.paymentMethod}&amount=${total}`
      );
    };

  return (

    <Layout>

      <div
        className="checkout-progress"
      >

        <div>
          ✓ Cart
        </div>

        <div>
          ✓ Checkout
        </div>

        <div>
          Payment
        </div>

        <div>
          Complete
        </div>

      </div>

      <h1
        style={{
          marginBottom:
            "30px"
        }}
      >
        Secure Checkout
      </h1>

      <div
        className="checkout-grid"
      >

        <div
          className="checkout-form"
        >

          <h2>
            Customer Details
          </h2>

          <input
            placeholder="Full Name"
            value={
              form.name
            }
            onChange={(e) =>
              setForm({
                ...form,
                name:
                  e.target
                    .value
              })
            }
          />

          {errors.name && (
            <small
              className="error"
            >
              {
                errors.name
              }
            </small>
          )}

          <input
            placeholder="Email"
            value={
              form.email
            }
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target
                    .value
              })
            }
          />

          {errors.email && (
            <small
              className="error"
            >
              {
                errors.email
              }
            </small>
          )}

          <input
            placeholder="Phone"
            value={
              form.phone
            }
            onChange={(e) =>
              setForm({
                ...form,
                phone:
                  e.target
                    .value
              })
            }
          />

          {errors.phone && (
            <small
              className="error"
            >
              {
                errors.phone
              }
            </small>
          )}

          <input
            placeholder="Address"
            value={
              form.address
            }
            onChange={(e) =>
              setForm({
                ...form,
                address:
                  e.target
                    .value
              })
            }
          />

          {errors.address && (
            <small
              className="error"
            >
              {
                errors.address
              }
            </small>
          )}

          <h2
            style={{
              marginTop:
                "30px"
            }}
          >
            Payment Method
          </h2>

          <div
            className="payment-options"
          >

            <div
              className={
                form.paymentMethod ===
                "upi"
                  ? "payment-card active-payment"
                  : "payment-card"
              }
              onClick={() =>
                setForm({
                  ...form,
                  paymentMethod:
                    "upi"
                })
              }
            >
              UPI
            </div>

            <div
              className={
                form.paymentMethod ===
                "card"
                  ? "payment-card active-payment"
                  : "payment-card"
              }
              onClick={() =>
                setForm({
                  ...form,
                  paymentMethod:
                    "card"
                })
              }
            >
              Credit/Debit Card
            </div>

          </div>

        </div>

        <div
          className="checkout-summary"
        >

          <h2>
            Order Summary
          </h2>

          <div
            className="summary-row"
          >
            <span>
              Items
            </span>

            <span>
              {
                cart.length
              }
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Subtotal
            </span>

            <span>
              $
              {subtotal.toFixed(
                2
              )}
            </span>
          </div>

          <div
            className="summary-row"
          >
            <span>
              Tax
            </span>

            <span>
              $
              {tax.toFixed(
                2
              )}
            </span>
          </div>

          <div
            className="summary-row total-row"
          >
            <span>
              Total
            </span>

            <span>
              $
              {total.toFixed(
                2
              )}
            </span>
          </div>

          <button
            className="primary-btn"
            style={{
              width:
                "100%",
              marginTop:
                "20px"
            }}
            onClick={
              proceedPayment
            }
          >
            Continue To Payment
          </button>

        </div>

      </div>

    </Layout>
  );
}
