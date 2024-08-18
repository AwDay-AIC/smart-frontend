import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/login";
import RegisterUser from "./routes/register-user";
import RegisterCompany from "./routes/register-company";
import CompanyApplicant from "./routes/company-applicant";
import LandingPage from "./routes/landing-page";
import ChooseSignup from "./routes/choose-signup";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/choose-signup",
    element: <ChooseSignup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register-user",
    element: <RegisterUser />,
  },
  {
    path: "/register-company",
    element: <RegisterCompany />,
  },
  {
    path: "/my-company/applicant",
    element: <CompanyApplicant />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
