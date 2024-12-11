import React, { useMemo, useState, useCallback } from "react";
import { useUserInputStore } from "../useStore";
import Image from "next/image";

const Command = ({
  command,
}: {
  command: { description: string; command: string };
}) => {
  const inputs = useUserInputStore((state) => state.inputs);
  const [isCopied, setIsCopied] = useState(false);

  const replacedCommand = useMemo(() => {
    return command.command.replace(/<ip>/g, inputs.ip || "<ip>");
  }, [command.command, inputs.ip]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(replacedCommand);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [replacedCommand]);

  return (
    <div className="mb-4">
      <p className="text-white/80 mb-2">{command.description}</p>
      <div
        onClick={handleCopy}
        className="bg-black/30 p-3 rounded flex justify-between items-center hover:cursor-pointer"
      >
        <code className="block text-white/90">{replacedCommand}</code>
        <button className="cursor-pointer">
          <Image
            src={isCopied ? "/Success.svg" : "/Copy.svg"}
            width={25}
            height={25}
            alt="Copy icon"
            className="opacity-50 transition-opacity"
          />
        </button>
      </div>
    </div>
  );
};

export default Command;
