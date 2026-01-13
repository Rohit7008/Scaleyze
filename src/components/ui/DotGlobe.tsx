"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

interface Point {
    x: number;
    y: number;
    z: number;
}

export function DotGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();

    // Parallax effect on scroll
    const yOffset = useTransform(scrollY, [0, 1000], [0, 200]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let points: Point[] = [];
        const numPoints = 2500; // Optimized density for star effect
        let rotation = 0;

        // Check if dark mode is active
        const isDarkMode = () => document.documentElement.classList.contains('dark');

        // Initialize points in a spherical distribution (Fibonacci Lattice)
        const initPoints = () => {
            points = [];
            const phi = Math.PI * (3 - Math.sqrt(5));

            for (let i = 0; i < numPoints; i++) {
                const y = 1 - (i / (numPoints - 1)) * 2;
                const currentRadius = Math.sqrt(1 - y * y);
                const theta = phi * i;

                const x = Math.cos(theta) * currentRadius;
                const z = Math.sin(theta) * currentRadius;

                // Expanded globe - Responsive scaling
                const responsiveRadius = Math.min(window.innerWidth * 0.55, 500);

                // Only include top hemisphere (y >= 0) to "cut in half"
                if (y >= 0) {
                    points.push({ x: x * responsiveRadius, y: y * responsiveRadius, z: z * responsiveRadius });
                }
            }
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
            initPoints();
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = window.innerWidth / 2;
            const centerY = 0; // Stuck to the top of hero section

            rotation += 0.001; // Slightly slower for more ethereal feel

            const sortedPoints = [...points].sort((a, b) => {
                const az = a.z * Math.cos(rotation) - a.x * Math.sin(rotation);
                const bz = b.z * Math.cos(rotation) - b.x * Math.sin(rotation);
                return az - bz;
            });

            // Get color based on theme
            const darkMode = isDarkMode();
            const baseColor = darkMode ? '255, 255, 255' : '40, 40, 60'; // White for dark, dark blue-gray for light

            sortedPoints.forEach((p) => {
                const cosRot = Math.cos(rotation);
                const sinRot = Math.sin(rotation);

                const rotX = p.x * cosRot + p.z * sinRot;
                const rotZ = p.z * cosRot - p.x * sinRot;

                const perspective = 1000 / (1000 + rotZ);
                const x2d = rotX * perspective + centerX;
                const y2d = p.y * perspective + centerY;

                const responsiveRadius = Math.min(window.innerWidth * 0.55, 500);
                const normalizedZ = (rotZ + responsiveRadius) / (2 * responsiveRadius); // 0 (front) to 1 (back)

                // Star Shine Effect: Highest when rotZ is closest to -responsiveRadius (extreme front-center)
                // We use a power function to make the "pop" sharper at the center
                const shineInfluence = Math.pow(1 - normalizedZ, 3);
                const opacity = darkMode ? (0.1 + (shineInfluence * 0.8)) : (0.15 + (shineInfluence * 0.6));
                const size = 0.5 + (shineInfluence * 2);

                ctx.beginPath();
                ctx.arc(x2d, y2d, size, 0, Math.PI * 2);

                // Add star glow if it's very close to center
                if (shineInfluence > 0.7) {
                    ctx.shadowBlur = 10 * shineInfluence;
                    ctx.shadowColor = darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(40, 40, 60, 0.5)';
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
                ctx.fill();

                // Small center highlight for star "core"
                if (shineInfluence > 0.5) {
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, size * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${baseColor}, ${shineInfluence})`;
                    ctx.fill();
                }
            });

            // Reset shadow for next frame or other draws
            ctx.shadowBlur = 0;
            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resize);
        resize();
        initPoints();
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-60 filter"
                style={{
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
            />
        </div>
    );
}
