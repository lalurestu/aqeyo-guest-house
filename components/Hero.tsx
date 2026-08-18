import { Button } from "./ui/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations('Hero');
    return (
        <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/img/img1.jpeg"
                    alt="Bale Bangket Ambience"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 tracking-tight drop-shadow-2xl" dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {t('subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/rooms">
                        <Button size="lg" className="w-full sm:w-auto">
                            {t('bookStay')}
                        </Button>
                    </Link>
                    <Link href="/social-space">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-foreground">
                            {t('exploreSocial')}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
