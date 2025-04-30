"use client";

//separation du layout pour faciler l'usage des hoot coté client

import { ConfigProvider, Layout } from "antd";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { theme } from "../theme/themeconfig";
import { useTranslations } from "next-intl";

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }) {
  const t = useTranslations("Header");
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: "100vh" }}>
          <Header style={{ background: "#001529", color: "#fff" }}>
            <h1 style={{ color: "#fff", textAlign: "center", margin: "auto" }}>
              {t("titlePlatform")}
            </h1>
          </Header>
          <Content style={{ padding: "24px" }}>{children}</Content>
          <Footer style={{ textAlign: "center" }}>©2025 {t("Footer")}</Footer>
        </Layout>
      </ConfigProvider>
    </Provider>
  );
}
