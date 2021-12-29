import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Head>
      <title>BAUCORT</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      {/* Add a cool header with ant desing */}
      <nav>
        <Link href="/">
          <a>Login</a>
        </Link>{' '}
        |{' '}
        <Link href="/Reporte-asistencias">
          <a>Reporte de Asistencias</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
