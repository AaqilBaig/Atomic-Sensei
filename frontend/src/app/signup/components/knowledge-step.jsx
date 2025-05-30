"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, Loader2 } from "lucide-react";

export function KnowledgeStep({ name, initialKnowledge, onSubmit, onBack, isSubmitting = false }: KnowledgeStepProps) {
  const [knowledge, setKnowledge] = useState(initialKnowledge || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (knowledge.length 

          Tell us about your current knowledge areas or what you&apos;re interested in learning

       {
              setKnowledge(e.target.value);
              if (e.target.value.length >= 10) {
                setError("");
              }
            }}
            placeholder="I know a bit about mathematics and physics, but I'm really interested in learning more about computer science and artificial intelligence..."
            className="w-full min-h-[128px] p-3 border-blue-200 focus, y, y, duration) : (
            "Complete Signup"
          )}

  );
}
