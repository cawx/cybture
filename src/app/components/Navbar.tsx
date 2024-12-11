"use client";
import React from "react";
import Image from "next/image";
import { useUserInputStore } from "../useStore";

export default function Navbar() {
  const inputs = useUserInputStore((state) => state.inputs);
  const setInput = useUserInputStore((state) => state.setInput);
  const handleChange = (key: string, value: string) => {
    setInput(key, value);
    console.log(key, value);
  };

  return (
    <nav className="border-b-[1px] border-white/20 py-4 text-base">
      <div className="max-w-[1550px] mx-auto px-4">
        <div className="flex">
          <div className="flex items-center w-[250px] px-4">
            <Image src="/Logo.svg" width={26} height={16} alt="cybture logo" />
            <h1 className="text-xl font-medium pl-3">cybture</h1>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-4">
              <div className="min-w-0">
                <span>Target ip</span>
                <input
                  value={inputs["ip"] || ""}
                  onChange={(e) => handleChange("ip", e.target.value)}
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="10.10.10.10"
                />
              </div>
              <div className="min-w-0">
                <span>Your ip</span>
                <input
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="10.10.10.10"
                />
              </div>
              <div className="min-w-0">
                <span>Port</span>
                <input
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="8080"
                />
              </div>
              <div className="min-w-0">
                <span>Username</span>
                <input
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="admin"
                />
              </div>
            </div>
          </div>
          <div className="hidden xl:block w-[250px]" />
        </div>
      </div>
    </nav>
  );
}
