import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [customerData, setCustomerData] = useState(null);

  const handleLogin = () => {
    fetch("http://172.29.209.60:8000/api/method/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usr: username,
        pwd: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const cookies = response.headers.get("Set-Cookie");
        console.log(cookies);
        if (cookies) {
          setCookiesInLocalStorage(cookies);
          logCookieDetails(cookies);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Logged In" && data.full_name && data.home_page) {
          localStorage.setItem("isLoggedIn", "true");
          toast.success("Login Successful!");

          fetch(
            "http://172.29.209.60:8000/api/method/frappe.auth.generate_keys",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Cookie: localStorage.getItem("cookies") || "",
              },
            }
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((keysData) => {
              console.log(keysData);
            })
            .catch((error) => {
              console.error("Error:", error.message);
              setError(error.message);
            });
        } else {
          throw new Error(
            "Authentication failed. Please check your credentials."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setError(error.message);
      });
  };

  const setCookiesInLocalStorage = (cookies) => {
    const cookieArray = cookies.split(";");
    const cookieObj = {};
    cookieArray.forEach((cookie) => {
      const [name, value] = cookie.trim().split("=");
      cookieObj[name] = value;
    });
    localStorage.setItem("cookies", JSON.stringify(cookieObj));
  };

  const logCookieDetails = (cookies) => {
    console.log("Cookies:", cookies);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cookies");
    setCustomerData(null);
    toast.success("Logout Successful!");
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {error && <p>{error}</p>}
        {customerData && (
          <div>
            <h3>Customer Data:</h3>
            <pre>{JSON.stringify(customerData, null, 2)}</pre>
          </div>
        )}
        <ToastContainer />
      </div>
    </>
  );
};