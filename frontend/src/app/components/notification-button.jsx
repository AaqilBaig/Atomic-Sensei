"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Check, Info, AlertTriangle } from "lucide-react";
import { useNotifications, NotificationType } from "../context/notification-context";

function formatTime(date) {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (60 * 1000));
  
  if (diffInMinutes ;
    case "warning":
      return ;
    case "error":
      return ;
    case "info":
    default) {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, markAsRead, clearNotification, unreadCount } = useNotifications();
  
  const handleNotificationClick = (id) => {
    markAsRead(id);
  };

  return (
    
       setIsOpen(!isOpen)}
        className="relative p-2 rounded-full text-gray-500 hover)}

        {isOpen && (
           setIsOpen(false)}
                className="text-gray-400 hover){notifications.map(notification => (
                   handleNotificationClick(notification.id)}
                    className={`p-3 border-b last) => {
                              e.stopPropagation();
                              clearNotification(notification.id);
                            }}
                            className="text-gray-300 hover)}

                ))}
              
            )}
          
        )}

  );
}

