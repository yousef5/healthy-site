"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export default function CopyableCode({ children }: { children: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    });
  };

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-x-auto hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
        <code>{children}</code>
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
      >
        <p className="sr-only">Copy code button</p>
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
