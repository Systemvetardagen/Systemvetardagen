import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Routes";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
