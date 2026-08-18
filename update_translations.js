const fs = require('fs');

const enJson = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const idJson = JSON.parse(fs.readFileSync('messages/id.json', 'utf8'));

const enRooms = {
    "heroTitle": "A Comfortable <br /> <span class='text-secondary'>Atmosphere Awaits</span>",
    "heroSubtitle": "Experience comfort, style, and serenity in our thoughtfully designed rooms.",
    
    "facilitiesOverline": "More Than Just A Stay",
    "facilitiesTitle": "Our Exclusive Facilities",
    "facilitiesSubtitle": "Enjoy limitless comfort with complete facilities specially designed to meet all your holiday needs with your family.",
    "fac1Title": "2 Master Bedrooms",
    "fac1Desc": "Spacious bedrooms equipped with King-size beds, air conditioning (AC), and exclusive en-suite bathrooms. Designed with warm lighting to give you the best quality of sleep. Standard capacity of 4 adults, can be added up to 6 people with extra beds.",
    "fac2Title": "Private Swimming Pool",
    "fac2Desc": "Release your fatigue by swimming or simply relaxing by our private pool. This area is surrounded by lush tropical trees, providing a fresh atmosphere and full privacy for you and your family.",
    "fac3Title": "Modern Kitchen & Dining Room",
    "fac3Desc": "No need to worry about food. We provide a modern kitchen fully equipped with a stove, refrigerator, water dispenser, and complete cookware. A natural wooden long dining table is also available for warm dinners together.",
    
    "amenitiesOverline": "Amenities",
    "amenitiesTitle": "Complete Amenities",
    "amenityWifi": "Free WiFi",
    "amenityAc": "Full AC",
    "amenityPool": "Private Pool",
    "amenityKitchen": "Full Kitchen",
    "amenityParking": "Free Parking",
    
    "priceOverline": "Regulations & Offers",
    "priceTitle": "Pricelist & Rental Packages",
    "priceSubtitle": "Choose the accommodation package that best suits your holiday needs. All accommodation packages (1-4) include breakfast.",
    "recommendation": "VIP Recommendation",
    "night": "/ night",
    "person": "/ person",
    
    "opt1Title": "1. Private Guest House",
    "opt1Feat1": "Swimming pool.",
    "opt1Feat2": "2 bedrooms & 1 room (separate gazebo).",
    "opt1Feat3": "Kitchen & Space area.",
    "opt1Feat4": "Includes Breakfast.",
    "opt1RegulTitle": "Private Regulation:",
    "opt1RegulDesc": "The entire area becomes private for you without any outside cafe guests.",
    "opt1Btn": "Book Private",
    
    "opt2Title": "2. Non-Private Guest House",
    "opt2Feat1": "Swimming pool.",
    "opt2Feat2": "2 bedrooms.",
    "opt2Feat3": "Includes Breakfast.",
    "opt2RegulTitle": "Public Regulation:",
    "opt2RegulDesc": "The outside area remains open for Social Space (Cafe) guests.",
    "opt2Btn": "Ask for Price",
    
    "opt3Title": "3. Gazebo Only",
    "opt3Feat1": "Includes Breakfast",
    "opt3Btn": "Choose Package",
    
    "opt4Title": "4. Room Only",
    "opt4Feat1": "Includes Breakfast",
    "opt4Btn": "Choose Package",
    
    "opt5Title": "5. Swimming Pool",
    "opt5Feat1": "Includes Meal & Drink",
    "opt5Btn": "Choose Package",
    
    "rulesOverline": "Important Information",
    "rulesTitle": "Policies & Stay Rules",
    "rulesSubtitle": "For mutual comfort, please pay attention to some of our property policies below.",
    "opsTitle": "Operational Hours & Booking",
    "booking": "Booking",
    "bookingVal": "Max. D-1 (One day before check-in)",
    "checkin": "Check-in",
    "checkinVal": "Starts from 13:00 WITA",
    "checkout": "Check-out",
    "checkoutVal": "Max. 11:00 WITA (next day)",
    "rulesPropTitle": "Property & Additional Rules",
    "rule1": "Additional cost for <strong>Extra Bed</strong> is <strong>IDR 50,000 / bed</strong>.",
    "rule2": "Smoking is prohibited inside the bedrooms (designated smoking areas available).",
    "rule3": "Pets are not allowed in the property area.",
    "rule4": "Guests must maintain quietness, especially after 22:00 WITA.",
    
    "whyTitle": "Why Stay at AQEYO?",
    "whySubtitle": "Your trust and comfort are our management's top priorities. We are committed to providing high-standard hospitality services with a touch of local friendliness.",
    "why1Title": "Guaranteed Cleanliness",
    "why1Desc": "Strict sanitation and room cleanliness standards. Bed linens are replaced fresh for every incoming guest, ensuring you sleep comfortably and hygienically.",
    "why2Title": "Warm Hospitality",
    "why2Desc": "Our team is always ready to assist you with all your needs during your stay, from local tourism recommendations to technical assistance inside the house.",
    "why3Title": "Privacy & Security",
    "why3Desc": "A safe and quiet environment. If you choose the Full Rental option, your family's privacy is perfectly maintained without any outside interference.",
    
    "ctaTitle": "Ready to Stay?",
    "ctaSubtitle": "Contact us now to check villa availability and get the best offers exclusively today.",
    "ctaBtn": "Book via WhatsApp"
};

const idRooms = {
    "heroTitle": "Susasana Yang Nyaman <br /> <span class='text-secondary'>Menanti Anda</span>",
    "heroSubtitle": "Rasakan kenyamanan, gaya, dan ketenangan di kamar kami yang dirancang dengan penuh perhatian.",
    
    "facilitiesOverline": "Lebih Dari Sekadar Penginapan",
    "facilitiesTitle": "Fasilitas Eksklusif Kami",
    "facilitiesSubtitle": "Nikmati kenyamanan tanpa batas dengan fasilitas lengkap yang dirancang khusus untuk memenuhi segala kebutuhan liburan Anda dan keluarga.",
    "fac1Title": "2 Kamar Tidur Utama",
    "fac1Desc": "Kamar tidur luas yang dilengkapi dengan kasur berukuran King-size, penyejuk udara (AC), dan kamar mandi dalam yang eksklusif. Didesain dengan pencahayaan hangat untuk memberikan Anda kualitas tidur terbaik. Kapasitas standar 4 orang dewasa, dapat ditambah hingga 6 orang dengan ekstra bed.",
    "fac2Title": "Kolam Renang Pribadi",
    "fac2Desc": "Lepaskan penat Anda dengan berenang atau sekadar bersantai di tepi kolam renang pribadi kami. Area ini dikelilingi oleh pepohonan tropis yang asri, memberikan suasana segar dan privasi penuh untuk Anda dan keluarga.",
    "fac3Title": "Dapur Modern & Ruang Makan",
    "fac3Desc": "Tidak perlu khawatir soal makanan. Kami menyediakan dapur modern yang sepenuhnya dilengkapi dengan kompor, kulkas, dispenser, dan peralatan masak lengkap. Tersedia juga meja makan panjang bergaya kayu natural untuk momen makan malam bersama yang hangat.",
    
    "amenitiesOverline": "Amenities",
    "amenitiesTitle": "Fasilitas Lengkap",
    "amenityWifi": "Free WiFi",
    "amenityAc": "Full AC",
    "amenityPool": "Private Pool",
    "amenityKitchen": "Dapur Lengkap",
    "amenityParking": "Parkir Gratis",
    
    "priceOverline": "Regulasi & Penawaran",
    "priceTitle": "Pricelist & Paket Sewa",
    "priceSubtitle": "Pilih paket penginapan yang paling sesuai dengan kebutuhan liburan Anda. Semua paket penginapan (1-4) sudah termasuk sarapan pagi (Breakfast).",
    "recommendation": "Rekomendasi VIP",
    "night": "/ malam",
    "person": "/ orang",
    
    "opt1Title": "1. Private Guest House",
    "opt1Feat1": "Swimming pool.",
    "opt1Feat2": "2 kamar tidur & 1 kamar (berugak terpisah).",
    "opt1Feat3": "Dapur (Kitchen) & Space area.",
    "opt1Feat4": "Termasuk Sarapan (Breakfast).",
    "opt1RegulTitle": "Regulasi Privat:",
    "opt1RegulDesc": "Seluruh area menjadi privat untuk Anda tanpa ada tamu kafe dari luar.",
    "opt1Btn": "Booking Private",
    
    "opt2Title": "2. Non-Private Guest House",
    "opt2Feat1": "Swimming pool.",
    "opt2Feat2": "2 kamar tidur.",
    "opt2Feat3": "Termasuk Sarapan (Breakfast).",
    "opt2RegulTitle": "Regulasi Publik:",
    "opt2RegulDesc": "Area luar tetap dibuka untuk tamu Social Space (Cafe).",
    "opt2Btn": "Tanya Harga",
    
    "opt3Title": "3. Berugak Only",
    "opt3Feat1": "Termasuk Sarapan (Breakfast)",
    "opt3Btn": "Pilih Paket",
    
    "opt4Title": "4. Room Only",
    "opt4Feat1": "Termasuk Sarapan (Breakfast)",
    "opt4Btn": "Pilih Paket",
    
    "opt5Title": "5. Swimming Pool",
    "opt5Feat1": "Termasuk Meal & Drink",
    "opt5Btn": "Pilih Paket",
    
    "rulesOverline": "Informasi Penting",
    "rulesTitle": "Kebijakan & Aturan Menginap",
    "rulesSubtitle": "Demi kenyamanan bersama, mohon perhatikan beberapa kebijakan properti kami berikut ini.",
    "opsTitle": "Waktu Operasional & Pemesanan",
    "booking": "Pemesanan",
    "bookingVal": "Maks. H-1 (Satu hari sebelum check-in)",
    "checkin": "Check-in",
    "checkinVal": "Mulai 13:00 WITA",
    "checkout": "Check-out",
    "checkoutVal": "Maks. 11:00 WITA (keesokan hari)",
    "rulesPropTitle": "Aturan Properti & Tambahan",
    "rule1": "Biaya penambahan <strong>Extra Bed</strong> adalah <strong>Rp 50.000 / bed</strong>.",
    "rule2": "Dilarang merokok di dalam kamar tidur (tersedia area khusus merokok).",
    "rule3": "Hewan peliharaan tidak diperkenankan masuk ke area properti.",
    "rule4": "Tamu wajib menjaga ketenangan, khususnya setelah pukul 22:00 WITA.",
    
    "whyTitle": "Mengapa Menginap di AQEYO?",
    "whySubtitle": "Kepercayaan dan kenyamanan Anda adalah prioritas utama manajemen kami. Kami berkomitmen memberikan layanan hospitality bertaraf tinggi dengan sentuhan keramahan lokal.",
    "why1Title": "Kebersihan Terjamin",
    "why1Desc": "Standar sanitasi dan kebersihan kamar yang ketat. Seprai diganti baru untuk setiap tamu yang datang, memastikan Anda tidur dengan nyaman dan higienis.",
    "why2Title": "Hospitality Hangat",
    "why2Desc": "Tim kami selalu siap sedia membantu segala kebutuhan Anda selama menginap, mulai dari rekomendasi wisata lokal hingga bantuan teknis di dalam rumah.",
    "why3Title": "Privasi & Keamanan",
    "why3Desc": "Lingkungan yang aman dan tenang. Jika Anda memilih opsi Sewa Penuh, privasi keluarga Anda terjaga sempurna tanpa ada campur tangan dari luar.",
    
    "ctaTitle": "Siap untuk Menginap?",
    "ctaSubtitle": "Hubungi kami sekarang untuk mengecek ketersediaan villa dan dapatkan penawaran terbaik khusus hari ini.",
    "ctaBtn": "Booking via WhatsApp"
};

enJson.Rooms = enRooms;
idJson.Rooms = idRooms;

fs.writeFileSync('messages/en.json', JSON.stringify(enJson, null, 4));
fs.writeFileSync('messages/id.json', JSON.stringify(idJson, null, 4));
console.log('Done!');
