"use client";

import { useForgeStore } from "@/app/Store/forgeStore";
import { Editor } from "@monaco-editor/react";
import { useEffect } from "react";

type TEditorJson = {
  mode: "json" | "yaml";
};

function MonacoEditor({ mode }: TEditorJson) {
  const { jsonCode, setJson, setYaml, yamlCode } = useForgeStore();
  return (
    <>
      <Editor
        key={mode}
        language={mode}
        theme="vs-dark"
        value={mode === "json" ? jsonCode : yamlCode}
        onChange={(value) =>
          mode === "json" ? setJson(value || "") : setYaml(value || "")
        }
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          scrollBeyondLastLine: false,
          padding: { top: 10 },
        }}
      />
    </>
  );
}

export default MonacoEditor;
