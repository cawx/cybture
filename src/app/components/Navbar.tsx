"use client";
import React from "react";
import Image from "next/image";
import { useUserInputStore } from "../useStore";
import Link from "next/link";

export default function Navbar() {
  const inputs = useUserInputStore((state) => state.inputs);
  const setInput = useUserInputStore((state) => state.setInput);
  const handleChange = (key: string, value: string) => {
    setInput(key, value);
  };

  return (
    <nav className="border-b-[1px] border-white/20 py-4 text-base">
      <div className="max-w-[1550px] mx-auto px-4">
        <div className="flex">
          <Link href="/" className="flex items-center w-[250px] px-4">
            <Image src="/Logo.svg" width={26} height={16} alt="cybture logo" />
            <h1 className="text-xl font-medium pl-3">cybture</h1>
          </Link>
          <div className="flex-1">
            <div className="grid grid-cols-4 gap-4">
              <div className="min-w-0">
                <label>Target ip</label>
                <input
                  id="target-ip"
                  value={inputs["ip"] || ""}
                  onChange={(e) => handleChange("ip", e.target.value)}
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="10.10.10.10"
                />
              </div>
              <div className="min-w-0">
                <label>Your ip</label>
                <input
                  id="your-ip"
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="10.10.10.10"
                />
              </div>
              <div className="min-w-0">
                <label>Port</label>
                <input
                  id="port"
                  className="w-full mt-2 bg-[#252525] border-[1px] border-white/20 py-1 px-2 rounded-md"
                  placeholder="8080"
                />
              </div>
              <div className="min-w-0">
                <label>Username</label>
                <input
                  id="username"
                  autoComplete="off"
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
