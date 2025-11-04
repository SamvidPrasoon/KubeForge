export const Workloads = {
  Deployment: {
    apiVersion: "apps/v1",
    kind: "Deployment",
    metadata: { name: "my-deployment" },
    spec: {
      replicas: 1,
      selector: { matchLabels: { app: "my-app" } },
      template: {
        metadata: { labels: { app: "my-app" } },
        spec: {
          containers: [
            {
              name: "app",
              image: "nginx:latest",
              ports: [{ containerPort: 80 }],
            },
          ],
        },
      },
    },
  },
  StatefulSet: {
    apiVersion: "apps/v1",
    kind: "StatefulSet",
    metadata: { name: "my-statefulset" },
    spec: {
      serviceName: "stateful-service",
      replicas: 1,
      selector: { matchLabels: { app: "my-app" } },
      template: {
        metadata: { labels: { app: "my-app" } },
        spec: {
          containers: [
            {
              name: "app",
              image: "nginx",
              ports: [{ containerPort: 80 }],
              volumeMounts: [{ name: "data", mountPath: "/data" }],
            },
          ],
        },
      },
      volumeClaimTemplates: [
        {
          metadata: { name: "data" },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: { requests: { storage: "1Gi" } },
          },
        },
      ],
    },
  },
  Namespace: {
    apiVersion: "v1",
    kind: "Namespace",
    metadata: {
      name: "my-namespace",
    },
  },
  DaemonSet: {
    apiVersion: "apps/v1",
    kind: "DaemonSet",
    metadata: { name: "my-daemon" },
    spec: {
      selector: { matchLabels: { app: "daemon" } },
      template: {
        metadata: { labels: { app: "daemon" } },
        spec: {
          containers: [{ name: "daemon", image: "nginx" }],
        },
      },
    },
  },
  Job: {
    apiVersion: "batch/v1",
    kind: "Job",
    metadata: { name: "my-job" },
    spec: {
      template: {
        spec: {
          containers: [
            { name: "job", image: "busybox", command: ["echo", "Hello"] },
          ],
          restartPolicy: "Never",
        },
      },
    },
  },
  CronJob: {
    apiVersion: "batch/v1",
    kind: "CronJob",
    metadata: { name: "my-cronjob" },
    spec: {
      schedule: "*/5 * * * *",
      jobTemplate: {
        spec: {
          template: {
            spec: {
              containers: [
                { name: "cron", image: "busybox", command: ["date"] },
              ],
              restartPolicy: "OnFailure",
            },
          },
        },
      },
    },
  },
  Pod: {
    apiVersion: "v1",
    kind: "Pod",
    metadata: { name: "my-pod" },
    spec: {
      containers: [{ name: "my-container", image: "nginx" }],
    },
  },
};
