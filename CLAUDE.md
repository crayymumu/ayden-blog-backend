# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # TypeScript compile + production build
npm run start    # Start production server
```

Note: No test infrastructure is configured in this project.

## Architecture

This is a Refine-based HR application for managing employee time-off requests.

### Framework Stack
- **Refine**: Data-intensive React framework for admin panels
- **Vite**: Build tool with TypeScript
- **MUI (Material UI)**: UI component library
- **React Router v7**: Routing with nested layouts
- **TanStack Query**: Data fetching via Refine hooks
- **React Hook Form**: Form handling

### Role-Based Access Control
Two user roles: `EMPLOYEE` and `MANAGER` (defined in `src/types/index.ts`).

- Routes are organized by role: `/employee/*` and `/manager/*`
- Access control is enforced via `accessControlProvider` at route level
- Resources have `meta.scope` defining required role

### Provider Pattern (`src/providers/`)
All providers are configured in `App.tsx`:
- `auth-provider`: JWT-based authentication with access/refresh tokens
- `access-control`: Role-based permission checks
- `data`: NestJSX CRUD data provider connecting to `https://api.hr.refine.dev`
- `theme-provider`: MUI theming with role-specific themes
- `notification-provider`: Toast notifications via react-hot-toast

### Page Structure (`src/pages/`)
Pages are organized by user role:
- `employee/time-offs/`: Employee time-off list and creation pages
- `manager/requests/`: Manager request review and edit pages
- `login/`: Authentication page

### Key Patterns
- Use Refine hooks (`useList`, `useCreate`, `useUpdate`, etc.) for data operations
- Path alias `@/*` maps to `src/`
- Icons are custom components in `src/icons/`
- Reusable components in `src/components/` organized by feature

### Authentication Flow
- Tokens stored in localStorage (`accessToken`, `refreshToken`)
- `authHeaderBeforeRequestHook` adds auth headers to requests
- `refreshTokenAfterResponseHook` handles token refresh automatically
