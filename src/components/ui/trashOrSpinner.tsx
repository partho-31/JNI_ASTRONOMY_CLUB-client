"use client";
import { Trash2 } from "lucide-react";
import { Spinner } from "./spinner";
import { useState } from "react";
import { toast } from "sonner";

const TrashOrSpinner = ({ operation }: { operation: () => Promise<void> }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOperation = async () => {
    try {
      setIsLoading(true);
      await operation();
    } catch {
      toast.warning("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={handleOperation}
      className="cursor-pointer p-2 rounded-lg bg-red-600 hover:bg-red-500 transition"
    >
      {isLoading ? <Spinner /> : <Trash2 size={18} className="text-white" />}
    </div>
  );
};

export default TrashOrSpinner;