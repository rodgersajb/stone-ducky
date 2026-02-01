import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-mutedOrange text-whiteBG font-semibold border-2 border-mutedOrange mt-2 py-2 rounded w-full lg:w-60">
      {pending ? "Sending..." : "Submit"}
    </button>
  );
}
