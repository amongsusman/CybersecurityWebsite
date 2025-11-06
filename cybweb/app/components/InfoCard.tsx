"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface InfoCardProps {
  title: string;
  description?: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  caption?: string; // new prop for image caption
  reverse?: boolean;
}

export default function InfoCard({
  title,
  description,
  bullets,
  imageSrc,
  imageAlt = "Image",
  caption,
  reverse = false,
}: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
    >
      {/* Image Section */}
      {imageSrc && (
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
          <div className="relative w-full h-64 md:h-72">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain rounded-xl"
            />
          </div>
          {caption && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              {caption}
            </p>
          )}
        </div>
      )}

      {/* Text Section */}
      <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-green-300 mb-3">
          {title}
        </h2>

        {description && (
          <p className="text-gray-700 dark:text-blue-300 leading-relaxed mb-3">
            {description}
          </p>
        )}

        {bullets && bullets.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 dark:text-blue-300 space-y-1">
            {bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
