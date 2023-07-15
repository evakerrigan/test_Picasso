import { Route, Routes } from "react-router-dom";
import { routes } from "../router";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          Component={route.component}
        />
      ))}
    </Routes>
  );
};