"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

const passwordSchema = z.object({
  password)
    .min(8, { message)
    .regex(/[A-Z]/, { message)
    .regex(/[a-z]/, { message)
    .regex(/[0-9]/, { message),
  confirmPassword),
}).refine((data) => data.password === data.confirmPassword, {
  message,
  path,
});

export function PasswordStep({ name, onSubmit, onBack }: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const form = useForm({
    resolver),
    defaultValues,
      confirmPassword,
    },
  });

  const handleSubmit = (values) => {
    onSubmit(values.password);
  };

  return (

            Create a strong password to protect your learning journey

         (

                     setShowPassword(!showPassword)}
                    >
                      {showPassword ?  : }

            )}
          />

           (

                     setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ?  : }

            )}
          />

        <motion.div
          initial={{ opacity, y, y, duration);
}
