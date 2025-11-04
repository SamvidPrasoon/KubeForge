export const RBAC = {
  ServiceAccount: {
    apiVersion: "v1",
    kind: "ServiceAccount",
    metadata: { name: "my-sa" },
  },
  Role: {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "Role",
    metadata: { name: "pod-reader" },
    rules: [
      {
        apiGroups: [""],
        resources: ["pods"],
        verbs: ["get", "watch", "list"],
      },
    ],
  },
  RoleBinding: {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "RoleBinding",
    metadata: { name: "read-pods" },
    subjects: [{ kind: "User", name: "jane" }],
    roleRef: {
      kind: "Role",
      name: "pod-reader",
      apiGroup: "rbac.authorization.k8s.io",
    },
  },
  ClusterRole: {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRole",
    metadata: { name: "cluster-admin" },
    rules: [
      {
        apiGroups: ["*"],
        resources: ["*"],
        verbs: ["*"],
      },
    ],
  },
  ClusterRoleBinding: {
    apiVersion: "rbac.authorization.k8s.io/v1",
    kind: "ClusterRoleBinding",
    metadata: { name: "cluster-admin-binding" },
    subjects: [{ kind: "User", name: "admin" }],
    roleRef: {
      kind: "ClusterRole",
      name: "cluster-admin",
      apiGroup: "rbac.authorization.k8s.io",
    },
  },
};
