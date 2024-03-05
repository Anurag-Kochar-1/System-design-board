"use client";
import React from "react";
import { useParams } from "next/navigation";

export const Footer = () => {
  const params = useParams();
  if (params.slug) return null;
  return (
    <footer className="w-full py-10 border-t flex justify-center items-center px-2 md:px-4 lg:px-6">
      <span className="text-sm font-semimedium text-pretty">
        {" "}
        Product by{" "}
        <a
          href="https://twitter.com/anurag__kochar"
          className="text-blue-500 underline hover:text-blue-600"
          target="_blank"
        >
          Anurag kochar
        </a>{" "}
      </span>
    </footer>
  );
};
