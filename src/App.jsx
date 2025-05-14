import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Login from "./pages/Login"
import MainLayout from "./layouts/MainLayout"
import Dashboard from "./pages/Dashboard"
import Vulnerabilities from "./pages/Vulnerabilities"
import Assets from "./pages/Assets"
import Requests from "./pages/Requests"
import NewRequest from "./pages/NewRequest"
import AdminRequests from "./pages/AdminRequests"
import Users from "./pages/Users"
import Analytics from "./pages/Analytics"
import Analyticskr from "./pages/Analyticskr"
import Announcements from "./pages/Announcements"
import Help from "./pages/Help"
import Results from "./pages/Results"
import FinancialResults from "./pages/FinancialResults"
import Settings from "./pages/Settings"
import "./index.css"

// React Router 7 사용
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: "what",
  },
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
    ]
  },
  {
    path: "/assets",
    element: <MainLayout />,
    children: [
      { index: true, element: <Assets /> },
    ]
  },
  {
    path: "/requests",
    element: <MainLayout />,
    children: [
      { index: true, element: <Requests /> },
      { path: "list", element: <Requests /> },
      { path: "new", element: <NewRequest /> },
    ]
  },
  {
    path: "/results",
    element: <MainLayout />,
    children: [
      { index: true, path: "Infrastructure-results", element: <Results /> },
      { path: "financial-results", element: <FinancialResults /> },
    ],
  },
  {
    path: "/vulnerabilities",
    element: <MainLayout />,
    children: [
      { index: true, element: <Vulnerabilities /> },
    ]
  },
  {
    path: "/analytics",
    element: <MainLayout />,
    children: [
      { index: true, element: <Analytics /> },
    ]
  },
  {
    path: "/analyticskr",
    element: <MainLayout />,
    children: [
      { index: true, element: <Analyticskr /> },
    ]
  },
  {
    path: "/announcements",
    element: <MainLayout />,
    children: [
      { index: true, element: <Announcements /> },
    ]
  },
  {
    path: "/users",
    element: <MainLayout />,
    children: [
      { index: true, element: <Users /> },
    ]
  },
  {
    path: "/settings",
    element: <MainLayout />,
    children: [
      { index: true, element: <Settings /> },
    ]
  },
  {
    path: "/help",
    element: <MainLayout />,
    children: [
      { index: true, element: <Help /> },
    ]
  },
])

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vmp-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
