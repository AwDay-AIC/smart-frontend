import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./routes/auth/login";
import RegisterUser from "./routes/auth/register-user";
import RegisterCompany from "./routes/auth/register-company";
import Jobs from "./routes/user/jobs";
import JobDetails from "./routes/user/job-details";
import LandingPage from "./routes/landing-page";
import ChooseSignup from "./routes/auth/choose-signup";
import Profile from "./routes/user/profile";
import CompanyApplicant from "./routes/company/company-applicant";
import CreateJob from "./routes/company/create-job";
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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
  {
    path: "/applicant",
    element: <CompanyApplicant />,
  },
  {
    path: "/create-job",
    element: <CreateJob />,
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
