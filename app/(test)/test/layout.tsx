"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  const [client] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
