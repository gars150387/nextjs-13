"use client";

import { useState } from "react";

export default function SearchBarComponent() {
  const [search, setSearch] = useState("");

  return (
    <input
      name="search"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
