// Mock authentication service for frontend development

// Mock user data (will be used for future features)
// const mockUser = {
//   id: '1',
//   name: 'Sarah Connor',
//   email: 'sarah.connor@example.com',
//   role: 'learner',
// };

class AuthService {
  /**
   * Get the current logged in user
   */
  getCurrentUser() {
    // In a real implementation, this would fetch from localStorage or a server
    return {
      name: "Alex Chen",
      email: "alex@example.com",
      role: "student"
    };
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    // Check if the user is authenticated
    return true;
  }
}

export const authService = new AuthService();
