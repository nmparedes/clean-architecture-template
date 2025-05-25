# NestJS Project - Clean Architecture

This project uses NestJS following the Clean Architecture pattern.

## About the Project

This repository is a template for scalable and maintainable backend applications using [NestJS](https://nestjs.com/). It is organized according to Clean Architecture principles, which separate business logic, domain entities, infrastructure, and interfaces. This approach makes the codebase easier to test, extend, and maintain.

### Main Features

- **NestJS Framework:** Progressive Node.js framework for building efficient and scalable server-side applications.
- **Clean Architecture:** Clear separation of concerns between business logic, domain, infrastructure, and interfaces.
- **Modular Structure:** Each business domain (e.g., users, products) is implemented as an independent module.
- **Ready for Testing:** The structure encourages writing unit and integration tests for each layer.
- **Easily Extensible:** Add new modules or features without impacting existing code.

## Folder Structure

```
src
├── modules
│   ├── users
│   │   ├── application
│   │   │   └── use-cases
│   │   ├── domain
│   │   │   ├── entities
│   │   │   └── repositories
│   │   ├── infrastructure
│   │   │   └── database
│   │   └── interfaces
│   │       └── controllers
│   └── products
│       ├── application
│       │   └── use-cases
│       ├── domain
│       │   ├── entities
│       │   └── repositories
│       ├── infrastructure
│       │   └── database
│       └── interfaces
│           └── controllers
├── main.ts
```

- Each module (e.g., `users`, `products`) follows Clean Architecture principles, separating business logic, domain entities, infrastructure, and interfaces.
- The `main.ts` file is the entry point of the application.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the application:**
   ```bash
   npm run start
   ```
3. **Development mode (auto-reload):**
   ```bash
   npm run start:dev
   ```

## How to Add a New Module

1. Create a new folder under `src/modules` (e.g., `orders`).
2. Add the subfolders: `application`, `domain`, `infrastructure`, and `interfaces`.
3. Follow the same structure as the existing modules.

## References

- [NestJS Documentation](https://docs.nestjs.com/)
- [Clean Architecture by Uncle Bob](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)

For more details, see the README.md files inside each folder.
