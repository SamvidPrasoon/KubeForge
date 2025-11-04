"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useForgeStore } from "@/app/Store/forgeStore";
import { manifestTemplates } from "@/utils/manifests/manifests";
import { useEffect } from "react";

function ManifestSelector() {
  const { setManifest, convertToYaml } = useForgeStore();
  useEffect(() => {
    setManifest("Workloads", "Deployment");
    convertToYaml();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#141B2D] px-3 py-2 rounded-lg hover:bg-[#1A1F33] transition text-sm text-gray-300">
        Select Manifests
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-[#141B2D] text-gray-200">
        {Object.entries(manifestTemplates).map(([category, manifests]) => (
          <DropdownMenuSub key={category}>
            <DropdownMenuSubTrigger className="text-gray-300">
              {category}
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent className="bg-[#141B2D] text-gray-200">
              {Object.keys(manifests).map((manifestName) => (
                <DropdownMenuItem
                  key={manifestName}
                  onClick={() => setManifest(category, manifestName)}
                >
                  {manifestName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ManifestSelector;
