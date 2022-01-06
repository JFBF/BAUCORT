import React, { ReactNode } from 'react';
import Head from 'next/head';

// Hooks
import { useRouter } from 'next/router';

// Ant Design
import { Layout, Tabs } from 'antd';

// Styles
import 'antd/dist/antd.css';
import styles from './layout.module.scss';

const { TabPane } = Tabs;
const { Header } = Layout;

interface Props {
  children?: ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const onTabClick = React.useCallback(
    (key: string) => {
      router.push(key);
    },
    [router],
  );

  return (
    <Layout>
      <Head>
        <title>BAUCORT</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>
        <Tabs
          className={styles.tabs}
          defaultActiveKey="/"
          activeKey={router.route}
          onChange={onTabClick}
        >
          <TabPane tab="Login" key="/" />
          <TabPane tab="Reporte de Asistencias" key="/Reporte-asistencias" />
          <TabPane tab="Calendar" key="/Calendar" />
        </Tabs>
      </Header>
      <body>
        <Layout className={styles.bodyLayout}>{children}</Layout>
      </body>
    </Layout>
  );
};

export default AppLayout;
