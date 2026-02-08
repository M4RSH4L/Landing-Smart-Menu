import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className = "",
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <div
            className={`
        border border-white/50 bg-white backdrop-blur-lg 
        rounded-2xl shadow-sm
        ${hoverEffect ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white hover:border-accent/10" : ""}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};
