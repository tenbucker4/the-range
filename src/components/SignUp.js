import React, { useRef } from "react";
import "../styles/SignUp.css";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (
        <div className="sign-up-card">
            <form>
                <div className="form-group">
                    <label htmlFor="userEmail">Email</label>
                    <input
                        type="email"
                        id="userEmail"
                        ref={emailRef}
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="userPassword">Password</label>
                    <input
                        type="password"
                        id="userPassword"
                        ref={passwordRef}
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="userPasswordConfirm">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="userPasswordConfirm"
                        ref={passwordConfirmRef}
                        required
                    ></input>
                </div>
                <button typeof="submit">Sign Up</button>
            </form>
        </div>
    );
}
