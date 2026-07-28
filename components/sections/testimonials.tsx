import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { testimonials } from "@/data/content";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
];

export function Testimonials() {
  return (
    <TestimonialsSection
      description="WhatsApp හරහා සම්බන්ධ වූ පාරිභෝගිකයින්ගෙන් ලැබුණු කෙටි අදහස්."
      testimonials={testimonials.map((item, index) => ({
        author: {
          name: item.name,
          handle: item.area,
          avatar: avatars[index % avatars.length]
        },
        text: item.review
      }))}
      title="විශ්වාසය කියන්නේ කතාබහෙන් පටන්ගන්න දෙයක්"
    />
  );
}