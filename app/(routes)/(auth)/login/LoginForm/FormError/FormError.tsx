import { FormErrorProps } from "./FormError.types";
import { TriangleAlert } from "lucide-react";

export function FormError(props: FormErrorProps) {
  const { message } = props;

  if (!message) return null;

  return (
    <div className="flex items-center p-3 text-sm text-white rounded-md bg-destructive/50 gap-x-2">
      <TriangleAlert />
      <p>{message}</p>
    </div>
  );
}

// revisado
