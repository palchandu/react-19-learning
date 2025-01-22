import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
const ActionsExample = React.lazy(() => import("./src/pages/ActionsExample"));
const HooksExmaple= React.lazy(() => import("./src/pages/HooksExmaple"));
import DefaultLayout from "./src/layout/Default.layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ActionsExample />} />
        <Route path="/hooks" element={<HooksExmaple />} />
      </Route>
    </>
  )
);

export default router;
