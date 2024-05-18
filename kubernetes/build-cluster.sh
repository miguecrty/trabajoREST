#!/bin/bash
podman image rm -f bbdd
podman image rm -f backend
podman image rm -f frontend
cd ..
cd backend
podman build -t backend .
id_backend=$(podman inspect --format='{{.Id}}' backend)
podman image push $id_backend docker.io/miguecrty/trabajorest:backend
cd ..
cd frontend
podman build -t frontend .
id_frontend=$(podman inspect --format='{{.Id}}' frontend)
podman image push $id_frontend docker.io/miguecrty/trabajorest:frontend
cd ..
cd bbdd
podman build -t bbdd .
id_postgres=$(podman inspect --format='{{.Id}}' bbdd)
podman image push $id_postgres docker.io/miguecrty/trabajorest:postgres
kind delete cluster
kind create cluster
kubectl apply -f .
