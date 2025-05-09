import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => {
  return (
    <div className={`text-gray-700 text-sm ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardContent };
