import React, { ReactNode } from 'react';
import Head from 'next/head';

// Hooks
import { useRouter } from 'next/router';

// Ant Design
import { Layout, Tabs } from 'antd';

// Styles
import 'antd/dist/antd.css';
import styles from './layout.module.scss';

// Redux
import { useSelector } from 'react-redux';

// Types
import { State } from '../../redux/reducers/root.reducers';

const { TabPane } = Tabs;
const { Header, Content } = Layout;

interface Props {
  children?: ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const isLoggedIn = useSelector<State, boolean>(
    (state) => state.userInfo.isLoggedIn,
  );

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
          {isLoggedIn ? (
            <>
              <TabPane tab="Menú" key="/" />
              <TabPane
                tab="Reporte de Asistencias"
                key="/Reporte-asistencias"
              />
              <TabPane tab="Example" key="/Example" />
            </>
          ) : (
            <TabPane tab="Login" key="/Login" />
          )}
        </Tabs>
      </Header>
      <Content>
        <Layout className={styles.bodyLayout}>{children}</Layout>
      </Content>
    </Layout>
  );
};

export default AppLayout;
