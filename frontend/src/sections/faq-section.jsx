import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
   const data = [
  {
    question: "Do I need design or editing experience to use the AI Thumbnail Generator?",
    answer:
      "No design or editing experience is required. Simply describe your idea, and the AI generates a professional, high-quality thumbnail for you.",
  },
  {
    question: "What is the AI Thumbnail Generator and how does it work?",
    answer:
      "It’s an AI-powered tool that creates eye-catching thumbnails from text prompts by analyzing layout, color, and visual hierarchy for maximum engagement.",
  },
  {
    question: "Can I use the generated thumbnails on YouTube and social media?",
    answer:
      "Yes. Thumbnails are optimized for platforms like YouTube, Instagram, Shorts, and Reels with multiple aspect ratio options.",
  },
  {
    question: "How customizable are the thumbnails?",
    answer:
      "You can customize text, colors, styles, and layouts, and provide additional prompts to fine-tune the final design.",
  },
  {
    question: "Can I upload my own photo or branding assets?",
    answer:
      "Yes. You can upload personal photos, logos, or brand elements to make thumbnails more personalized and consistent.",
  },
  {
    question: "Can I try the AI Thumbnail Generator before upgrading?",
    answer:
      "Yes. You can try the generator with limited credits and upgrade anytime for premium features and higher-quality results.",
  },
];


    return (
        <section className='mt-32' id="faq">
            <SectionTitle title="FAQ's" description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}