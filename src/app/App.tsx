import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { CompanyContextProvider } from "@/lib/context/CompanyContextProvider";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CompanyContextProvider>
        <Router />
      </CompanyContextProvider>
    </QueryClientProvider>
  );
};

export default App;
