import React from 'react';

import { Routes, Route } from 'react-router-dom';

import * as Pages from 'pages';
import routesNames from 'config/routesNames';

export default function Routers() {
  return (
    <Routes>
      <Route path={routesNames.ROOT} element={<Pages.Login />} />
      <Route path={routesNames.LISTMAGIC} element={<Pages.ListMagic />} />
      <Route
        path={routesNames.ESPECIFICMAGIC}
        element={<Pages.EspecificMagic />}
      />
      <Route path={routesNames.CREATEMAGIC} element={<Pages.CreateMagic />} />
    </Routes>
  );
}
