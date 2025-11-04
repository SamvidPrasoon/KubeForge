import MonacoEditor from "@/components/ui/monaco-editor";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";

function EditorPanel() {
  return (
    <>
      {/* 🧩 Resizable Editor + Output */}
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 rounded-xl border border-gray-800"
      >
        {/* Left Panel (Editor) */}
        <ResizablePanel defaultSize={50} minSize={25}>
          <div className="flex flex-col h-full bg-[#141B2D] rounded-l-xl overflow-hidden">
            <div className="p-3 border-b border-gray-700 text-gray-300 font-medium">
              Input Area
            </div>
            <div className="flex-1 bg-[#0F1524] border-t border-gray-800 p-2">
              <MonacoEditor mode="json" />
            </div>
          </div>
        </ResizablePanel>

        {/* Handle */}
        <ResizableHandle
          withHandle
          className="bg-gray-800 hover:bg-cyan-600 transition"
        />

        {/* Right Panel (Output) */}
        <ResizablePanel defaultSize={50} minSize={25}>
          <div className="flex flex-col h-full bg-[#141B2D] rounded-r-xl overflow-hidden">
            <div className="p-3 border-b border-gray-700 text-gray-300 font-medium">
              <div className="flex flex-row">Output Area</div>
            </div>
            <div className="flex-1 bg-[#0F1524] border-t border-gray-800 p-2">
              <MonacoEditor mode="yaml" />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default EditorPanel;
