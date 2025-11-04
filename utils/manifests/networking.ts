export const Networking = {
  Service: {
    apiVersion: "v1",
    kind: "Service",
    metadata: { name: "my-service" },
    spec: {
      selector: { app: "my-app" },
      ports: [{ port: 80, targetPort: 80 }],
      type: "ClusterIP",
    },
  },
  Ingress: {
    apiVersion: "networking.k8s.io/v1",
    kind: "Ingress",
    metadata: { name: "my-ingress" },
    spec: {
      rules: [
        {
          host: "example.com",
          http: {
            paths: [
              {
                path: "/",
                pathType: "Prefix",
                backend: {
                  service: { name: "my-service", port: { number: 80 } },
                },
              },
            ],
          },
        },
      ],
    },
  },
  NetworkPolicy: {
    apiVersion: "networking.k8s.io/v1",
    kind: "NetworkPolicy",
    metadata: { name: "allow-web" },
    spec: {
      podSelector: { matchLabels: { role: "frontend" } },
      policyTypes: ["Ingress"],
      ingress: [
        { from: [{ podSelector: { matchLabels: { role: "backend" } } }] },
      ],
    },
  },
};
