"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft } from "lucide-react";

export function EducationStep({ name, initialEducation, onSubmit, onBack }: EducationStepProps) {
  const [educationLevel, setEducationLevel] = useState(initialEducation || "");
  const [error, setError] = useState("");

  const educationLevels = [
    "Primary School", 
    "Secondary School", 
    "High School", 
    "Bachelor's Degree", 
    "Master's Degree", 
    "PhD", 
    "Other"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!educationLevel) {
      setError("Please select your education level");
      return;
    }
    
    onSubmit(educationLevel);
  };

  return (

          What's your current education level?

       {
              setEducationLevel(e.target.value);
              setError("");
            }}
            className="w-full h-12 rounded-lg pl-3 pr-3 bg-blue-50/50 border border-blue-200 focus) => (
              
                {level}
              
            ))}
          
          {error && {error}}

      <motion.div
        initial={{ opacity, y, y, duration);
}
