import { create } from "zustand";
import { jsonToYaml } from "@/utils/jsonToYml";
import { manifestTemplates } from "@/utils/manifests/manifests";

type ForgeState = {
  jsonCode: string;
  yamlCode: string;
  error: string;
  setJson: (value: string) => void;
  setYaml: (value: string) => void;
  convertToYaml: () => void;
  setManifest: (category: string, manifestName: string) => void;
};

export const useForgeStore = create<ForgeState>((set, get) => ({
  jsonCode: "",
  yamlCode: "",
  error: "",

  setJson: (value) => set({ jsonCode: value }),
  setYaml: (value) => set({ yamlCode: value }),

  convertToYaml: () => {
    const { jsonCode } = get();
    const result = jsonToYaml(jsonCode);

    if (result.error === null) {
      set({
        yamlCode: result.yaml,
        error: "",
      });
    } else {
      set({
        yamlCode: "",
        error: result.error,
      });
    }
  },

  setManifest: (category, manifestName) => {
    const { convertToYaml } = get();
    const categoryData =
      manifestTemplates[category as keyof typeof manifestTemplates];
    const template = categoryData?.[manifestName as keyof typeof categoryData];

    if (template) {
      set({
        jsonCode: JSON.stringify(template, null, 2),
        yamlCode: "",
        error: "",
      });
      convertToYaml();
    } else {
      set({
        jsonCode: "",
        yamlCode: "",
        error: `Template not found for ${category}/${manifestName}`,
      });
    }
  },
}));
