export const Volumes = {
  PersistentVolume: {
    apiVersion: "v1",
    kind: "PersistentVolume",
    metadata: { name: "my-pv" },
    spec: {
      capacity: { storage: "1Gi" },
      accessModes: ["ReadWriteOnce"],
      hostPath: { path: "/mnt/data" },
    },
  },
  PersistentVolumeClaim: {
    apiVersion: "v1",
    kind: "PersistentVolumeClaim",
    metadata: { name: "my-pvc" },
    spec: {
      accessModes: ["ReadWriteOnce"],
      resources: { requests: { storage: "1Gi" } },
    },
  },
  StorageClass: {
    apiVersion: "storage.k8s.io/v1",
    kind: "StorageClass",
    metadata: { name: "standard" },
    provisioner: "kubernetes.io/aws-ebs",
  },
};
