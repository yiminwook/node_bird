"use client";

import { useQueries, useQueryClient } from "@tanstack/react-query";

const call = async (res: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
};

export default function Home() {
  const queryClient = useQueryClient();
  useQueries({
    queries: [
      { queryKey: ["a"], queryFn: () => call(["a"]) },
      { queryKey: ["a", "b"], queryFn: () => call(["a", "b"]) },
      {
        queryKey: ["a", "b", "c"],
        queryFn: () => call(["a", "b", "c"]),
      },
      {
        queryKey: ["a", "b", "c", "d"],
        queryFn: () => call(["a", "b", "c", "d"]),
      },
    ],
  });

  const invalidate = (queryKey: string[]) => {
    queryClient.invalidateQueries({ queryKey });
  };

  const invalidateWithPredicate = (key: string) => {
    queryClient.invalidateQueries({
      /**
       * true를 반환하는 쿼리만을 선택적으로 무효화
       * queryKey에 eventCd를 포함하고 데이터 fetching 중이 아닌 경우에만 무효화
       */
      predicate: (query) => {
        const queryKey = query.queryKey;
        const isMatch = queryKey.some((k) => k === key);
        if (isMatch === false) return false;
        const isFetchingCount = queryClient.isFetching({ queryKey });
        return isFetchingCount === 0;
      },
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => invalidate(["a"])}>{`["a"]`}</button>
      </div>
      <div>
        <button onClick={() => invalidate(["a", "b"])}>{`["a", "b"]`}</button>
      </div>
      <div>
        <button
          onClick={() => invalidate(["a", "b", "c"])}
        >{`["a", "b", "c"]`}</button>
      </div>
      <div>
        <button onClick={() => invalidate(["b"])}>{`["b"]`}</button>
      </div>
      <div>
        <button onClick={() => invalidateWithPredicate("b")}>{`["b"] `}</button>
      </div>
    </div>
  );
}
