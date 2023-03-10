import Link from "next/link";
import React from "react";
import styled from "../../styles/Header.module.css";

function Header() {
  return (
    <header className={styled.header}>
      <Link className={styled.header__logo} href="/">
        Logo
      </Link>
      <ul className={styled.header__list}>
        <li>
          <Link className={styled.header__link} href="/about">
            About
          </Link>
        </li>

        <li className={styled.header__item}>
          <Link className={styled.header__link} href="/users">
            User
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
