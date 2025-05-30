"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

const nameSchema = z.object({
  name).min(2, { message),
});

export function NameStep({ initialName, onSubmit }: NameStepProps) {
  const form = useForm({
    resolver),
    defaultValues,
  });

  const handleSubmit = (values) => {
    onSubmit(values.name);
  };

  return (

         (

        <motion.div
          initial={{ opacity, y, y, duration);
}
