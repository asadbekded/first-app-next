import Link from "next/link";
import React from "react";
import styled from '../../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styled.footer} >
      <Link className={styled.footer__logo} href="/">
        Logo
      </Link>
      <ul className={styled.footer__list}>
        <li>
          <Link className={styled.footer__link} href="/about">
            About
          </Link>
        </li>

        <li className={styled.footer__item}>
          <Link className={styled.footer__link} href="/users">
            User
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
