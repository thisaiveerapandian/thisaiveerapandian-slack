import React from "react";
import { Route, Switch } from "react-router";
import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function Home() {
  return (
    <div className="text-gray-200 text-sm h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex flex-auto overflow-hidden">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/channel/:channelID">
            <Content />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Home;
