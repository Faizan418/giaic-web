import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="main-login-page">
      <form action="form">
        <h1 className="form-h1">Login...</h1>

        <div>
          <label>Email / number:</label>
          <input
            type="email"
            placeholder="Enter your email or number..."
            required
          />
          <br />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password..."
            required
          />
          <br />
        </div>

        <div className="dont">
          <h2>
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <span>Sign-Up</span>
            </Link>
          </h2>
          <br />
        </div>

        <div className="btn-f">
          <button className="f-but" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
