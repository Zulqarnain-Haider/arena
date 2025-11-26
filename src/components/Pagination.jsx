import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-end mt-4 gap-2">
      <button className="border px-3 py-1 rounded">{"<"}</button>
      <button className="border px-3 py-1 rounded bg-blue-500 text-white">2</button>
      <button className="border px-3 py-1 rounded">3</button>
      <button className="border px-3 py-1 rounded">{">"}</button>
    </div>
  );
}
