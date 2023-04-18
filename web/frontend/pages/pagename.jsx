import { Page, Layout } from "@shopify/polaris";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Cards from "../components/Cards";
import { useState } from "react";
import SettingPage from "../components/SettingPage";
import TutorialPage from "../components/TutorialPage";
import HelpCenter from "../components/HelpCenter";

export default function PageName() {
  const [page, setPage] = useState(1);
  return (
    <Page>
      <Layout>
        <Header setPage={setPage} page={page} />
        {page === 1 && <Dashboard />}
        {page === 2 && <Dashboard />}
        {page === 3 && <SettingPage />}
        {page === 4 && <TutorialPage />}
        {page === 5 && <HelpCenter />}
        <Cards />
      </Layout>
    </Page>
  );
}
