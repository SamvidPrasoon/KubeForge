"use client";

import { useForgeStore } from "@/app/Store/forgeStore";

function ConverterButton() {
  const { convertToYaml } = useForgeStore();
  return (
    <button
      onClick={convertToYaml}
      className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl text-white font-medium transition"
    >
      Submit
    </button>
  );
}

export default ConverterButton;
