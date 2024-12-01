# Project Overview

This project aims to develop a RESTful API application based on Node.js and MySQL. It is designed to run on Docker and Kubernetes, providing a scalable and portable architecture.

---

## Features

### Comprehensive RESTful API with MySQL Integration
- A RESTful API is developed using **Node.js**, enabling **CRUD** (Create, Read, Update, Delete) operations on the **MySQL** database.
- Environment variables (**DB_HOST**, **DB_USER**, **DB_PASSWORD**, **DB_NAME**) configure database communication, ensuring flexibility and security.
- Data persistence is ensured through **PersistentVolumeClaim (PVC)**, preventing data loss across Pod restarts.

### Containerization and Deployment
- The application is containerized using **Docker**.
- Both the **Node.js application** and **MySQL database** are deployed and managed as Kubernetes Pods.
- Kubernetes enhances scalability, manageability, and modularity, allowing horizontal and vertical scaling as needed.

### Service and Traffic Management
- Kubernetes **Service** objects, such as `NodePort` and `ClusterIP`, manage internal and external traffic effectively.
- A user-friendly architecture ensures seamless integration of new services and scalability.

### Testing and Compatibility
- The application is designed to run seamlessly on diverse environments, leveraging **Docker** and **Kubernetes** compatibility.
- Its API endpoints can be easily tested using tools like `curl` or **Postman**.

---

## Requirements

- **[Docker](https://www.docker.com/)** & a **[Docker Hub](https://hub.docker.com/) account**  
- **[Kubernetes](https://kubernetes.io/)**  
- **[Minikube](https://minikube.sigs.k8s.io/docs/)** or **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** for local Kubernetes environment setup  

### Installation

1. **Clone the Repository**  
   ```bash
   git clone <your-repo-url>
   cd <project-directory>


## Project setup
```
npm install
```

### Run
```
node server.js
```
