import React from 'react'
import Link from 'next/link'

export default function signup() {
  return (
    <div className="main-signup-page">
    <form action="/signup" method="POST">
      <h1 className="form-h1">Sign-up...</h1>

      <div>
        <label>Username:</label>
        <input
          type="text"
          id="Username"
          name="Username"
          placeholder="Enter your name..."
          required
        />
      </div>
      <div>
        <label>Email / Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter your email or phone number..."
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password..."
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password..."
          required
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />
        <br />
      </div>
      <div className="dont">
        <h2>
          If you have an account?
          <Link href="/login">
            <span>Login</span>
          </Link>
        </h2>
        <br />
      </div>

      <div className="btn-f">
        <Link href="/">
          <button className="f-but" type="submit">Sign-Up</button>{" "}
        </Link>
      </div>
    </form>
  </div>
  )
}


