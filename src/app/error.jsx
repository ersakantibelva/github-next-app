"use client"
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div>Error</div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
