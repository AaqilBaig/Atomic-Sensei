"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cake } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ageSchema = z.object({
  age)
    .refine((val) => !isNaN(Number(val)), { message)
    .refine((val) => Number(val) >= 5 && Number(val) >({
    resolver),
    defaultValues,
    },
  });

  // Make sure the form values are updated if initialAge changes
  useEffect(() => {
    form.reset({ age);
  }, [initialAge, form]);

  const handleSubmit = (values) => {
    onSubmit(Number(values.age));
  };

  return (

            To personalize your learning experience, we need a little more information.

         (

        <motion.div
          initial={{ opacity, y, y, duration);
}
