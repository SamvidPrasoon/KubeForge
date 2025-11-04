import EditorPanel from "@/components/ui/EditorPanel";

import ConverterButton from "@/components/ui/converterButton";
import ManifestSelector from "@/components/ui/manifestSelector";
import Link from "next/link";

function Forge() {
  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-gray-100">
      <aside className="w-64 bg-[#101525] border-r border-gray-800 flex flex-col p-5">
        <Link href="/">
          <h2 className="text-2xl font-bold mb-8 text-cyan-400">KubeForge</h2>
        </Link>

        <nav className="space-y-2">
          <ManifestSelector />
        </nav>

        <div className="mt-auto pt-8 text-xs text-gray-500">
          © 2025 KubeForge
        </div>
      </aside>

      {/* 💻 Main Area */}
      <main className="flex-1 p-6 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">KubeForge Editor</h1>
          <ConverterButton />
        </header>
        <EditorPanel />
      </main>
    </div>
  );
}

export default Forge;
