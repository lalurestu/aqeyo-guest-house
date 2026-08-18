import Hero from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaStar, FaQuoteLeft, FaLeaf, FaHome, FaCoffee, FaQuestionCircle } from "react-icons/fa";
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

      {/* USP / Value Proposition Section */}
      <Section className="bg-subtle/10 py-12 border-y border-subtle/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-2">Private & Tenang</h3>
              <p className="text-gray-600">Terletak di pedesaan asri Kotaraja, jauh dari kebisingan kota, menawarkan kedamaian seutuhnya.</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-subtle/20">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-2">Fasilitas Lengkap</h3>
              <p className="text-gray-600">Sewa seluruh properti yang mencakup private pool, dapur modern, dan kamar berstandar hotel.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                <FaCoffee />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-2">Social Space Eksklusif</h3>
              <p className="text-gray-600">Nikmati masakan lokal otentik dan kopi pilihan langsung di cafe estetik yang terintegrasi.</p>
            </div>
          </div>
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
          </Card>
        </div>
      </Section>



      {/* AQEYO Experience (Replacing Testimonials) */}
      <Section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/assets/img/img7.jpeg" alt="AQEYO Experience" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Lebih Dari Sekadar Tempat Singgah</span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif leading-tight">
                Rasakan Kehangatan Alam & Keramahan Lokal
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Setiap sudut di AQEYO House dirancang untuk membawa Anda sejenak menjauh dari hiruk-pikuk perkotaan. Desain estetik yang menyatu dengan lingkungan hijau pedesaan menciptakan suasana santai yang tidak terlupakan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Baik Anda mencari waktu berkualitas bersama keluarga di private villa, maupun sekadar menikmati sore sambil menyesap kopi otentik di social space kami—semua pengalaman ini dirajut dengan pelayanan yang tulus dan hangat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/rooms">
                  <Button className="px-8 py-3 rounded-full text-lg shadow-lg hover:-translate-y-1 transition-all">Lihat Villa</Button>
                </Link>
                <Link href="/social-space">
                  <Button variant="outline" className="px-8 py-3 rounded-full text-lg hover:-translate-y-1 transition-all border-primary text-primary hover:bg-primary/5">Lihat Menu Cafe</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Momen di AQEYO (Instagram Style Gallery) */}
      <Section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Galeri</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">Momen di AQEYO</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            Setiap sudut di AQEYO dirancang untuk menciptakan kenangan yang tak terlupakan. Mulai dari kebersamaan keluarga di ruang tamu yang hangat, canda tawa di tepi kolam renang pribadi, hingga senja yang tenang ditemani secangkir kopi otentik di social space kami.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Lihatlah bagaimana tamu-tamu kami menikmati momen terbaik mereka. Tangkap dan bagikan kenangan indah Anda bersama kami.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
            <Image src="/assets/img/img3.jpeg" alt="Gallery 1" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer md:mt-8">
            <Image src="/assets/img/img4.jpeg" alt="Gallery 2" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer">
            <Image src="/assets/img/img5.jpeg" alt="Gallery 3" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden group cursor-pointer md:mt-8">
            <Image src="/assets/img/img6.jpeg" alt="Gallery 4" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="https://www.instagram.com/aqeyohouse_/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-8 rounded-full border-primary text-primary hover:bg-primary/5">
              Lihat Lebih Banyak di Instagram
            </Button>
          </a>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-subtle/5 border-t border-subtle/10 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Informasi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">Pertanyaan Umum</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "Di mana lokasi persis AQEYO House & Social Space?", a: "Kami berlokasi di Desa Kotaraja, Sikur, Lombok Timur. Lingkungannya sangat asri dan tenang, berjarak sekitar 1 jam dari pusat kota Mataram." },
              { q: "Apakah perlu reservasi meja sebelum datang ke cafe?", a: "Untuk kunjungan biasa, Anda bisa langsung datang. Namun, untuk grup lebih dari 5 orang atau acara khusus, kami sangat menyarankan untuk reservasi terlebih dahulu via WhatsApp." },
              { q: "Bagaimana sistem pembayaran DP untuk sewa Villa?", a: "Kami mewajibkan pembayaran uang muka (DP) sebesar 50% untuk mengamankan tanggal pesanan Anda. Pelunasan dapat dilakukan saat proses check-in." },
              { q: "Apakah area parkir luas?", a: "Ya, kami memiliki area parkir pribadi yang cukup luas dan aman untuk mobil maupun motor tamu penginapan dan cafe." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-subtle/10 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <FaQuestionCircle className="text-secondary text-2xl md:text-3xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-primary text-lg md:text-xl mb-2">{faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
