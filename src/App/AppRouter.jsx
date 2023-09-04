import { Route, Routes } from "react-router-dom";
import { routes } from "../shared/vars";

export const AppRouter = () => {
  return (
    <Routes key={location.pathname} location={location}>
      {routes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};
