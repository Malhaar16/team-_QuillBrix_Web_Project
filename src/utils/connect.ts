/**
 * This file integrates user authentication using NextAuth with Google provider, 
 * Prisma adapter, and state management for cart functionality using Zustand. 
 * It includes the following key sections:
 * - Prisma Client setup: Configures Prisma for database interactions.
 * - NextAuth Configuration: Sets up Google OAuth provider and custom session handling.
 * - Zustand Store: Implements a cart state with persistent storage.
 */

// --- Prisma Client Setup ---

import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Initialize Prisma client for database interactions.
 * Ensures a single instance of Prisma is used across the application in development.
 */

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma  