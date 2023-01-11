import Link from "next/link";
import React from "react";
import { signIn, signOut } from "next-auth/react";

const NavBar = () => {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">Online Store</a>
      </h1>
      <ul className={`main-nav`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Store"> Store</Link>
        </li>
        <li>
          <Link href="" onClick={() => signIn()}>
            SignIn
          </Link>
        </li>
        <li>
          <Link href="" onClick={() => signOut()}>
            SignOut
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
