import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaCheckCircle, FaInfoCircle, FaStar, FaShieldAlt, FaHeart, FaWifi, FaTv, FaUtensils, FaParking, FaSnowflake, FaSwimmingPool } from "react-icons/fa";

export default function RoomsPage() {

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/img/img8.jpeg"
                        alt="Room Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">
                        Susasana Yang Nyaman Menanti Anda
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Rasakan kenyamanan, gaya, dan ketenangan di kamar kami yang dirancang dengan penuh perhatian.
                    </p>
                </div>
            </div>


            {/* House Facilities Section - Non-Card Elegant Layout */}
            <ScrollReveal>
                <Section className="bg-subtle/5">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Lebih Dari Sekadar Penginapan</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 font-serif">
                            Fasilitas Eksklusif Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Nikmati kenyamanan tanpa batas dengan fasilitas lengkap yang dirancang khusus untuk memenuhi segala kebutuhan liburan Anda dan keluarga.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 space-y-16 md:space-y-24">
                        {[
                            {
                                title: "2 Kamar Tidur Utama",
                                desc: "Kamar tidur luas yang dilengkapi dengan kasur berukuran King-size, penyejuk udara (AC), dan kamar mandi dalam yang eksklusif. Didesain dengan pencahayaan hangat untuk memberikan Anda kualitas tidur terbaik. Kapasitas standar 4 orang dewasa, dapat ditambah hingga 6 orang dengan ekstra bed.",
                                image: "/assets/img/img1.jpeg"
                            },
                            {
                                title: "Kolam Renang Pribadi",
                                desc: "Lepaskan penat Anda dengan berenang atau sekadar bersantai di tepi kolam renang pribadi kami. Area ini dikelilingi oleh pepohonan tropis yang asri, memberikan suasana segar dan privasi penuh untuk Anda dan keluarga.",
                                image: "/assets/img/img2.jpeg"
                            },
                            {
                                title: "Dapur Modern & Ruang Makan",
                                desc: "Tidak perlu khawatir soal makanan. Kami menyediakan dapur modern yang sepenuhnya dilengkapi dengan kompor, kulkas, dispenser, dan peralatan masak lengkap. Tersedia juga meja makan panjang bergaya kayu natural untuk momen makan malam bersama yang hangat.",
                                image: "/assets/img/img3.jpeg"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                                        {item.title}
                                    </h3>
                                    <div className="w-16 h-1 bg-secondary rounded-full"></div>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </ScrollReveal>

            {/* Fasilitas Lengkap (Amenities) Section */}
            <ScrollReveal delay={0.1}>
                <Section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Amenities</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                Fasilitas Lengkap
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 text-center">
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaWifi className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">Free WiFi</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaSnowflake className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">Full AC</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaSwimmingPool className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">Private Pool</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaUtensils className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">Dapur Lengkap</h4>
                            </div>
                            <div className="p-6 bg-subtle/5 rounded-2xl hover:shadow-md transition-shadow border border-subtle/10">
                                <FaParking className="text-4xl text-secondary mx-auto mb-4" />
                                <h4 className="font-bold text-primary text-sm md:text-base">Parkir Gratis</h4>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* Pricelist & Paket Sewa */}
            <ScrollReveal delay={0.2}>
                <Section className="bg-background border-t border-subtle/10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Regulasi & Penawaran</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                            Pricelist & Paket Sewa
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Pilih paket penginapan yang paling sesuai dengan kebutuhan liburan Anda. Semua paket penginapan (1-4) sudah termasuk sarapan pagi (Breakfast).
                        </p>
                    </div>

                    {/* Paket Utama (2 Kolom) */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 mb-8">
                        {/* Opsi 1 */}
                        <div className="bg-primary border-2 border-primary rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute top-0 right-0 bg-secondary px-6 py-2 rounded-bl-3xl shadow-md">
                                <span className="text-primary font-bold text-sm">Rekomendasi VIP</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white font-serif mb-2 mt-2">1. Private Guest House</h3>
                            <div className="text-secondary text-3xl font-bold mb-6">IDR 1.500.000 <span className="text-sm text-gray-300 font-normal">/ malam</span></div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">Swimming pool.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">2 kamar tidur & 1 kamar (berugak terpisah).</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">Dapur (Kitchen) & Space area.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-100">Termasuk Sarapan (Breakfast).</p>
                                </div>
                                <div className="flex items-start bg-secondary/10 p-5 rounded-2xl mt-6 border-l-4 border-secondary">
                                    <FaShieldAlt className="text-secondary mt-0.5 mr-3 flex-shrink-0 text-xl" />
                                    <p className="text-white font-medium text-sm leading-relaxed">
                                        <strong>Regulasi Privat:</strong> Seluruh area menjadi privat untuk Anda tanpa ada tamu kafe dari luar.
                                    </p>
                                </div>
                            </div>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20booking%20Private%20Guest%20House." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full text-lg py-6 bg-secondary text-primary hover:bg-white transition-colors">Booking Private</Button>
                            </a>
                        </div>

                        {/* Opsi 2 */}
                        <div className="bg-white border border-subtle/20 rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col">
                            <h3 className="text-2xl font-bold text-primary font-serif mb-2">2. Non-Private Guest House</h3>
                            <div className="text-primary text-3xl font-bold mb-6">IDR 1.200.000 <span className="text-sm text-gray-500 font-normal">/ malam</span></div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">Swimming pool.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">2 kamar tidur.</p>
                                </div>
                                <div className="flex items-start">
                                    <FaCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">Termasuk Sarapan (Breakfast).</p>
                                </div>
                                <div className="flex items-start bg-subtle/10 p-5 rounded-2xl mt-6 border-l-4 border-primary">
                                    <FaInfoCircle className="text-primary mt-0.5 mr-3 flex-shrink-0 text-xl" />
                                    <p className="text-primary font-medium text-sm leading-relaxed">
                                        <strong>Regulasi Publik:</strong> Area luar tetap dibuka untuk tamu Social Space (Cafe).
                                    </p>
                                </div>
                            </div>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20Non-Private%20Guest%20House." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full text-lg py-6" variant="outline">Tanya Harga</Button>
                            </a>
                        </div>
                    </div>

                    {/* Paket Alternatif (3 Kolom) */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                        {/* Opsi 3 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">3. Berugak Only</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 280.000</div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> Termasuk Sarapan (Breakfast)</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20paket%20Berugak%20Only." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">Pilih Paket</Button>
                            </a>
                        </div>

                        {/* Opsi 4 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">4. Room Only</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 600.000</div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> Termasuk Sarapan (Breakfast)</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20tertarik%20dengan%20paket%20Room%20Only." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">Pilih Paket</Button>
                            </a>
                        </div>

                        {/* Opsi 5 */}
                        <div className="bg-white border border-subtle/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="text-xl font-bold text-primary mb-2">5. Swimming Pool</h4>
                            <div className="text-primary text-2xl font-bold mb-4">IDR 50.000 <span className="text-xs text-gray-500 font-normal">/ orang</span></div>
                            <ul className="space-y-2 text-gray-600 text-sm mb-6">
                                <li className="flex items-center gap-2"><FaCheckCircle className="text-secondary" /> Termasuk Meal & Drink</li>
                            </ul>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20akses%20Swimming%20Pool." target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" variant="outline" size="sm">Pilih Paket</Button>
                            </a>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* House Rules Section */}
            <ScrollReveal delay={0.3}>
                <Section className="bg-background border-t border-subtle/10">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3 block">Informasi Penting</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                Kebijakan & Aturan Menginap
                            </h2>
                            <p className="text-gray-600">
                                Demi kenyamanan bersama, mohon perhatikan beberapa kebijakan properti kami berikut ini.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-subtle/5 p-8 rounded-3xl border border-subtle/10 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-4 border-b border-subtle/20 pb-2">Waktu Operasional & Pemesanan</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-sm md:text-base">
                                        <span className="text-gray-600">Pemesanan</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-right">Maks. H-1 (Satu hari sebelum check-in)</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm md:text-base">
                                        <span className="text-gray-600">Check-in</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Mulai 13:00 WITA</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm md:text-base">
                                        <span className="text-gray-600">Check-out</span>
                                        <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Maks. 11:00 WITA (keesokan hari)</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-subtle/5 p-8 rounded-3xl border border-subtle/10 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-primary mb-4 border-b border-subtle/20 pb-2">Aturan Properti & Tambahan</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">Biaya penambahan <strong>Extra Bed</strong> adalah <strong>Rp 50.000 / bed</strong>.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">Dilarang merokok di dalam kamar tidur (tersedia area khusus merokok).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">Hewan peliharaan tidak diperkenankan masuk ke area properti.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                                        <span className="leading-relaxed">Tamu wajib menjaga ketenangan, khususnya setelah pukul 22:00 WITA.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* Why Choose Us / Trust Management Section */}
            <ScrollReveal delay={0.4}>
                <Section className="bg-subtle/5">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
                                Mengapa Menginap di AQEYO?
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Kepercayaan dan kenyamanan Anda adalah prioritas utama manajemen kami. Kami berkomitmen memberikan layanan hospitality bertaraf tinggi dengan sentuhan keramahan lokal.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaStar className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">Kebersihan Terjamin</h4>
                                <p className="text-gray-600 leading-relaxed">Standar sanitasi dan kebersihan kamar yang ketat. Seprai diganti baru untuk setiap tamu yang datang, memastikan Anda tidur dengan nyaman dan higienis.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaHeart className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">Hospitality Hangat</h4>
                                <p className="text-gray-600 leading-relaxed">Tim kami selalu siap sedia membantu segala kebutuhan Anda selama menginap, mulai dari rekomendasi wisata lokal hingga bantuan teknis di dalam rumah.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl text-center shadow-md">
                                <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-6">
                                    <FaShieldAlt className="text-3xl text-secondary" />
                                </div>
                                <h4 className="text-xl font-bold text-primary mb-4 font-serif">Privasi & Keamanan</h4>
                                <p className="text-gray-600 leading-relaxed">Lingkungan yang aman dan tenang. Jika Anda memilih opsi Sewa Penuh, privasi keluarga Anda terjaga sempurna tanpa ada campur tangan dari luar.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>

            {/* CTA Section */}
            <ScrollReveal delay={0.5}>
                <Section className="pb-16 pt-8">
                    <div className="bg-primary text-white text-center rounded-3xl mx-4 lg:mx-auto max-w-5xl p-12 lg:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-20 -mt-20"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">Siap untuk Menginap?</h2>
                            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                                Hubungi kami sekarang untuk mengecek ketersediaan villa dan dapatkan penawaran terbaik khusus hari ini.
                            </p>
                            <a href="https://wa.me/6285253357789?text=Halo%20AQEYO,%20saya%20ingin%20bertanya%20tentang%20ketersediaan%20Private%20Villa." target="_blank" rel="noopener noreferrer">
                                <Button className="bg-secondary text-primary font-bold px-8 py-6 text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    Booking via WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </Section>
            </ScrollReveal>
        </div>
    );
}
