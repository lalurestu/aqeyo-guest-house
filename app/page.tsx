import Hero from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Our Story / Welcome Section */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            Welcome to Bale Bangket
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nestled in the heart of nature, Bale Bangket offers a unique fusion of
            peaceful accommodation and culinary excellence. Whether you're seeking
            a restful escape in our cozy guesthouse or looking to indulge your
            taste buds at our lively cafe, we promise an unforgettable experience
            enriched with local charm and warmth.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-subtle/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-serif">
            Discover Our Offerings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From comfortable stays to artisan coffee, explore what makes us special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Guesthouse Highlight */}
          <Card
            image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
            imageAlt="Cozy Guesthouse Room"
            className="h-full flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3 font-serif">
                The Guesthouse
              </h3>
              <p className="text-gray-600 mb-6">
                Relax in our beautifully designed rooms, featuring modern amenities,
                serene garden views, and the ultimate comfort for a perfect night's sleep.
              </p>
            </div>
            <Link href="/rooms">
              <Button variant="outline" className="w-full">
                View Rooms & Amenities
              </Button>
            </Link>
          </Card>

          {/* Cafe Highlight */}
          <Card
            image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            imageAlt="Cafe Atmosphere"
            className="h-full flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3 font-serif">
                The Cafe
              </h3>
              <p className="text-gray-600 mb-6">
                Savor locally sourced coffee, delicious meals, and mouth-watering desserts
                in a vibrant, open-air setting perfect for socializing or unwinding.
              </p>
            </div>
            <Link href="/cafe">
              <Button variant="outline" className="w-full">
                Explore Our Menu
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Ready for Your Getaway?
            </h2>
            <p className="text-white/90 text-lg">
              Book your stay today and experience the magic of Bale Bangket.
            </p>
          </div>
          <div className="md:w-1/3 text-right">
            <Link href="/rooms">
              <Button
                variant="secondary"
                size="lg"
                className="w-full md:w-auto shadow-xl"
              >
                Plan Your Stay Now
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials (Simplified) */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4 font-serif">
            What Our Guests Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "The perfect mix of relaxation and great food. The cafe vibe is amazing!",
              author: "Sarah D.",
              role: "Guesthouse Guest",
            },
            {
              text: "Best coffee in town. I love coming here to work and enjoy the view.",
              author: "Michael R.",
              role: "Cafe Regular",
            },
            {
              text: "A hidden gem. The staff was incredibly welcoming and the room was pristine.",
              author: "Jessica T.",
              role: "Traveler",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-subtle/5 p-8 rounded-2xl relative border border-subtle/10"
            >
              <FaQuoteLeft className="text-secondary/20 text-4xl absolute top-4 left-4" />
              <div className="relative z-10">
                <div className="flex text-secondary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-primary-foreground">
                    {review.author}
                  </h4>
                  <span className="text-sm text-subtle">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
