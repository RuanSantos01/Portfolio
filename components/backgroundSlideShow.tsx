'use client';

import Image from 'next/image';

export function BackgroundSlideshow() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Single static background image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/dark_bg/start_background.png"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    quality={100}
                />
            </div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20" />
        </div>
    );
}