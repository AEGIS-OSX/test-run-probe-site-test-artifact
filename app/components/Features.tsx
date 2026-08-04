"use client";

import { ProjectImage } from "@/app/components/ProjectImage";
import { motion } from "framer-motion";

const features = [
  {
    title: "GPS-tracked walks",
    description:
      "See the exact route, distance, and duration in real time. Every walk is logged and shareable.",
    imageId: "feature_gps",
  },
  {
    title: "Photo updates",
    description:
      "Get a picture of your pup at the park, on the trail, or just enjoying the sunshine.",
    imageId: "feature_photo",
  },
  {
    title: "Trusted walkers",
    description:
      "Every walker is background-checked, insured, and trained in pet first aid.",
    imageId: "feature_trust",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-[var(--color-canvas)]">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-16 h-16 mb-6 relative">
                <ProjectImage id={feature.imageId as any} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[var(--color-text)] text-[20px] leading-[1.2] tracking-[-0.01em] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-[15px] leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
