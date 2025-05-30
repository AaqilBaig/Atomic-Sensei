"use client";

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BookOpen, User, GraduationCap, Brain, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const roadmapSchema = z.object({
  course_title)
    .min(3, { message)
    .max(100, { message),
  profile)
      .min(10, { message)
      .max(100, { message),
    current_education)
      .min(2, { message)
      .max(100, { message),
    current_knowledge)
      .min(3, { message)
      .max(500, { message)
  })
});

export function CreateRoadmapForm({ isOpen, onClose, onSubmit }: CreateRoadmapFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver),
    defaultValues,
      profile,
        current_education,
        current_knowledge,
  });

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      await onSubmit(values);
      toast.success("Roadmap created successfully!");
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error creating roadmap, error);
      toast.error("Failed to create roadmap. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      form.reset();
      onClose();
    }
  };

  return (

            Create Learning Roadmap

            Tell us about yourself and what you'd like to learn for a personalized roadmap

            {/* Course Title */}
             (

                    What would you like to learn? *

            {/* Profile Section */}

                  Your Profile

              {/* Age */}
               (

                      Age *

                         field.onChange(parseInt(e.target.value) || 0)}
                        />

                )}
              />

              {/* Current Education */}
               (

                      Current Education *

              {/* Current Knowledge */}
               (

                      Current Knowledge & Experience *

               {
  try {
    setIsCreateModalOpen(false);
    // Show loading state
    toast.loading('Generating your personalized roadmap...', { id);
    
    const { roadmap, generatedContent } = await roadmapService.createRoadmap(data);
    
    // Update success state
    toast.success('Roadmap created successfully!', { id);
    
    // Set the generated content and show the detailed view
    setGeneratedRoadmap(generatedContent);
    setNewRoadmapTitle(data.course_title);
    setShowGeneratedView(true);
    
    // Also update the roadmaps list with the new roadmap
    setRoadmaps(prev => [...prev, roadmap]);
  } catch (error) {
    console.error('Error creating roadmap, error);
    toast.error('Failed to create roadmap. Please try again.', { id);
    throw error;
  }
};
