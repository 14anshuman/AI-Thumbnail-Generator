import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);
  const data = [
  {
    review:
      "Creating thumbnails used to take hours. This AI generator produces clean, eye-catching thumbnails in seconds.",
    name: "Richard Nelson",
    about: "YouTube Creator",
    rating: 5,
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    review:
      "The designs look professional and optimized for clicks. My video engagement improved noticeably.",
    name: "Sophia Martinez",
    about: "Content Strategist",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    review:
      "I just enter a prompt and the thumbnail is ready. The layouts, colors, and text placement are spot on.",
    name: "Ethan Roberts",
    about: "Video Editor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    review:
      "This tool understands exactly what a high-converting thumbnail needs. Clean, bold, and attention-grabbing.",
    name: "Isabella Kim",
    about: "Digital Marketer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    review:
      "Hands down the fastest way to generate thumbnails that actually perform well on YouTube.",
    name: "Liam Johnson",
    about: "Content Creator",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    review:
      "The AI nails contrast, typography, and composition. It feels like having a professional designer on demand.",
    name: "Ava Patel",
    about: "Growth Marketer",
    rating: 5,
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

    return (
        <section className="mt-32 flex flex-col items-center" id="testimonials">
            <SectionTitle
                title="Here’s what creators say about our AI thumbnail generator."
                description="Empower your content with AI thumbnails that optimize design and accelerate engagement."
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>
                        <p className='line-clamp-3'>“{item.review}”</p>
                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}