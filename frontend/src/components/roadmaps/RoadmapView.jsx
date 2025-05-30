"use client";

import { useState } from 'react';
import { GeneratedRoadmap } from '@/services/roadmap.service';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, ChevronRight, ArrowLeft } from 'lucide-react';

export function RoadmapView({ title, generatedRoadmap, onBack }: RoadmapViewProps) {
  const [activeModule, setActiveModule] = useState(Object.keys(generatedRoadmap)[0]);

  // Calculate total duration
  const totalDuration = Object.values(generatedRoadmap).reduce((total, module) => {
    const duration = module.duration.split(' ');
    const value = parseInt(duration[0]);
    const unit = duration[1];
    
    // Convert all to days for calculation
    let days = 0;
    if (unit.includes('week')) {
      days = value * 7;
    } else if (unit.includes('day')) {
      days = value;
    } else if (unit.includes('month')) {
      days = value * 30;
    }
    
    return total + days;
  }, 0);
  
  const totalModules = Object.keys(generatedRoadmap).length;
  const totalSubmodules = Object.values(generatedRoadmap).reduce(
    (total, module) => total + Object.keys(module.submodules).length, 0
  );

  return (
    
       (
                  
                     setActiveModule(moduleKey)}
                    >
                      
                        {index + 1}

                          {module.title}
                        
                        {module.duration}
                      
                      {activeModule === moduleKey && (
                        
                      )}

                ))}

            {/* Module content */}
             (

              )}

  );
}
