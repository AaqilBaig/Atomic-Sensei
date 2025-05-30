'use client';

/**
 * Safe access to browser APIs that might not be available during server rendering
 */
export const clientUtils = {
  getToken: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('token');
  },
  
  setToken: (token) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('token', token);
  },
  
  removeToken: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('token');
  }
};