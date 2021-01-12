import React from "react"; 
import Link from "next/link";

export default function FourOhFour() {
    return (
        <div className="not-found">
            <div className="not-found heading">
                <p className="heading logo">
                <span className="heading logo--left">netflix</span>
                <span className="heading logo--right">roulette</span>
                </p>
            </div>
            <div className="not-found body">
            <h3 className="not-found body__text--top">Page Not Found</h3>
            <h4 className="not-found body__text--bottom">404</h4>
                <Link className="not-found body__btn" href="/">GO BACK TO HOME</Link>
            </div>
        </div>
    )
}
