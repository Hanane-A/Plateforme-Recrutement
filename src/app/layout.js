"use client";

import { ConfigProvider, Layout } from "antd";
import { theme } from "../../theme/themeconfig";
import "antd/dist/reset.css";

const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ConfigProvider theme={theme}>
          <Layout style={{ minHeight: "100vh" }}>
            <Header
              style={{
                background: "#001529",
                color: "#fff",
                padding: "0 24px",
              }}
            >
              <h1 style={{ color: "#fff", textAlign: "center" }}>
                Ma Plateforme de Recrutement
              </h1>
            </Header>
            <Content style={{ padding: "24px" }}>{children}</Content>
            <Footer style={{ textAlign: "center" }}>
              ©2025 Plateforme Recrutement
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
