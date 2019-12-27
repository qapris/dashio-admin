import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { BaseLayout } from "./layouts";
// Route Views
import Dashboard from "./views/Dashboard/Dashboard";
import Components from "./views/Components/Components";
import UIElements from "./views/UIElements/UIElements";
import Widgets from "./views/Widgets/Widgets";
import Forms from "./views/Forms/Forms";
import Tables from "./views/Tables/Tables";
import Pages from "./views/Pages/Pages";
import Charts from "./views/Charts/Charts";

var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: BaseLayout,
    component: Dashboard
  },
  {
    path: "/components",
    layout: BaseLayout,
    component: Components
  },
  {
    path: "/ui-elements",
    layout: BaseLayout,
    component: UIElements
  },
  {
    path: "/widgets",
    layout: BaseLayout,
    component: Widgets
  },
  {
    path: "/forms",
    layout: BaseLayout,
    component: Forms
  },
  {
    path: "/tables",
    layout: BaseLayout,
    component: Tables
  },
  {
    path: "/pages",
    layout: BaseLayout,
    component: Pages
  },

  {
    path: "/charts",
    layout: BaseLayout,
    component: Charts
  }
];

export default routes;
