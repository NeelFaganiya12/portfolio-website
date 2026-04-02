 'use client';

import { useState } from 'react';
import { FiChevronDown, FiFileText } from 'react-icons/fi';

export default function PublicationsPage() {
  const papers = [
    {
      title: "How do Language Models Encode Privacy Bias?",
      authors: (
        <>
          Sajad Rahmanian Ashkezari,{" "}
          <strong>Neel Sanjaybhai Faganiya</strong>, Lucas Kopp
        </>
      ),
      venue: "December 2025",
      year: "",
      paperUrl: "/docs/PrivacyBias.pdf",
      webUrl: "#",
      abstract:
        "Large Language Models (LLMs) increasingly mediate socio-technical systems where privacy judgments are critical, yet they often encode biased privacy norms learned from internet-scale training data. Prior work has predominantly focused on detecting behavioral privacy biases without understanding their mechanistic origins within the model weights. This paper addresses this gap by investigating whether privacy biases are localize in specific circuits of LLMs using the Contextual Integrity (CI) framework.\nWe use this methodology of combining CI with Mechanistic Interpretability (MI) techniques to identify and analyze these circuits. Our approach constructs controlled vignette pairs that isolate key CI parameters and employs Edge Attribution Patching with Integrated Gradients (EAP-IG) on instruction-tuned LLMs to discover faithful circuits influencing privacy-related decisions. Results reveal specialized mid-to-late layer attention patterns with high fidelity that differentiate appropriate from inappropriate information flows, with low structural overlap indicating modular privacy mechanisms.\nOur work bridges behavioral privacy evaluation with internal model interpretability, advancing tools for targeted circuit editing to mitigate privacy biases without costly full model retraining. our finding provide actionable insights for developing privacy-respecting AI systems.",
    },
  ];

  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 min-w-0">
      <h1 className="text-xl font-bold text-center mb-8 text-gray-900 dark:text-white">Papers</h1>

      <div className="space-y-6">
        {papers.map((p) => {
          const isOpen = openTitle === p.title;
          const abstractId = `paper-abstract-${encodeURIComponent(p.title)}`;

          return (
            <div
              key={p.title}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-white/70 dark:bg-gray-900/30"
            >
              <div className="min-w-0">
                <a
                  href={p.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 dark:text-gray-100 underline font-semibold text-lg leading-snug break-words"
                >
                  {p.title}
                </a>

                <div className="text-gray-600 dark:text-gray-400 mt-1 text-sm break-words">
                  {p.authors}
                </div>

                <div className="text-gray-600 dark:text-gray-400 mt-2 text-sm font-serif">
                  {p.venue}
                  {p.year ? `, ${p.year}` : ''}
                </div>
              </div>

              {/* Icon row (PDF, website, abstract toggle) */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={p.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                  aria-label="PDF"
                  title="PDF"
                >
                  <FiFileText size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => setOpenTitle((cur) => (cur === p.title ? null : p.title))}
                  aria-expanded={isOpen}
                  aria-controls={abstractId}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800"
                  title={isOpen ? 'Hide abstract' : 'Show abstract'}
                >
                  <span
                    className={
                      isOpen
                        ? 'transform rotate-180 transition-transform'
                        : 'transition-transform'
                    }
                  >
                    <FiChevronDown size={18} />
                  </span>
                </button>
              </div>

              {/* Abstract (expand/collapse) */}
              <div
                id={abstractId}
                className={
                  isOpen
                    ? 'mt-4 text-gray-600 dark:text-gray-300 text-sm font-serif break-words whitespace-pre-line max-h-[600px] opacity-100 overflow-hidden transition-[opacity,max-height]'
                    : 'mt-4 text-gray-600 dark:text-gray-300 text-sm font-serif break-words whitespace-pre-line max-h-0 opacity-0 overflow-hidden transition-[opacity,max-height]'
                }
              >
                {p.abstract}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
