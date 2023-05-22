import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./components/Watch";
import "./App.css";
import { Body } from "./components/Body";
import { MainContainer } from "./components/MainContainer";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SearchResult } from "./components/SearchResult";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/results",
          element: <SearchResult />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
