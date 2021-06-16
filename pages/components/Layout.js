import React from "react";
import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";

function Layout({ children, title = "crypto" }) {
  return (
    <Structure>
      <Head>
        <title>{title}</title>
      </Head>

      <header className="header">
        <Link href="/" passHref>
          <a></a>
        </Link>
      </header>
      <main>{children}</main>
    </Structure>
  );
}

export default Layout;

const Structure = styled.div`
  background-color: #c5c9ff;
  height: auto;
`;
