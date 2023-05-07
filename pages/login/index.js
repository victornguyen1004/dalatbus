import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ApiBaseUrl } from "@/global/global-variables";
import Cookies from "js-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // redirect to homepage if user is already logged in
    if (Cookies.get("token")) {
      router.push("/");
    }
  }, [router]);

  // to submit form when enter in input
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false); // reset error state to false when user types in email input
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false); // reset error state to false when user types in password input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the login endpoint
      const response = await axios.post(`${ApiBaseUrl}/users/login`, {
        email,
        password,
      });

      // Extract the token from the response
      const token = response.data.data.token;
      const username = response.data.data.name;
      // Store the token in Cookies
      Cookies.set("token", token);
      Cookies.set("username", username);

      setError(false);

      navigate("/");
    } catch (error) {
      console.error("Login failed");
      setError(true);
      // Handle login error (e.g., display an error message)
      // ...
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-0">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-[666px] flex-col w-full bg-white rounded-r-2xl p-8"
      >
        <div className="font-bold text-xl text-blue-3">
          Login to <span className="font-black text-2xl">DalatBus</span>
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="" className="text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="text"
            onChange={handleEmailChange}
            onKeyDown={handleKeyDown}
            className={`border ${
              error ? "border-red-500 bg-red-100" : "border-zinc-300"
            } border-gray-1 rounded p-2 outline-0 `}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            onChange={handlePasswordChange}
            onKeyDown={handleKeyDown}
            className={`border ${
              error ? "border-red-500 bg-red-100" : "border-zinc-300"
            } border-gray-1 rounded p-2 outline-0 `}
          />
        </div>
        <button
          type="submit"
          className="mt-8 rounded bg-green-4 py-2 text-white font-bold"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
