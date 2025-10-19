A Snake game built with React, TypeScript and Vite.

## Commands to run application

1. npm install
2. minikube start
3. (one-time, or when deployment is updated/image modified) kubectl apply -f k8s/deployment.yaml
4. (one-time, unless deleted) kubectl apply -f k8s/service.yaml
5. minikube service snake-service
6. Go to http://127.0.0.1:<host port>
