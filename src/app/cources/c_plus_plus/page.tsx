"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/waveBackground";

export default function Page() {
    return (
        <WavyBackground className="max-w-3xl mx-auto pb-40">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                T
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Leverage the power of canvas to create a beautiful hero section
            </p>
        </WavyBackground>
    );
}
