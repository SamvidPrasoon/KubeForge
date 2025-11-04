import { Configuration } from "./configuration";
import { Networking } from "./networking";
import { RBAC } from "./rbac";
import { Volumes } from "./storage";
import { Workloads } from "./workloads";

export const manifestTemplates = {
  Workloads,
  Networking,
  Configuration,
  Volumes,
  RBAC,
};
