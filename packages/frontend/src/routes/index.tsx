import React from "react";
import { Route } from "react-router-dom";
import { Home, Contact, Portfolio } from "../views";
interface RouteModel {
  path: string;
  component: any;
}
const routes: RouteModel[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/contact",
    component: Contact,
  },
  
];
export const renderRoutes = () => {
  return routes.map((routeModel: RouteModel, key) => {
    
    const { path, component } = routeModel;
    const RouteComponent=component
    return <Route key={key} path={path} element={<RouteComponent/>} />;
  });
};
