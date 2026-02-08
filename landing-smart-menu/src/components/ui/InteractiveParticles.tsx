"use client";

import { useEffect, useRef } from "react";

interface InteractiveParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
}

export default function InteractiveParticles({
    className = "",
    quantity = 80, // Aumenté cantidad para que no se sienta vacío
    staticity = 50,
    ease = 50,
}: InteractiveParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<any[]>([]);
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);

        return () => {
            window.removeEventListener("resize", initCanvas);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (canvasRef.current) {
                const rect = canvasRef.current.getBoundingClientRect();
                const { w, h } = canvasSize.current;
                const x = e.clientX - rect.left - w / 2;
                const y = e.clientY - rect.top - h / 2;
                const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
                if (inside) {
                    mouse.current.x = x;
                    mouse.current.y = y;
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const initCanvas = () => {
        resizeCanvas();
        drawParticles();
    };

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
        }
    };

    const circleParams = () => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const translateX = 0;
        const translateY = 0;
        const size = Math.floor(Math.random() * 2) + 1; // Puntos pequeños
        const alpha = 0;
        const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)); // Opacidad un poco más visible
        const dx = (Math.random() - 0.5) * 0.1; // Movimiento MUY lento (antes 0.4)
        const dy = (Math.random() - 0.5) * 0.1;
        const magnetism = 0.1 + Math.random() * 4;
        return {
            x,
            y,
            translateX,
            translateY,
            size,
            alpha,
            targetAlpha,
            dx,
            dy,
            magnetism,
        };
    };

    const drawCircle = (circle: any, update = false) => {
        if (context.current) {
            const { x, y, translateX, translateY, size, alpha } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);
            // Hardcoded Darker Grey/Black for Monochrome look
            context.current.fillStyle = `rgba(39, 39, 42, ${alpha})`; // Zinc-800
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.current.push(circle);
            }
        }
    };

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h
            );
        }
    };

    const drawParticles = () => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    };

    const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number
    ) => {
        const remapped =
            ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
        clearContext();
        circles.current.forEach((circle: any, i: number) => {
            // Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size, // distance from left edge
                canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
                circle.y + circle.translateY - circle.size, // distance from top edge
                canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
            );
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                ease;

            if (
                circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size
            ) {
                // circle is out of the canvas
                circles.current.splice(i, 1);
                const newCircle = circleParams();
                drawCircle(newCircle);
            } else {
                drawCircle(circle, true);
            }
        });

        // Conexiones para efecto red
        connectParticles();

        window.requestAnimationFrame(animate);
    };

    // Función extra para conectar puntos cercanos
    const connectParticles = () => {
        if (!context.current) return;

        for (let a = 0; a < circles.current.length; a++) {
            for (let b = a; b < circles.current.length; b++) {
                const dist =
                    Math.pow(circles.current[a].x - circles.current[b].x, 2) +
                    Math.pow(circles.current[a].y - circles.current[b].y, 2);

                if (dist < 8000) { // Mayor distancia para más conexiones
                    context.current.beginPath();
                    // Linea Gris oscura sutil
                    const alpha = (1 - dist / 8000) * 0.5;
                    context.current.strokeStyle = `rgba(113, 113, 122, ${alpha})`; // Zinc-500
                    context.current.lineWidth = 0.8;
                    context.current.moveTo(circles.current[a].x + circles.current[a].translateX, circles.current[a].y + circles.current[a].translateY);
                    context.current.lineTo(circles.current[b].x + circles.current[b].translateX, circles.current[b].y + circles.current[b].translateY);
                    context.current.stroke();
                }
            }
        }
    }

    return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}
