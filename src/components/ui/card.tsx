import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`} {...props} />
);

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ className = "", ...props }) => (
  <div className={`p-6 border-b border-gray-200 ${className}`} {...props} />
);

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ className = "", ...props }) => (
  <h2 className={`text-xl font-bold ${className}`} {...props} />
);

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ className = "", ...props }) => (
  <p className={`text-gray-500 ${className}`} {...props} />
);

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);
