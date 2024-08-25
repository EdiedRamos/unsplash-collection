"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "../(icons)";

interface Props {
  onSubmit: (value: string) => void;
}

function validateValue(value: string): void {
  if (value.trim().length === 0) throw new Error("Empty search is not allowed");
}

function useSearch({ onSubmit }: Props) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    try {
      validateValue(value);
      onSubmit(value);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  useEffect(() => setError(""), [value]);

  return {
    value,
    error,
    setValue,
    handleSubmit,
  };
}

export function Search({ onSubmit }: Props) {
  const { value, error, setValue, handleSubmit } = useSearch({ onSubmit });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className={`flex gap-4 p-4 bg-white dark:bg-slate-800 w-full md:w-[600px] mt-6 mx-auto rounded-lg border-2 ${
          error.length > 0 ? "border-red-500" : "dark:border-slate-600"
        }`}
      >
        <input
          type="search"
          placeholder="Enter your keywords..."
          className="w-full bg-inherit text-black dark:text-white outline-none"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button type="submit">
          <SearchIcon className="text-gray-400 dark:text-cc-gray-100" />
        </button>
      </form>
      {error.length > 0 && (
        <p className="text-center text-red-500 mt-3">{error}</p>
      )}
    </div>
  );
}
