import Link from "next/link";
import React from "react";

import User from "../components/User";
import NavStyles from "./styles/NavStyles";

const Nav = () => (
  <NavStyles>
    <User>
      {({data:{ me }})=>{
        console.log(me);

        return <p>User</p>
      }}

    </User>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Me</a>
    </Link>
  </NavStyles>
);

export default Nav;
