import yaml from "js-yaml";

export function jsonToYaml(jsonString: string) {
  try {
    const jsonObj = JSON.parse(jsonString);
    const yamlString = yaml.dump(jsonObj, { indent: 2 });
    return { yaml: yamlString, error: null };
  } catch (err: any) {
    return { yaml: "", error: err.message };
  }
}
