import React from "react";
import useSWR from "swr";

import UserList from "./UserList";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListSection({ query }) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );

  var loading = !data && !error;

  return (
    <div className="w-full text-left">
      {loading && <p className="text-2xl">Loading...</p>}
      <ul className="flex flex-col gap-2">
        {data &&
          data.items.map((item, index) => {
            return (
              <UserList key={index} item={item} />
            );
          })}
      </ul>
    </div>
  );
}
