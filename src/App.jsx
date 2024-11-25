import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import RootLayout from "./RootLayout";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
