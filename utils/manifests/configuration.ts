export const Configuration = {
  ConfigMap: {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: { name: "my-config" },
    data: { "config-key": "config-value" },
  },
  Secret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: { name: "my-secret" },
    type: "Opaque",
    data: { username: "YWRtaW4=", password: "cGFzc3dvcmQ=" },
  },
  HorizontalPodAutoscaler: {
    apiVersion: "autoscaling/v2",
    kind: "HorizontalPodAutoscaler",
    metadata: { name: "my-hpa" },
    spec: {
      scaleTargetRef: {
        apiVersion: "apps/v1",
        kind: "Deployment",
        name: "my-deployment",
      },
      minReplicas: 1,
      maxReplicas: 5,
      metrics: [
        {
          type: "Resource",
          resource: {
            name: "cpu",
            target: { type: "Utilization", averageUtilization: 80 },
          },
        },
      ],
    },
  },
};
