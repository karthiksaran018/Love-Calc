import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import Result from "./components/Result";
import RootLayout from "./RootLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="result" element={<Result />} />
        {/* Add a fallback route for undefined paths */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h1>404: Page Not Found</h1>
            </div>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
