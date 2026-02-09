"use client";

import { ReactNode } from "react";

interface InteractiveCardProps {
    icon: string;
    title: string;
    description: string;
    color: "purple" | "blue" | "pink" | "orange" | "green";
    className?: string;
}

const colorStyles = {
    purple: {
        iconBg: "bg-purple-500",
        hoverBg: "hover:bg-purple-50",
        hoverShadow: "hover:shadow-purple-200/50"
    },
    blue: {
        iconBg: "bg-blue-500",
        hoverBg: "hover:bg-blue-50",
        hoverShadow: "hover:shadow-blue-200/50"
    },
    pink: {
        iconBg: "bg-pink-500",
        hoverBg: "hover:bg-pink-50",
        hoverShadow: "hover:shadow-pink-200/50"
    },
    orange: {
        iconBg: "bg-orange-500",
        hoverBg: "hover:bg-orange-50",
        hoverShadow: "hover:shadow-orange-200/50"
    },
    green: {
        iconBg: "bg-green-500",
        hoverBg: "hover:bg-green-50",
        hoverShadow: "hover:shadow-green-200/50"
    }
};

export function InteractiveCard({ icon, title, description, color, className = "" }: InteractiveCardProps) {
    const styles = colorStyles[color];

    return (
        <div
            className={`group relative p-8 rounded-3xl bg-white border border-zinc-200 transition-all duration-300 cursor-pointer
        ${styles.hoverBg} ${styles.hoverShadow} hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-100 ${className}`}
        >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110`}>
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-black mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 text-zinc-600">
                {description}
            </p>

            {/* Decorative line on hover */}
            <div className={`absolute bottom-0 left-8 right-8 h-1 ${styles.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`} />
        </div>
    );
}
