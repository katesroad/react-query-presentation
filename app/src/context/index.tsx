import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    // configure the default stale, cacheTime
    queries: {
      cacheTime: 30 * 60 * 1000,
      staleTime: 30 * 60 * 1000,
    },
  },
});

const AppProviders: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainer autoClose={2000} />
    <Router>
      <Switch>{children}</Switch>
    </Router>
  </QueryClientProvider>
);

export default AppProviders;
