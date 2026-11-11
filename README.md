# XTreme Fitness – Frontend Portfolio Project

A modular, component-based React web application developed as a portfolio project during my Web Developer education at **Media College Denmark**. 

The project is built for **XTreme Fitness**, a modern fitness and training platform, focusing on robust data lifecycle management (`GET`, `POST`, `PU`T, `DELETE`), lazy loading optimization, and custom CRUD implementations.

## Key Features & Engineering Focus

Due to fixed project iterations, the application was engineered using an agile prioritization strategy (Mobile-First) to deliver a polished user experience and core backend integrations.

### Core Frontend & UI/UX
*   **Modular Architecture:** The interface is broken down into highly decoupled, reusable components (such as dynamic `Header` structures and the *Om os* section) with dynamic content injected via flexible React props.
*   **Performance Optimization:** Implemented asynchronous **lazy loading** within the project's data loading architecture using React's native `Suspense` mechanism to cut initial bundle loading sizes.
*   **Interactive Exercises & Landing Page:** The landing page features a fully functional custom classic image/content slider and modal views built directly with `useState` and `useLocation` hooks.

### Backoffice & Data Operations
*   **Custom CRUD Hook (`useCrud`):** Engineered a specialized custom React hook to centralize and handle asynchronous `POST`, `PUT`, and `DELETE` requests safely across administrative modules.
*   **Agile Data Prioritization:** High priority was given to building the complete **Blog Administration** lifecycle in the Backoffice to immediately display how backend changes propagate and update the live application view.
*   **Data Layout Scalability:** Created data loading structures (*Dataloaders*) across multiple entities (services, reviews, subscriptions, employees) to demonstrate scalable data handling, verified inside the `Exercises` component.

## Tech Stack & Dependencies

*   **Frontend Framework:** React (Single Page Application architecture)
*   **Styling:** CSS Modules (ensuring complete encapsulation of component styles and preventing global scope leakage)
*   **Notifications:** `React-Toastify` for rich, non-blocking asynchronous user success and error confirmations
*   **Workflow Management:** Agile tracking using GitHub Projects kanban boards.
*   **Development Workflow:** Logic optimization and code troubleshooting using generative AI pair-programming methodologies.

## Development & Local Setup

*Note: This repository contains the frontend application. The backend API application runs locally and is not hosted publicly.*

### 1. Installation
Clone the repository:
```bash
git clone https://github.com
cd Xtreme-Fitness
```

Install the project modules and dependencies:
```bash
npm install
```

### 2. Configuration
The API connection path is managed globally. By default, it is calibrated to target your local backend server layer running on port 3042:
```javascript
export const serverPath = `http://localhost:3042`;
export const authmode = false; 
```

### 3. Running the Application
To spin up the local development engine:
```bash
npm run dev
```
