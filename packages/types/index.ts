// Shared types for both frontend and backend

export interface User {
   userId: string;
   username: string;
   email: string;
   firstName?: string;
   lastName?: string;
   phone?: string;
   isActive: boolean;
   isEmailVerified: boolean;
   lastLoginAt?: Date;
   createdAt: Date;
   updatedAt: Date;
}

// API Response wrapper
export interface ApiResponse<T> {
   data?: T;
   error?: string;
   message?: string;
}
