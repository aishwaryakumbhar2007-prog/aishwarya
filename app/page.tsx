"use client";

import React, { useState } from "react";

export default function Home() {
  const bounceStyle = {
  fontSize: "90px",
  display: "inline-block",
  animation: "bounce 1s infinite",
};
  const products = [
    {
      id: 1,
      name: "Vanilla Ice Cream",
      price: "₹50",
      rating: "⭐ 4.8",
      orders: "1,250 Orders",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
      description: "Delicious creamy vanilla ice cream loved by everyone.",
    },
    {
      id: 2,
      name: "Chocolate Ice Cream",
      price: "₹60",
      rating: "⭐ 4.9",
      orders: "2,100 Orders",
      image:
        "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400",
      description: "Rich chocolate flavor with creamy texture.",
    },
    {
      id: 3,
      name: "Strawberry Ice Cream",
      price: "₹55",
      rating: "⭐ 4.7",
      orders: "980 Orders",
      image:
        "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400",
      description: "Fresh strawberry taste in every scoop.",
    },
    {
      id: 4,
      name: "Mango Ice Cream",
      price: "₹65",
      rating: "⭐ 5.0",
      image:
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=500&q=80",
      description: "Sweet mango delight 🍋",
    },
    {
      id: 5,
      name: "Butterscotch Ice Cream",
      price: "₹70",
      rating: "⭐ 4.8",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400",
      description: "Crunchy caramel butterscotch flavor.",
    },
    {
      id: 6,
      name: "Kulfi Ice Cream",
      price: "₹80",
      rating: "⭐ 4.9",
      image:
        "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?w=400",
      description: "Traditional Indian kulfi taste 🇮🇳",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
 const [page, setPage] = useState<
  "home" | "details" | "customer" | "payment">("home");
  const [customerName, setCustomerName] = useState("");
const [streetName, setStreetName] = useState("");
const [districtName, setDistrictName] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
 // ---------------- PAYMENT PAGE ----------------
if (page === "payment" && selectedProduct) {
  return (
    <div
      style={{
        minHeight: "100vh",
         animation: "fadeIn 0.5s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#0d0509", fontSize: "45px" }}>
        🎉 Enjoy your order
      </h1>

      <div
  style={{
    fontSize: "90px",
    display: "inline-block",
    animation: "bounce 1s infinite",
  }}
>
  🍦
</div>


      <p style={{ fontSize: "24px" }}>
        🎊✨ Complete Your Payment & Enjoy Your Treat ✨🎊
      </p>

      <h2
        style={{
          color: "black",
          fontSize: "35px",
          marginTop: "10px",
        }}
      >
        💰 {selectedProduct.price}
      </h2>
      <div
  style={{
    background: "white",
    padding: "15px",
    borderRadius: "15px",
    marginTop: "15px",
    color: "black",
    width: "320px",
  }}
>
  <h3>👤 Customer </h3>

  <p><b>Name:</b> {customerName}</p>
</div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          marginTop: "15px",
        }}
      >
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=8056573948`}
          alt="QR Code"
          style={{
            borderRadius: "15px",
          }}
        />

        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            marginTop: "15px",
          }}
        >
          📞 8056573948
        </p>
      </div>

      <h2
        style={{
          marginTop: "20px",
          color: "#120803",
        }}
      >
        🍨 Have a Sweet Day! 
      </h2>

      <p style={{ fontSize: "24px" }}>
        🎉🥳🍦
      </p>

      <button
        onClick={() => setPage("details")}
        style={{
          marginTop: "25px",
          padding: "12px 25px",
          borderRadius: "25px",
          border: "none",
          background: "#ff69b4",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ← Back
      </button>
    </div>
  );
}
<>
<style>{`
@keyframes bounce {
  0%,100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
`}</style>
</>
// ---------------- CUSTOMER PAGE ----------------
if (page === "customer" && selectedProduct) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "400px",
          textAlign: "center",
          color: "black",
        }}
      >
        <h1
          style={{
            color: "black",
            marginBottom: "20px",
          }}
        >
          👤 Customer Information
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            color: "black",
          }}
        />

        <input
          type="text"
          placeholder="Street Name"
          value={streetName}
          onChange={(e) => setStreetName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            color: "black",
          }}
        />

        <input
          type="text"
          placeholder="District Name"
          value={districtName}
          onChange={(e) => setDistrictName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            color: "black",
          }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            color: "black",
          }}
        />

        <button
          onClick={() => setPage("payment")}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            border: "none",
            borderRadius: "30px",
            background:
              "linear-gradient(90deg,#ff69b4,#ff8c42)",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ✅ Confirm Order
        </button>

        <button
          onClick={() => setPage("details")}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            border: "none",
            borderRadius: "30px",
            background: "#999",
            color: "white",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
  // ---------------- DETAILS PAGE ----------------
  if (selectedProduct && page === "details") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background:"linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          padding: "30px",
          textAlign: "center",
          fontFamily: "Arial",
          color: "black",
        }}
      >
        <button
          onClick={() => {
            setSelectedProduct(null);
            setPage("home");
          }}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            background: "#ff69b4",
            color: "white",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <div
          style={{
            maxWidth: "500px",
            margin: "auto",
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            color: "black",
          }}
        >
          <img
            src={selectedProduct.image}
            style={{
              width: "100%",
              borderRadius: "15px",
              height: "300px",
              objectFit: "cover",
            }}
          />

          <h1 style={{ color: "#d63384" }}>{selectedProduct.name}</h1>

          <h2 style={{ color: "green" }}>{selectedProduct.price}</h2>

          <p style={{ color: "black" }}>{selectedProduct.rating}</p>

          <p style={{ color: "black" }}>
            <strong>Orders:</strong> {selectedProduct.orders}
          </p>

          <p style={{ color: "black" }}>{selectedProduct.description}</p>
          <div
  style={{
    marginTop: "20px",
    padding: "15px",
    background: "#f8f9fa",
    borderRadius: "15px",
    textAlign: "center",
  }}
>
  <h3
    style={{
      textAlign: "center",
      color: "#d63384",
    }}
  >
    👥 Previous Customers
  </h3>

  <p><b>👤Name:</b> Divya</p>
  <p><b>📞Mobile:</b> 768743577</p>
  <p><b>District:</b> Namakkal</p>

  <hr />

  <p><b>👤Name:</b> Priya</p>
  <p><b>📞Mobile:</b> 9876543210</p>
  <p><b>District:</b> Salem</p>

  <hr />

  <p><b>👤Name:</b> Rahul</p>
  <p><b>📞Mobile:</b> 9123456789</p>
  <p><b>District:</b> Coimbatore</p>
</div>

          <button
            onClick={() => setPage("customer")}
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "30px",
              background: "linear-gradient(90deg,#ff69b4,#ff8c42)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            🛍 Buy Now
          </button>
        </div>
      </div>
    );
  }

  // ---------------- HOME PAGE ----------------
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom,#fff0f6,#ffe4ec,#fff8dc)",
        fontFamily: "Arial",
        position: "relative",
      }}
    >
      {/* ✅ MINI IMAGE LEFT TOP CORNER */}
      <img
        src="\Boy.jpg"
        alt="mini"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          position: "absolute",
          top: "15px",
          left: "15px",
          objectFit: "cover",
          border: "3px solid white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />

      <nav
        style={{
          background: "linear-gradient(90deg,#ff69b4,#ff8c42,#ffd93d)",
          color: "white",
          padding: "25px",
          textAlign: "center",
          fontSize: "34px",
          fontWeight: "bold",
        }}
      >
        🍦 Ice Cream Paradise
      </nav>

      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <h1 style={{ color: "#d63384", fontSize: "50px" }}>
          🍨 ICE CREAM SHOP!
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: "280px",
              background: "white",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(255,105,180,0.25)",
              color: "black",
            }}
          >
            <img
              src={product.image}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "18px", color: "black" }}>
              <h2
  style={{
    color: "#01030e",
    fontSize: "24px",
    fontWeight: "bold",
  }}
>{product.name}</h2>

              <p>{product.rating}</p>

              <h3 style={{ color: "green" }}>{product.price}</h3>

              <p>{product.orders}</p>

              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setPage("details");
                }}
                style={{
                  width: "100%",
                  marginTop: "10px",
                  background: "linear-gradient(90deg,#ff69b4,#ff8c42)",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
