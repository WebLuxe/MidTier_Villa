/* ==========================================================================
   config.js: EVERYTHING ABOUT THE CLIENT LIVES IN THIS FILE.
   WebLuxe Villa template, Mid tier: a few villas or suites on one property.
   To set up a new client, change the values below and save (or use /admin/).

   - Text is written { en: "...", fr: "..." }. "languages" decides what visitors see.
   - Leave a value empty ("") or delete a list item to hide it. Set
     enabled: false on a section to remove it.
   - Prices are in rupees (currency.base) per villa per night. Visitors can
     switch to euros or dollars using the rates in "currency".
   - Photos: img("unsplash-id", alt) for Unsplash, or img("assets/photos/x.jpg", alt).
   ========================================================================== */
/* Demo only: booked nights counted from today, so the calendars always show some. For a client write the dates: ["2026-12-20", "2027-01-03"] */
function soon(inDays, nights) { const d = (n) => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10); return [d(inDays), d(inDays + nights)]; }
function img(id, alt) { return { src: id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`, alt: alt || '' }; }

window.SITE = {

  /* ---------- 1. The business ---------- */
  name: "WebLuxe Villa",
  legalName: "WebLuxe Villa Ltd",
  tagline: { en: "Three private pool villas in one tropical garden, three minutes from the beach at Belle Mare.", fr: "Trois villas privées avec piscine dans un même jardin tropical, à trois minutes de la plage de Belle Mare." },
  logo: { image: "", mark: "W", text: "WebLuxe Villa" },

  /* ---------- 2. Brand ---------- */
  colors: {
    primary: "#1E3F31",  // deep palm green: buttons, the "book direct" band
    accent:  "#C98A4B",  // terracotta gold: "Book now", highlights
    dark:    "#0F1E18",
    light:   "#F3EEE4",
  },
  fonts: { heading: "Cormorant Garamond", headingWeights: "500;600;700", headingFallback: "Georgia, serif", body: "Jost", bodyWeights: "400;500;600" },
  darkMode: true,
  languages: ["en", "fr"],   // English first (the default). ["en"] shows English only
  defaultLanguage: "en",
  timeZone: "Indian/Mauritius",

  currency: {
    base: "MUR",                           // prices below are in rupees
    rates: { EUR: 0.0196, USD: 0.0217 },   // 1 rupee in euros and dollars. Update now and then
    default: "MUR",
    secondary: "EUR",
  },

  /* ---------- 3. Contact ---------- */
  contact: {
    phone: "+230 5123 4567",
    whatsapp: "23051234567",
    whatsappMessage: { en: "Hello WebLuxe Villa, I would like to ask about a stay.", fr: "Bonjour WebLuxe Villa, je voudrais des informations pour un séjour." },
    email: "stay@webluxevilla.mu",
    responseTime: { en: "We reply within 3 hours, 8 am to 8 pm Mauritius time.", fr: "Nous répondons sous 3 heures, de 8 h à 20 h heure de Maurice." },
    street: "Coastal Road, Belle Mare",
    city: "Flacq",
    region: "",
    postalCode: "",
    country: { en: "Mauritius", fr: "Maurice" },
    countryCode: "MU",
    lat: -20.1946, lng: 57.7706,
    mapEmbed: "https://www.google.com/maps?q=Belle+Mare+Mauritius&z=14&output=embed",
    mapsLink: "",
    // Google Business profile (Mid pack: "+ Google Business"): the profile link and its "write a review" link
    googleBusiness: "https://www.google.com/maps/search/?api=1&query=Belle+Mare+Mauritius",
    googleReview: "https://www.google.com/maps/search/?api=1&query=Belle+Mare+Mauritius",
  },
  hours: { mon: "08:00-20:00", tue: "08:00-20:00", wed: "08:00-20:00", thu: "08:00-20:00", fri: "08:00-20:00", sat: "08:00-20:00", sun: "09:00-18:00" },
  social: { instagram: "https://instagram.com", facebook: "https://facebook.com", tripadvisor: "https://tripadvisor.com", google: "", tiktok: "", youtube: "" },

  /* ---------- 4. Google and link previews ---------- */
  seo: {
    title: { en: "WebLuxe Villa | Private pool villas in Belle Mare, Mauritius", fr: "WebLuxe Villa | Villas avec piscine privée à Belle Mare, Maurice" },
    description: { en: "Three private pool villas three minutes from Belle Mare beach. See live prices, book direct and pay no booking fees.", fr: "Trois villas avec piscine privée à trois minutes de la plage de Belle Mare. Prix en direct, réservation directe, sans frais." },
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=70",
    favicon: "assets/favicon.svg",
    schemaType: "LodgingBusiness",
    priceRange: "Rs 6,500 – Rs 19,500",
    siteUrl: "",   // the final address, e.g. "https://www.yourvilla.mu/". Also in sitemap.xml and robots.txt
  },

  /* ---------- 5. Booking requests ---------- */
  form: { endpoint: "" },
  booking: {
    sendVia: "both",
    depositPct: 30,
    defaultNights: 5,
    refPrefix: "WV",
    longStay: [{ nights: 7, pct: 10 }, { nights: 14, pct: 15 }],   // discounts on the nightly total. [] for none
  },

  /* ---------- 6. The villas ----------
     price: per night for the whole villa, in rupees. seasons: other prices between two dates ("MM-DD").
     capacity: most guests. minNights: shortest stay (a season can set its own).
     booked: nights already taken, crossed out in the calendars: [first night, day they leave]. */
  villas: [
    {
      id: "lagoon-villa", name: { en: "The Lagoon Villa", fr: "La Villa Lagon" }, badge: { en: "Sea view", fr: "Vue mer" },
      short: { en: "Our largest villa: three bedrooms, a 12-metre pool and the lagoon at the end of the lawn.", fr: "Notre plus grande villa : trois chambres, une piscine de 12 mètres et le lagon au bout de la pelouse." },
      price: 15500, capacity: 6, minNights: 3,
      booked: [soon(3, 8), soon(19, 6), soon(33, 10), soon(58, 7)],
      seasons: [{ name: { en: "Festive season", fr: "Fêtes de fin d'année" }, from: "12-15", to: "01-08", price: 19500, minNights: 7 }, { name: { en: "Winter offer", fr: "Offre d'hiver" }, from: "05-15", to: "08-31", price: 12500 }],
      images: [img("1582719508461-905c673771fd", "The Lagoon Villa's pool looking out to sea"), img("1721369483526-62f48a00b949", "Main bedroom with a view over the beach"), img("1776525433347-13ffc965601a", "Bright bathroom with a freestanding bathtub"), img("1759372945658-1e9f56e751bd", "The villa lit up at dusk")],
      features: [{ icon: "bed", label: { en: "3 bedrooms", fr: "3 chambres" } }, { icon: "users", label: { en: "Up to 6", fr: "Jusqu'à 6" } }, { icon: "pool", label: { en: "12 m pool", fr: "Piscine 12 m" } }, { icon: "wave", label: { en: "Sea view", fr: "Vue mer" } }, { icon: "ruler", label: { en: "240 m²", fr: "240 m²" } }, { icon: "coffee", label: { en: "Full kitchen", fr: "Cuisine équipée" } }],
      description: [{ en: "The first villa we built, closest to the water. A wide living room opens onto the pool deck, and all three bedrooms have their own bathroom.", fr: "La première villa que nous avons construite, la plus proche de l'eau. Un grand salon s'ouvre sur la terrasse de la piscine et les trois chambres ont chacune leur salle de bain." }],
      amenities: [{ en: "Three en-suite bedrooms", fr: "Trois chambres avec salle de bain" }, { en: "12 m private pool", fr: "Piscine privée de 12 m" }, { en: "Kitchen and barbecue", fr: "Cuisine et barbecue" }, { en: "Air-con and ceiling fans", fr: "Climatisation et ventilateurs" }, { en: "Kayaks and paddle boards", fr: "Kayaks et paddles" }, { en: "Daily housekeeping", fr: "Ménage quotidien" }],
    },
    {
      id: "frangipani-villa", name: { en: "Frangipani Villa", fr: "Villa Frangipanier" }, badge: { en: "Family favourite", fr: "Coup de cœur des familles" },
      short: { en: "Two bedrooms around a plunge pool, in the shade of old frangipani trees.", fr: "Deux chambres autour d'une piscine, à l'ombre de vieux frangipaniers." },
      price: 10500, capacity: 4, minNights: 3,
      booked: [soon(6, 5), soon(15, 4), soon(29, 12), soon(66, 6)],
      seasons: [{ name: { en: "Festive season", fr: "Fêtes de fin d'année" }, from: "12-15", to: "01-08", price: 13500, minNights: 7 }, { name: { en: "Winter offer", fr: "Offre d'hiver" }, from: "05-15", to: "08-31", price: 8500 }],
      images: [img("1596178067639-5c6e68aea6dc", "Frangipani Villa and its pool among the palms"), img("1611892440504-42a792e24d32", "Bedroom with a wooden bed"), img("1646974400439-8472d58bb19e", "Bathroom with a large bathtub"), img("1675657144361-98ae33e6b6f9", "Sun lounger by the pool")],
      features: [{ icon: "bed", label: { en: "2 bedrooms", fr: "2 chambres" } }, { icon: "users", label: { en: "Up to 4", fr: "Jusqu'à 4" } }, { icon: "pool", label: { en: "Plunge pool", fr: "Piscine" } }, { icon: "leaf", label: { en: "Garden", fr: "Jardin" } }, { icon: "ruler", label: { en: "150 m²", fr: "150 m²" } }, { icon: "heart", label: { en: "Child-friendly", fr: "Adaptée aux enfants" } }],
      description: [{ en: "Set back in the garden and fenced all round, it is the villa families ask for again. The kitchen opens onto a shaded terrace and the shallow end of the pool is just right for little ones.", fr: "En retrait dans le jardin et entièrement clôturée, c'est la villa que les familles redemandent. La cuisine s'ouvre sur une terrasse ombragée et le petit bain est idéal pour les plus jeunes." }],
      amenities: [{ en: "Two en-suite bedrooms", fr: "Deux chambres avec salle de bain" }, { en: "Fenced plunge pool", fr: "Piscine clôturée" }, { en: "Cot and high chair", fr: "Lit bébé et chaise haute" }, { en: "Full kitchen", fr: "Cuisine équipée" }, { en: "Washing machine", fr: "Lave-linge" }, { en: "Daily housekeeping", fr: "Ménage quotidien" }],
    },
    {
      id: "garden-suite", name: { en: "The Garden Suite", fr: "La Suite Jardin" }, badge: "",
      short: { en: "A one-bedroom hideaway for two, with an outdoor bath and its own pool deck.", fr: "Un refuge d'une chambre pour deux, avec bain extérieur et terrasse de piscine privée." },
      price: 6500, capacity: 2, minNights: 2,
      booked: [soon(1, 4), soon(10, 3), soon(24, 7), soon(45, 5)],
      seasons: [{ name: { en: "Festive season", fr: "Fêtes de fin d'année" }, from: "12-15", to: "01-08", price: 8900, minNights: 5 }],
      images: [img("1791535767615-2fb43a41e8a8", "Four-poster bed in the Garden Suite"), img("1646974400439-321c4a9240b9", "Suite lounge with tall windows"), img("1664917555352-f3f66e57ccc2", "Warm-toned bathroom with a bathtub"), img("1756115374220-c43b04be3a53", "Breakfast floating in the pool")],
      features: [{ icon: "bed", label: { en: "King bed", fr: "Lit king size" } }, { icon: "users", label: { en: "2 guests", fr: "2 personnes" } }, { icon: "pool", label: { en: "Shared pool", fr: "Piscine" } }, { icon: "heart", label: { en: "Honeymoons", fr: "Lunes de miel" } }],
      description: [{ en: "Tucked behind a wall of bougainvillea, the suite is made for honeymoons and slow mornings: a four-poster bed, an outdoor stone bath and breakfast on your own deck.", fr: "Cachée derrière un mur de bougainvilliers, la suite est faite pour les lunes de miel et les matins lents : lit à baldaquin, bain extérieur en pierre et petit-déjeuner sur votre terrasse." }],
      amenities: [{ en: "60 m² with private deck", fr: "60 m² avec terrasse privée" }, { en: "Outdoor stone bath", fr: "Bain extérieur en pierre" }, { en: "Kitchenette", fr: "Kitchenette" }, { en: "Nespresso machine", fr: "Machine Nespresso" }, { en: "Welcome bottle of rum", fr: "Bouteille de rhum de bienvenue" }],
    },
  ],

  /* Extras the guest can tick. per: "booking" (once), "night", "person", "personNight" */
  extras: [
    { id: "airport", icon: "car", price: 2800, per: "booking", label: { en: "Airport transfer", fr: "Transfert aéroport" }, text: { en: "Private car, both ways, 45 minutes", fr: "Voiture privée, aller-retour, 45 minutes" } },
    { id: "breakfast", icon: "coffee", price: 500, per: "personNight", label: { en: "Breakfast every morning", fr: "Petit-déjeuner chaque matin" }, text: { en: "Served on your terrace at the time you choose", fr: "Servi sur votre terrasse à l'heure choisie" } },
    { id: "chef", icon: "heart", price: 5500, per: "booking", label: { en: "Private chef dinner", fr: "Dîner avec chef privé" }, text: { en: "Mauritian menu cooked in your villa, for up to 6", fr: "Menu mauricien préparé dans votre villa, jusqu'à 6 personnes" } },
    { id: "catamaran", icon: "anchor", price: 2900, per: "person", label: { en: "Catamaran day", fr: "Journée en catamaran" }, text: { en: "Full day with lunch and snorkelling", fr: "Journée complète avec déjeuner et snorkeling" } },
    { id: "late", icon: "clock", price: 1500, per: "booking", label: { en: "Late check-out (4 pm)", fr: "Départ tardif (16 h)" }, text: "" },
  ],

  /* Policies, shown on the villas page */
  policies: {
    checkIn: "14:00", checkOut: "11:00",
    title: { en: "Good to know", fr: "Bon à savoir" },
    items: [
      { icon: "clock", title: { en: "Check-in and check-out", fr: "Arrivée et départ" }, text: { en: "Check-in from 2 pm, check-out by 11 am. Landing early? Leave your bags and use the pool.", fr: "Arrivée dès 14 h, départ avant 11 h. Vous atterrissez tôt ? Déposez vos bagages et profitez de la piscine." } },
      { icon: "calendar", title: { en: "Free cancellation", fr: "Annulation gratuite" }, text: { en: "Free up to 30 days before arrival. After that, the deposit is kept.", fr: "Gratuite jusqu'à 30 jours avant l'arrivée. Ensuite, l'acompte est conservé." } },
      { icon: "lock", title: { en: "Deposit", fr: "Acompte" }, text: { en: "30% by card link or bank transfer confirms your stay. The rest is paid on arrival.", fr: "30 % par lien de paiement ou virement confirment le séjour. Le solde est réglé à l'arrivée." } },
      { icon: "wave", title: { en: "Cyclone season", fr: "Saison cyclonique" }, text: { en: "January to March. If a warning stops you travelling, move your dates for free.", fr: "De janvier à mars. Si une alerte vous empêche de voyager, changez vos dates sans frais." } },
    ],
  },

  /* ---------- 7. Pages, section by section ---------- */
  sections: {
    hero: {
      eyebrow: { en: "Belle Mare · East coast of Mauritius", fr: "Belle Mare · Côte est de Maurice" },
      title: { en: "Three villas, one garden, your own pool", fr: "Trois villas, un jardin, votre piscine" },
      text: { en: "Private pool villas for two to six guests, three minutes' walk from the long white beach at Belle Mare.", fr: "Des villas avec piscine privée pour deux à six personnes, à trois minutes à pied de la longue plage blanche de Belle Mare." },
      images: [img("1582719508461-905c673771fd", "Pool overlooking the sea at sunset"), img("1596178067639-5c6e68aea6dc", "Villa pool among the palm trees"), img("1634972312739-d7237018e06a", "A beach in Mauritius with the mountains behind")],
    },
    whyDirect: {
      eyebrow: { en: "Book with us, not a website", fr: "Réservez chez nous, pas sur un site" },
      title: { en: "Same villa. Better price.", fr: "La même villa. Un meilleur prix." },
      text: { en: "Booking sites add their commission to your price. Book here and it stays with you.", fr: "Les sites de réservation ajoutent leur commission à votre prix. Réservez ici, elle reste chez vous." },
      items: [
        { icon: "tag", title: { en: "Best price, guaranteed", fr: "Meilleur prix garanti" }, text: { en: "Lower than any booking site.", fr: "Moins cher que tout site de réservation." } },
        { icon: "calendar", title: { en: "Free cancellation", fr: "Annulation gratuite" }, text: { en: "Up to 30 days before you arrive.", fr: "Jusqu'à 30 jours avant l'arrivée." } },
        { icon: "wa", title: { en: "Talk to the owners", fr: "Parlez aux propriétaires" }, text: { en: "On WhatsApp, before and during your stay.", fr: "Sur WhatsApp, avant et pendant le séjour." } },
        { icon: "check", title: { en: "No booking fees", fr: "Aucuns frais" }, text: { en: "The price you see is the price you pay.", fr: "Le prix affiché est le prix payé." } },
      ],
    },
    intro: {
      eyebrow: { en: "Welcome", fr: "Bienvenue" },
      title: { en: "A family estate on the east coast", fr: "Un domaine familial sur la côte est" },
      text: [
        { en: "Our garden holds three villas, each with its own pool and terrace, far enough apart that you will rarely hear your neighbours.", fr: "Notre jardin accueille trois villas, chacune avec sa piscine et sa terrasse, assez éloignées pour que vous entendiez rarement vos voisins." },
        { en: "We live five minutes away and look after every stay ourselves, from the welcome basket of fruit to the table we book you for sunset.", fr: "Nous habitons à cinq minutes et nous occupons nous-mêmes de chaque séjour, de la corbeille de fruits de bienvenue à la table que nous vous réservons pour le coucher du soleil." },
      ],
      signature: { en: "Anaïs & Kevin, your hosts", fr: "Anaïs et Kevin, vos hôtes" },
      images: [img("1793891546320-b031d3d7a040", "Doorway view of palms, pool and the ocean"), img("1687151621813-75a278d025cb", "Breakfast tray on the edge of the pool")],
    },
    villasIntro: { eyebrow: { en: "Stay with us", fr: "Séjourner chez nous" }, title: { en: "Choose your villa", fr: "Choisissez votre villa" }, lead: { en: "Every villa is rented whole, with its own pool, kitchen and daily housekeeping.", fr: "Chaque villa se loue en entier, avec sa piscine, sa cuisine et le ménage quotidien." } },
    amenities: {
      eyebrow: { en: "Included", fr: "Inclus" }, title: { en: "In every villa", fr: "Dans chaque villa" }, lead: "",
      items: [
        { icon: "pool", label: { en: "Private pool", fr: "Piscine privée" } },
        { icon: "snow", label: { en: "Air-con", fr: "Climatisation" } },
        { icon: "wifi", label: { en: "Fibre Wi-Fi", fr: "Wi-Fi fibre" } },
        { icon: "sparkle", label: { en: "Daily housekeeping", fr: "Ménage quotidien" } },
        { icon: "car", label: { en: "Free parking", fr: "Parking gratuit" } },
        { icon: "wave", label: { en: "Beach towels", fr: "Serviettes de plage" } },
      ],
    },
    reviews: {
      eyebrow: { en: "Guest reviews", fr: "Avis des hôtes" },
      title: { en: "Our guests come back", fr: "Nos hôtes reviennent" },
      summary: { rating: 4.9, best: 5, count: 148, source: "Google" },
      links: [{ name: "TripAdvisor", icon: "tripadvisor", url: "https://tripadvisor.com" }, { name: "Google", icon: "google", url: "https://www.google.com/maps/search/?api=1&query=Belle+Mare+Mauritius" }],
      items: [
        { name: "Laura & Tom", from: { en: "United Kingdom", fr: "Royaume-Uni" }, date: { en: "September 2026", fr: "septembre 2026" }, source: "Google", rating: 5, text: { en: "The Lagoon Villa was even nicer than the photos. Sunrise from the pool every morning, and the hosts' restaurant list was spot on.", fr: "La Villa Lagon était encore plus belle qu'en photo. Lever de soleil depuis la piscine chaque matin, et la liste de restaurants des hôtes était parfaite." } },
        { name: "Famille Dubois", from: { en: "France", fr: "France" }, date: { en: "August 2026", fr: "août 2026" }, source: "TripAdvisor", rating: 5, text: { en: "Frangipani Villa was perfect with three children. We booked direct and paid less than online.", fr: "La Villa Frangipanier était parfaite avec trois enfants. Réservé en direct, moins cher qu'en ligne." } },
        { name: "Anika S.", from: { en: "Germany", fr: "Allemagne" }, date: { en: "June 2026", fr: "juin 2026" }, source: "Google", rating: 5, text: { en: "Our honeymoon in the Garden Suite: the outdoor bath, breakfast on the deck, total peace.", fr: "Notre lune de miel dans la Suite Jardin : le bain extérieur, le petit-déjeuner sur la terrasse, le calme absolu." } },
        { name: "Ravi & Neha", from: { en: "India", fr: "Inde" }, date: { en: "April 2026", fr: "avril 2026" }, source: "Google", rating: 5, text: { en: "The private chef dinner was the highlight of our trip. Spotless villa, very kind hosts.", fr: "Le dîner avec chef privé a été le moment fort du voyage. Villa impeccable, hôtes très gentils." } },
        { name: "Marc P.", from: { en: "Réunion", fr: "La Réunion" }, date: { en: "March 2026", fr: "mars 2026" }, source: "TripAdvisor", rating: 4, text: { en: "Lovely quiet place. A car is useful to explore, but the beach is right there.", fr: "Endroit calme et charmant. Une voiture est utile pour explorer, mais la plage est juste là." } },
      ],
    },
    nearby: {
      eyebrow: { en: "Around the island", fr: "Autour de l'île" },
      title: { en: "Things to do", fr: "À faire" },
      lead: { en: "We book all of these for you, with partners we have known for years.", fr: "Nous réservons tout pour vous, avec des partenaires de longue date." },
      items: [
        { icon: "wave", distance: { en: "1 h 30", fr: "1 h 30" }, image: img("1513415563383-4e580ed27a46", "Le Morne and its lagoon from the air"), title: { en: "Le Morne from the sky", fr: "Le Morne vu du ciel" }, text: { en: "A helicopter flight over the famous underwater waterfall.", fr: "Un vol en hélicoptère au-dessus de la célèbre cascade sous-marine." } },
        { icon: "leaf", distance: { en: "1 h 30", fr: "1 h 30" }, image: img("1704759928716-7657e3ad7615", "Chamarel waterfall in the forest"), title: { en: "Chamarel and the south", fr: "Chamarel et le sud" }, text: { en: "Waterfalls, the seven-coloured earth and rum tasting, with a driver for the day.", fr: "Cascades, terre des sept couleurs et dégustation de rhum, avec chauffeur." } },
        { icon: "bag", distance: { en: "1 h", fr: "1 h" }, image: img("1673659541305-9d7f5d8ff876", "Port Louis harbour with the mountains behind"), title: { en: "Port Louis and its market", fr: "Port-Louis et son marché" }, text: { en: "The capital's market, the waterfront and street food.", fr: "Le marché de la capitale, le front de mer et la cuisine de rue." } },
        { icon: "sun", distance: { en: "10 min", fr: "10 min" }, image: img("1514480573427-1f96cbed6a27", "Golf course beside the sea"), title: { en: "Golf by the ocean", fr: "Golf face à l'océan" }, text: { en: "Two championship courses on the east coast, with tee times we can book.", fr: "Deux parcours de championnat sur la côte est, départs réservés par nos soins." } },
      ],
    },
    location: {
      eyebrow: { en: "Location", fr: "Emplacement" },
      title: { en: "On the sunny east coast", fr: "Sur la côte est ensoleillée" },
      text: { en: "Belle Mare has one of the longest beaches in Mauritius, a calm lagoon for swimming and the island's best sunrises.", fr: "Belle Mare possède l'une des plus longues plages de Maurice, un lagon calme pour se baigner et les plus beaux levers de soleil de l'île." },
      facts: [
        { icon: "plane", value: { en: "45 min", fr: "45 min" }, label: { en: "from the airport", fr: "de l'aéroport" } },
        { icon: "wave", value: { en: "3 min", fr: "3 min" }, label: { en: "walk to the beach", fr: "à pied de la plage" } },
        { icon: "car", value: { en: "Free", fr: "Gratuit" }, label: { en: "parking on site", fr: "parking sur place" } },
      ],
      howToGetHere: [
        { icon: "car", title: { en: "Airport transfer:", fr: "Transfert aéroport :" }, text: { en: "add it to your booking and our driver meets you at arrivals.", fr: "ajoutez-le à votre réservation : notre chauffeur vous attend aux arrivées." } },
        { icon: "compass", title: { en: "By car:", fr: "En voiture :" }, text: { en: "follow the Coastal Road to Belle Mare; we are 400 m past the public beach.", fr: "suivez la route côtière jusqu'à Belle Mare ; nous sommes 400 m après la plage publique." } },
      ],
    },
    faq: {
      eyebrow: { en: "Before you come", fr: "Avant de venir" }, title: { en: "Questions, answered", fr: "Vos questions" },
      items: [
        { q: { en: "Is each villa private?", fr: "Chaque villa est-elle privée ?" }, a: { en: "Yes. Each villa is rented whole, with its own pool and terrace. Only the garden paths are shared.", fr: "Oui. Chaque villa se loue en entier, avec sa piscine et sa terrasse. Seules les allées du jardin sont partagées." } },
        { q: { en: "Do you have long-stay prices?", fr: "Avez-vous des tarifs long séjour ?" }, a: { en: "Yes: 10% off the nightly price for 7 nights or more, 15% for 14 nights or more. The booking page works it out for you.", fr: "Oui : -10 % sur le prix des nuits dès 7 nuits, -15 % dès 14 nuits. La page de réservation fait le calcul pour vous." } },
        { q: { en: "How do I pay the deposit?", fr: "Comment payer l'acompte ?" }, a: { en: "We send a secure card payment link or our bank details by email within three hours of your request.", fr: "Nous envoyons un lien de paiement sécurisé ou nos coordonnées bancaires par e-mail sous trois heures." } },
        { q: { en: "Is breakfast included?", fr: "Le petit-déjeuner est-il inclus ?" }, a: { en: "You can add it when you book or cook in your own kitchen.", fr: "Vous pouvez l'ajouter à la réservation ou cuisiner dans votre cuisine." } },
      ],
    },
    finalCta: {
      title: { en: "Your villa is waiting", fr: "Votre villa vous attend" },
      text: { en: "Book direct for our best price and a free welcome dinner on stays of 7 nights or more.", fr: "Réservez en direct pour notre meilleur prix et un dîner de bienvenue offert dès 7 nuits." },
      image: img("1580629844914-374f3b707fe5", "Palm trees against a golden sunset"),
    },
    gallery: {
      images: [img("1582719508461-905c673771fd", "The Lagoon Villa pool at sunset"), img("1793891546320-b031d3d7a040", "Doorway view of palms, pool and the ocean"), img("1611892440504-42a792e24d32", "Frangipani Villa bedroom"), img("1756115374220-c43b04be3a53", "Floating breakfast in the pool"), img("1634972312739-d7237018e06a", "A beach in Mauritius"), img("1791535767615-2fb43a41e8a8", "The Garden Suite"), img("1759372945658-1e9f56e751bd", "A villa at twilight"), img("1596178067639-5c6e68aea6dc", "Frangipani Villa and its pool"), img("1687151621813-75a278d025cb", "Breakfast by the pool"), img("1790276319385-67459b89a702", "View over the palm-lined beach"), img("1721369483526-62f48a00b949", "Lagoon Villa main bedroom"), img("1580629844914-374f3b707fe5", "Sunset through the palms")],
    },
    pageHeads: {
      villas: { title: { en: "The villas", fr: "Les villas" }, text: { en: "Three private pool villas, each with its own character and price table.", fr: "Trois villas avec piscine privée, chacune avec son caractère et ses tarifs." }, image: img("1596178067639-5c6e68aea6dc", "") },
      gallery: { title: { en: "Gallery", fr: "Galerie" }, text: { en: "The villas, the garden and the island.", fr: "Les villas, le jardin et l'île." }, image: img("1793891546320-b031d3d7a040", "") },
      contact: { title: { en: "Contact & location", fr: "Contact et accès" }, text: { en: "Questions before you book? We reply within three hours.", fr: "Une question avant de réserver ? Réponse sous trois heures." }, image: img("1634972312739-d7237018e06a", "") },
    },
  },

  credit: { name: "WebLuxe", url: "https://webluxe.github.io/WebLuxe/" },

  /* ---------- Admin panel (/admin/). Changes are saved to data/site.js in this GitHub repository ---------- */
  admin: { repo: "WebLuxe/MidTier_Villa", branch: "main" },   // for a client: their own copy of the repository
  inbox: { url: "" },   // the Google Sheet inbox: paste the web-app address from admin/inbox.gs (see README)

  /* ---------- 8. Demo mode (WebLuxe sales demos). Set enabled: false for a real client ---------- */
  demo: {
    enabled: true,
    note: { en: "Example website by WebLuxe. WebLuxe Villa is not a real business: the names, prices, photos, reviews and availability are all examples.", fr: "Site d'exemple par WebLuxe. WebLuxe Villa n'est pas une vraie entreprise : noms, prix, photos, avis et disponibilités sont des exemples." },
    studioWhatsapp: "",
    tiers: [
      { label: { en: "Essentials", fr: "Essentiel" }, url: "https://webluxe.github.io/LowTier_Villa/" },
      { label: { en: "Stays", fr: "Séjours" }, url: "https://webluxe.github.io/MidTier_Villa/", current: true },
      { label: { en: "Bookings", fr: "Réservations" }, url: "https://webluxe.github.io/HighTier_Villa/" },
    ],
  },

  /* ---------- 9. All the small words ---------- */
  text: {
    en: {
      // ----- words used on every WebLuxe template (menus, buttons, messages) -----
      home: "Home", skip: "Skip to content", menu: "Menu", switchLang: "Voir le site en français", toggleTheme: "Switch light or dark mode",
      explore: "Explore", footerNav: "Footer links", contactTitle: "Contact", hoursTitle: "Opening hours", rights: "All rights reserved.", websiteBy: "Website by",
      whatsappUs: "Chat on WhatsApp", phone: "Phone", email: "Email", address: "Address", chatNow: "Chat with us now",
      closed: "Closed", today: "today", tomorrow: "tomorrow", openUntil: "Open now, until {time}", closedOpens: "Closed now. Opens {day} at {time}",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      introSkip: "Skip", close: "Close", ok: "OK", prev: "Previous", next: "Next", slide: "Go to slide {n}", showMap: "Show the map", mapTitle: "Map showing our location",
      formSending: "Sending…", formSent: "Thank you. Your message has been sent and we will reply soon.", formError: "Sorry, the message could not be sent. Please call us on {phone}.",
      formMailto: "Your email app has opened with your message. Press send there to finish.", formDemoDone: "Demo: nothing was sent.",
      demoLabel: "About this demo", demoBadge: "Demo", demoNote: "Example website by WebLuxe. The business, prices and reviews are samples.",
      demoTitle: "This is a demo", demoWa: "On the real website, this opens WhatsApp with this message ready to send:", demoTel: "On the real website, this calls the business:",
      demoMail: "On the real website, this opens an email to the business.", demoForm: "On the real website, the business receives this:",
      demoStudio: "Get a site like this", demoStudioMsg: "Hello WebLuxe, I saw the {site} demo and would like a website like it.",
      reviewOnGoogle: "Review us on Google", seeOnGoogle: "See us on Google Maps", nfTitle: "This page has gone for a swim", nfText: "The address may have a typo, or the page has moved. Everything is still here on the home page.", nfHome: "Go to the home page",
      // ----- this template -----
      hoursTitle: "Reply hours",
      navVillas: "Villas", navGallery: "Gallery", navContact: "Contact", currency: "Change currency",
      bookNow: "Book now", from: "From", perNight: "per night", checkAvailability: "Check availability", seeVillas: "See the villas",
      checkIn: "Check-in", checkOut: "Check-out", guests: "Guests", guest: "guest", guestsLower: "guests", villa: "Villa", upTo: "up to {n}",
      ratingOf: "{n} out of 5 stars", basedOn: "from {n} reviews", seeUsOn: "See us on {site}", howToGetHere: "How to get here", directions: "Get directions",
      prices: "Prices", standardRate: "Standard rate", allOtherDates: "All other dates", minShort: "min. {n} nights", nNights: "{n} nights", seasonalRates: "seasonal rates",
      viewFull: "View full screen", inTheVilla: "In the villa", bookThis: "Book this villa", askQuestion: "Ask a question", waAsk: "Hello {name}, I have a question about {villa}:", policies: "Good to know",
      formTitle: "Send us a message", fName: "Full name", fEmail: "Email", fPhone: "Phone / WhatsApp", withCode: "(with country code)", fCountry: "Country",
      fMessageContact: "Your message", fSend: "Send message", formPrivacy: "We only use your details to reply to you.", formSubject: "New message from the {name} website",
      bookTitle: "Request your stay", bookLead: "Nothing is charged now: we confirm availability and the final price within three hours.",
      stepStay: "Your stay", stepExtras: "Extras", stepDetails: "Your details", less: "One less", more: "One more", free: "Free",
      per_booking: "once", per_night: "per night", per_person: "per guest", per_personNight: "per guest, per night",
      fMessage: "Anything we should know?", optional: "(optional)", messageHint: "Arrival time, children's ages, celebrations…",
      sendRequest: "Send booking request", confirmWa: "Confirm on WhatsApp", noPayNow: "No payment now. We confirm availability first.",
      yourStay: "Your stay", estTotal: "Estimated total", depositLine: "{pct}% deposit to confirm: {amount}", details: "Details",
      pickDates: "Choose your dates to see the price", outAfterIn: "Check-out must be after check-in.", minNights: "The minimum stay for these dates is {n} nights.", tooMany: "This villa sleeps up to {n} guests.",
      dates: "Dates", addDate: "Add date", availability: "Availability and prices", whatsappUs: "Chat on WhatsApp",
      calTitle: "Choose your dates", calPickIn: "Tap your check-in day", calPickOut: "Now tap your check-out day (min. {n} nights)", calFree: "Available", calBooked: "Booked",
      calClear: "Clear dates", calDone: "Done", calMin: "From this day the minimum stay is {n} nights.", calClash: "Some of those nights are already booked. Pick other dates.", calPriceNote: "Prices per night in {cur}",
      longStayLine: "Long-stay discount ({pct}%)", longStayShort: "{n}+ nights: {pct}% off", longStayTip: "Stay {n} nights or more and save {pct}%.",
      ref: "Reference {ref}", doneTitle: "Thank you, request received", doneSent: "We are checking the calendar now and will email you within three hours.", doneWa: "Press send in WhatsApp and we will confirm within three hours.",
      next1: "We confirm your dates and the final price.", next2: "You pay a {pct}% deposit by card or bank transfer.", next3: "We send directions and arrange your transfer.", backHome: "Back to the home page",
      waIntro: "Hello {name}, I would like to book:", waFollow: "Hello, about my booking request {ref}:", bookSubject: "New booking request from the {name} website",
      countries: ["Mauritius", "France", "Réunion", "United Kingdom", "Germany", "Italy", "Switzerland", "Belgium", "South Africa", "India", "United Arab Emirates", "United States", "Australia", "China", "Netherlands", "Austria", "Spain", "Seychelles", "Madagascar"],
    },
    fr: {
      // ----- mots utilisés sur tous les modèles WebLuxe (menus, boutons, messages) -----
      home: "Accueil", skip: "Aller au contenu", menu: "Menu", switchLang: "View the site in English", toggleTheme: "Passer en mode clair ou sombre",
      explore: "Explorer", footerNav: "Liens du pied de page", contactTitle: "Contact", hoursTitle: "Horaires", rights: "Tous droits réservés.", websiteBy: "Site web par",
      whatsappUs: "Écrire sur WhatsApp", phone: "Téléphone", email: "E-mail", address: "Adresse", chatNow: "Écrivez-nous maintenant",
      closed: "Fermé", today: "aujourd'hui", tomorrow: "demain", openUntil: "Ouvert, jusqu'à {time}", closedOpens: "Fermé. Ouvre {day} à {time}",
      days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      introSkip: "Passer", close: "Fermer", ok: "OK", prev: "Précédent", next: "Suivant", slide: "Aller à la diapositive {n}", showMap: "Afficher la carte", mapTitle: "Carte de notre adresse",
      formSending: "Envoi…", formSent: "Merci. Votre message a été envoyé et nous vous répondrons très vite.", formError: "Désolé, le message n'a pas pu être envoyé. Appelez-nous au {phone}.",
      formMailto: "Votre messagerie s'est ouverte avec votre message. Appuyez sur envoyer pour terminer.", formDemoDone: "Démo : rien n'a été envoyé.",
      demoLabel: "À propos de cette démo", demoBadge: "Démo", demoNote: "Exemple de site par WebLuxe. L'entreprise, les prix et les avis sont fictifs.",
      demoTitle: "Ceci est une démo", demoWa: "Sur le vrai site, ceci ouvre WhatsApp avec ce message prêt à envoyer :", demoTel: "Sur le vrai site, ceci appelle l'entreprise :",
      demoMail: "Sur le vrai site, ceci ouvre un e-mail vers l'entreprise.", demoForm: "Sur le vrai site, l'entreprise reçoit ceci :",
      demoStudio: "Je veux un site comme celui-ci", demoStudioMsg: "Bonjour WebLuxe, j'ai vu la démo {site} et je voudrais un site comme celui-ci.",
      reviewOnGoogle: "Laissez un avis Google", seeOnGoogle: "Voir sur Google Maps", nfTitle: "Cette page est partie se baigner", nfText: "L'adresse contient peut-être une faute, ou la page a changé de place. Tout est toujours sur la page d'accueil.", nfHome: "Aller à l'accueil",
      // ----- ce modèle -----
      hoursTitle: "Heures de réponse",
      navVillas: "Villas", navGallery: "Galerie", navContact: "Contact", currency: "Changer de devise",
      bookNow: "Réserver", from: "Dès", perNight: "par nuit", checkAvailability: "Voir les disponibilités", seeVillas: "Voir les villas",
      checkIn: "Arrivée", checkOut: "Départ", guests: "Personnes", guest: "personne", guestsLower: "personnes", villa: "Villa", upTo: "jusqu'à {n}",
      ratingOf: "{n} étoiles sur 5", basedOn: "sur {n} avis", seeUsOn: "Voir sur {site}", howToGetHere: "Comment venir", directions: "Itinéraire",
      prices: "Tarifs", standardRate: "Tarif normal", allOtherDates: "Toutes les autres dates", minShort: "min. {n} nuits", nNights: "{n} nuits", seasonalRates: "tarifs saisonniers",
      viewFull: "Voir en plein écran", inTheVilla: "Dans la villa", bookThis: "Réserver cette villa", askQuestion: "Poser une question", waAsk: "Bonjour {name}, j'ai une question au sujet de « {villa} » :", policies: "Bon à savoir",
      formTitle: "Écrivez-nous", fName: "Nom complet", fEmail: "E-mail", fPhone: "Téléphone / WhatsApp", withCode: "(avec l'indicatif)", fCountry: "Pays",
      fMessageContact: "Votre message", fSend: "Envoyer", formPrivacy: "Vos coordonnées servent uniquement à vous répondre.", formSubject: "Nouveau message depuis le site {name}",
      bookTitle: "Demande de séjour", bookLead: "Rien n'est débité : nous confirmons la disponibilité et le prix final sous trois heures.",
      stepStay: "Votre séjour", stepExtras: "Options", stepDetails: "Vos coordonnées", less: "Un de moins", more: "Un de plus", free: "Offert",
      per_booking: "une fois", per_night: "par nuit", per_person: "par personne", per_personNight: "par personne et par nuit",
      fMessage: "Quelque chose à nous dire ?", optional: "(facultatif)", messageHint: "Heure d'arrivée, âge des enfants, anniversaire…",
      sendRequest: "Envoyer la demande", confirmWa: "Confirmer sur WhatsApp", noPayNow: "Aucun paiement maintenant. Nous confirmons d'abord la disponibilité.",
      yourStay: "Votre séjour", estTotal: "Total estimé", depositLine: "Acompte de {pct} % pour confirmer : {amount}", details: "Détails",
      pickDates: "Choisissez vos dates pour voir le prix", outAfterIn: "Le départ doit suivre l'arrivée.", minNights: "Le séjour minimum à ces dates est de {n} nuits.", tooMany: "Cette villa accueille jusqu'à {n} personnes.",
      dates: "Dates", addDate: "Choisir", availability: "Disponibilités et tarifs", whatsappUs: "Écrire sur WhatsApp",
      calTitle: "Choisissez vos dates", calPickIn: "Touchez votre jour d'arrivée", calPickOut: "Touchez maintenant votre jour de départ (min. {n} nuits)", calFree: "Libre", calBooked: "Réservé",
      calClear: "Effacer", calDone: "Valider", calMin: "À partir de ce jour, le séjour minimum est de {n} nuits.", calClash: "Certaines de ces nuits sont déjà réservées. Choisissez d'autres dates.", calPriceNote: "Prix par nuit en {cur}",
      longStayLine: "Remise long séjour ({pct} %)", longStayShort: "{n} nuits et plus : -{pct} %", longStayTip: "Restez {n} nuits ou plus et économisez {pct} %.",
      ref: "Référence {ref}", doneTitle: "Merci, demande reçue", doneSent: "Nous vérifions le calendrier et vous écrivons sous trois heures.", doneWa: "Appuyez sur envoyer dans WhatsApp et nous confirmons sous trois heures.",
      next1: "Nous confirmons vos dates et le prix final.", next2: "Vous réglez un acompte de {pct} % par carte ou virement.", next3: "Nous envoyons l'itinéraire et organisons votre transfert.", backHome: "Retour à l'accueil",
      waIntro: "Bonjour {name}, je voudrais réserver :", waFollow: "Bonjour, au sujet de ma demande {ref} :", bookSubject: "Nouvelle demande de réservation depuis le site {name}",
      countries: ["Maurice", "France", "La Réunion", "Royaume-Uni", "Allemagne", "Italie", "Suisse", "Belgique", "Afrique du Sud", "Inde", "Émirats arabes unis", "États-Unis", "Australie", "Chine", "Pays-Bas", "Autriche", "Espagne", "Seychelles", "Madagascar"],
    },
  },
};
