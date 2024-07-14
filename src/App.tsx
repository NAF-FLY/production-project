import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./context/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О себе</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>{" "}
      </Suspense>
    </div>
  );
};
export default App;
