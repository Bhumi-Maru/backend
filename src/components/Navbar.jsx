import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <header
        className="bg-danger"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          color: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <div
          className="logo"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Recipe App
        </div>

        {/* Navigation */}
        <nav style={{ width: "30%" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "1rem",
            }}
          >
            <Link
              to={"/"}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffe0e6")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              Home
            </Link>
            <Link
              to={"/get-recipe"}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffe0e6")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              All Recipes
            </Link>
            <Link
              to={"/create-recipe"}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffe0e6")}
              onMouseLeave={(e) => (e.target.style.color = "#fff")}
            >
              Create Recipe
            </Link>
          </ul>
        </nav>

        {user ? (
          <div>
            <span>Hello, {user.name}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button
              style={{
                padding: "8px 15px",
                backgroundColor: "#fff",
                color: "#ff6f91",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "background-color 0.3s ease, color 0.3s ease",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffe0e6";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#ff6f91";
              }}
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            {/* Login/Sign Up */}
            <div className="login" style={{ display: "flex", gap: "10px" }}>
              <Link to={"/signup"}>
                <button
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "#fff",
                    color: "#ff6f91",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ffe0e6";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#ff6f91";
                  }}
                >
                  Sign Up
                </button>
              </Link>
              <Link to={"/login"}>
                <button
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "#fff",
                    color: "#ff6f91",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ffe0e6";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#ff6f91";
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}
