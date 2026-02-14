import Hero from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Home(props: any) {
  const t = useTranslations('Home');
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Our Story / Welcome Section */}
      <Section className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            {t('welcomeTitle')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {t('welcomeText')}
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-subtle/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
            {t('offeringsTitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('offeringsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Guesthouse Highlight */}
          <Card
            image="/assets/img/img6.jpeg"
            imageAlt="Cozy Guesthouse Room"
            className="h-full flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3 font-serif">
                {t('guesthouseTitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('guesthouseText')}
              </p>
            </div>
            <Link href="/rooms">
              <Button variant="outline" className="w-full">
                {t('viewRooms')}
              </Button>
            </Link>
          </Card>

          {/* Cafe Highlight */}
          <Card
            image="/assets/img/img5.jpeg"
            imageAlt="Social Space Atmosphere"
            className="h-full flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3 font-serif">
                {t('socialSpaceTitle')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('socialSpaceText')}
              </p>
            </div>
            <Link href="/social-space">
              <Button variant="outline" className="w-full">
                {t('exploreMenu')}
              </Button>
            </Link>
          </Card>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              {t('ctaTitle')}
            </h2>
            <p className="text-white/90 text-lg">
              {t('ctaText')}
            </p>
          </div>
          <div className="md:w-1/3 text-right">
            <Link href="/rooms">
              <Button
                variant="secondary"
                size="lg"
                className="w-full md:w-auto shadow-xl"
              >
                {t('planStay')}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials (Simplified) */}
      <Section className="bg-background">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 font-serif">
            {t('testimonialsTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "The perfect mix of relaxation and great food. The vibe is amazing!",
              author: "Sarah D.",
              role: "Guesthouse Guest",
            },
            {
              text: "Best coffee in town. I love coming here to work and enjoy the view.",
              author: "Michael R.",
              role: "Regular Guest",
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
                  <h4 className="font-bold text-primary">
                    {review.author}
                  </h4>
                  <span className="text-sm text-gray-500">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
