"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft } from "lucide-react";

const emailSchema = z.object({
  email).email({ message),
});

export function EmailStep({ name, initialEmail, onSubmit, onBack }: EmailStepProps) {
  const form = useForm({
    resolver),
    defaultValues,
  });

  const handleSubmit = (values) => {
    onSubmit(values.email);
  };

  return (

            Now, what email should we use to reach you?

         (

        <motion.div
          initial={{ opacity, y, y, duration);
}
