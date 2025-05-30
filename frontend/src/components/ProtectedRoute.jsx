'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCurrentUser, isAuthenticated } from '@/lib/auth';

export default function ProtectedRoute({ 
  children 
}: { 
  children) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Function to verify token and get user data
    const verifyAuth = async () => {
      setIsLoading(true);
      
      if (!isAuthenticated()) {
        setIsLoading(false);
        return;
      }
      
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Authentication error, error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (mounted) {
      verifyAuth();
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.push('/login');
    }
  }, [isLoading, user, router, mounted]);

  // Don't render anything during SSR or loading
  if (!mounted || isLoading) {
    return (

    );
  }

  if (!user) {
    return null; // Will redirect in the useEffect
  }

  return <>{children};
}
