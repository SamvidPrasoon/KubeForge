import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-gray-100 min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Forge Perfect Kubernetes YAMLs in Seconds
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Convert JSON to YAML, and generate Kubernetes configurations
          effortlessly
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href={"/forge"}>
            <button className="border border-gray-600 hover:border-cyan-400 text-gray-300 px-8 py-3 rounded-2xl transition text-bold">
              START FORGING 🔥
            </button>
          </Link>
        </div>
      </section>

      {/* ⚙️ Features Section */}
      <section className="py-24 bg-[#0F1524]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-center">
          <div className="p-8 rounded-2xl bg-[#141B2D] hover:bg-[#18213A] transition">
            <div className="text-cyan-400 text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">
              JSON → YAML Converter
            </h3>
            <p className="text-gray-400">
              Transform your Kubernetes manifests instantly with correctness and
              formatting guaranteed.
            </p>
          </div>


          <div className="p-8 rounded-2xl bg-[#141B2D] hover:bg-[#18213A] transition">
            <div className="text-cyan-400 text-4xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">Smart Templates</h3>
            <p className="text-gray-400">
              Prebuilt and reusable Kubernetes templates to accelerate your
              setup process.
            </p>
          </div>
        </div>
      </section>

      {/* 💻 Code Preview Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Built for developers who love clean YAML
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#141B2D] rounded-2xl p-6 text-left font-mono text-sm text-gray-300">
            <p className="text-cyan-400 mb-2">// JSON Input</p>
            <pre>{`{
  "apiVersion": "v1",
  "kind": "Pod",
  "metadata": {
    "name": "nginx"
  }
}`}</pre>
          </div>
          <div className="bg-[#141B2D] rounded-2xl p-6 text-left font-mono text-sm text-gray-300">
            <p className="text-cyan-400 mb-2">// YAML Output</p>
            <pre>{`apiVersion: v1
kind: Pod
metadata:
  name: nginx`}</pre>
          </div>
        </div>
        <Link href={"/forge"}>
          <button className="mt-10 bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-2xl text-white font-medium transition">
            Try the Editor
          </button>
        </Link>
      </section>

      {/* 🚀 CTA Footer */}
      <footer className="py-20 bg-linear-to-r from-cyan-600 to-blue-600 text-center">
        <h3 className="text-3xl font-bold mb-4 text-white">
          Stop fighting YAML. Start forging it.
        </h3>
        <p className="text-gray-200 mb-6">
          KubeForge makes Kubernetes configuration fast, reliable, and fun.
          <br />
          Made with 😀 copywrite@centurion
        </p>
      </footer>
    </main>
  );
}
