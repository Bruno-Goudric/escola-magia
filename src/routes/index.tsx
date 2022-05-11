import React from "react";

import { Routes, Route } from "react-router-dom";

import * as Pages from "pages";
import routesNames from "config/routesNames";

export default function Routers() {
  return (
    <Routes>
      <Route path={routesNames.ROOT} element={<Pages.Login />} />
    </Routes>
  );
}
