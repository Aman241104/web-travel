import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TourHero } from '@/components/tours/tour-hero';
import { TourSnapshot } from '@/components/tours/tour-snapshot';
import { TourNarrative } from '@/components/tours/tour-narrative';
import { TourLogistics } from '@/components/tours/tour-logistics';
import { TourPricing } from '@/components/tours/tour-pricing';

// Dummy Database
const TOURS_DB: Record<string, any> = {
    "majestic-turkey": {
        destination: "Turkey",
        title: "Where Two Continents Collide in Perfect Harmony",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2942&auto=format&fit=crop",
        duration: "8 Days, 7 Nights",
        bestTime: "April - October",
        cities: ["Istanbul", "Cappadocia", "Antalya"],

        snapshot: {
            flightsIncluded: false,
            visaType: "E-Visa / Sticker",
            groupType: "Private & Small Group",
            idealFor: "Couples & Families",
            kitchenCaravan: true,
        },

        narrativeBeats: [
            {
                dayLabel: "Day 1-2 • The Arrival Hook",
                title: "Imperial Istanbul",
                description: "Touchdown in the city spanning two continents. You bypass the chaos with a VIP airport transfer directly to your Bosphorus-view suite. We curate private access to the Hagia Sophia and culinary walks through the Spice Bazaar.",
                image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2800&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 3-4 • The Signature Highlight",
                title: "Skies of Cappadocia",
                description: "A seamless domestic flight brings you to the lunar landscapes of Anatolia. Wake up before dawn to float in a private hot air balloon over the fairy chimneys, followed by an exclusive breakfast inside an ancient cave.",
                image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2940&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 5-7 • The Deep Reset",
                title: "Riviera Relaxation",
                description: "We transition you to the turquoise coast. Board a traditional Gulet for a private Mediterranean sail. The pace slows entirely—focusing on coastal gastronomy, ancient ruins at your own speed, and pure luxury relaxation.",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop"
            }
        ],

        pricing: {
            startingFrom: "₹1,85,000",
            note: "Per person on a twin-sharing basis. Pricing drastically shifts based on exact travel dates, choice of 4-Star vs Boutique Luxury stays, and internal flight class. Our planners architect the exact breakdown."
        }
    },
    "maldives-escapes": {
        destination: "Maldives",
        title: "Your Private Overwater Villa Awaits",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
        duration: "5 Days, 4 Nights",
        bestTime: "November - April",
        cities: ["Male", "Private Atoll"],

        snapshot: {
            flightsIncluded: false,
            visaType: "Visa on Arrival",
            groupType: "Couples & Small Families",
            idealFor: "Honeymoon & Relaxation",
            kitchenCaravan: false,
        },

        narrativeBeats: [
            {
                dayLabel: "Day 1 • The Arrival Hook",
                title: "Seamless Seaplane Transfer",
                description: "Skip the public ferry queues. Step directly from international arrivals onto a private seaplane that drops you straight at the dock of your premium overwater villa.",
                image: "https://images.unsplash.com/photo-1544402851-cf72558668f4?q=80&w=2865&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 2-3 • The Signature Highlight",
                title: "Overwater Isolation",
                description: "We secure the highest-tier villas with direct ocean drops. Your days are spent with private infinity pools, curated spa credits negotiated directly with the resort, and guided reef snorkeling.",
                image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2865&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 4-5 • The Deep Reset",
                title: "Candlelit Farewells",
                description: "End your journey with a private beach dinner or an underwater restaurant reservation we've managed months in advance. You leave completely refreshed.",
                image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2865&auto=format&fit=crop"
            }
        ],

        pricing: {
            startingFrom: "₹85,000",
            note: "Per person for premium villa stays. Prices fluctuate heavily based on the exact resort chosen, meal plans (Half-Board vs All-Inclusive), and peak season surcharges."
        }
    },
    "corporate-bali": {
        destination: "Bali (Indonesia)",
        title: "Seamless Mass Logistics & Powerful Retreats",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2838&auto=format&fit=crop",
        duration: "4 Days, 3 Nights",
        bestTime: "April - October",
        cities: ["Ubud", "Nusa Dua"],

        snapshot: {
            flightsIncluded: true,
            visaType: "Visa on Arrival / E-VOA",
            groupType: "Corporate (50-200 pax)",
            idealFor: "MICE & Rewards Trips",
            kitchenCaravan: true,
        },

        narrativeBeats: [
            {
                dayLabel: "Day 1 • The Arrival Hook",
                title: "Synchronized Deployment",
                description: "We handle the mass flight arrivals. Your team bypasses standard baggage claim chaos through our dedicated local handlers, funneling everyone directly into private, air-conditioned luxury coaches.",
                image: "https://images.unsplash.com/photo-1518548419970-58e3b4a20bca?q=80&w=2838&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 2 • The Signature Highlight",
                title: "Strategic Impact",
                description: "The morning focuses on high-impact conference sessions in fully A/V-equipped halls. The afternoon shifts entirely to curated team-building in the Ubud jungles or beach clubs, moving dozens of people with military precision.",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2838&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 3-4 • The Deep Reset",
                title: "The Gala Finale",
                description: "A private buyout of a clifftop venue or a major beachfront. We organize dedicated catering, entertainment, and safety protocols for a flawless closing celebration.",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2838&auto=format&fit=crop"
            }
        ],

        pricing: {
            startingFrom: "Custom Quote",
            note: "Corporate pricing is heavily bespoke. We leverage our direct B2B relationships with airlines and massive hotel chains to secure wholesale pricing and bulk upgrades you cannot negotiate directly."
        }
    },
    "sri-lanka-heritage": {
        destination: "Sri Lanka",
        title: "Tea Plantations & Colonial Heritage",
        image: "https://images.unsplash.com/photo-1588214979116-2fd1ff9a59b6?q=80&w=2940&auto=format&fit=crop",
        duration: "7 Days, 6 Nights",
        bestTime: "December - April",
        cities: ["Kandy", "Nuwara Eliya", "Galle"],

        snapshot: {
            flightsIncluded: false,
            visaType: "ETA required",
            groupType: "Families & Small Groups",
            idealFor: "Culture & Wildlife",
            kitchenCaravan: true,
        },

        narrativeBeats: [
            {
                dayLabel: "Day 1-2 • The Arrival Hook",
                title: "The Cultural Triangle",
                description: "Your private chauffeur meets you at Colombo. Skip the city and head straight to Kandy. We arrange private guided access to the Temple of the Tooth and luxury stays in boutique colonial manors.",
                image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=2940&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 3-4 • The Signature Highlight",
                title: "The Hill Country Train",
                description: "We secure first-class tickets for the most scenic train ride in the world through the Nuwara Eliya tea plantations, while your driver safely transfers your heavy luggage ahead.",
                image: "https://images.unsplash.com/photo-1625736300986-ca7240c11d2e?q=80&w=2940&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 5-7 • The Deep Reset",
                title: "Yala & The Coast",
                description: "Transition from heritage to wildlife with a premium leopard safari in Yala National Park, ending the journey inside the historic walls of Galle Fort in a beautifully restored boutique hotel.",
                image: "https://images.unsplash.com/photo-1563200782-b7d14ca2ddcf?q=80&w=2940&auto=format&fit=crop"
            }
        ],

        pricing: {
            startingFrom: "₹55,000",
            note: "Per person on a twin-sharing basis. Pricing is highly dependent on hotel selection (standard 4-star vs elite boutique manors) and the inclusion of premium safari packages."
        }
    },
    "sri-lanka-romance": {
        destination: "Sri Lanka",
        title: "The Ultimate Romantic Escape",
        image: "https://images.unsplash.com/photo-1546708973-c152ab152f20?q=80&w=2940&auto=format&fit=crop",
        duration: "6 Days, 5 Nights",
        bestTime: "December - April",
        cities: ["Bentota", "Mirissa"],

        snapshot: {
            flightsIncluded: false,
            visaType: "ETA required",
            groupType: "Couples Only",
            idealFor: "Honeymoon",
            kitchenCaravan: false,
        },

        narrativeBeats: [
            {
                dayLabel: "Day 1-2 • The Arrival Hook",
                title: "Secluded Beachfronts",
                description: "Immediate transfer to the quiet, pristine beaches of Bentota. Your luxury villa comes equipped with high-end privacy, immediate beach access, and couples' spa credits we've curated.",
                image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2940&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 3-4 • The Signature Highlight",
                title: "Ocean Exploration",
                description: "Private whale-watching charters departing from Mirissa. No crowded tourist boats—just you, the marine life, and a dedicated crew ensuring a premium experience.",
                image: "https://images.unsplash.com/photo-1536696142171-8bc60f545464?q=80&w=2940&auto=format&fit=crop"
            },
            {
                dayLabel: "Day 5-6 • The Deep Reset",
                title: "Candlelit Exclusivity",
                description: "Your final evenings are spent entirely off the grid. We arrange private, chef-catered dinners directly on the sand or hidden away in lush tropical gardens.",
                image: "https://images.unsplash.com/photo-1516493976313-10e823b2dc95?q=80&w=2940&auto=format&fit=crop"
            }
        ],

        pricing: {
            startingFrom: "₹65,000",
            note: "Per person for premium stays. Honeymoon pricing often includes room upgrades, complimentary wine, and specialized dining experiences negotiated directly with the properties."
        }
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const tour = TOURS_DB[resolvedParams.slug];
    if (!tour) return { title: 'Tour Not Found' };
    return {
        title: `${tour.destination} Signature Tour | Universal Travel Planners`,
        description: tour.title,
    };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const tour = TOURS_DB[resolvedParams.slug];

    if (!tour) {
        notFound();
    }

    return (
        <main className="w-full relative bg-brand-bg">
            <TourHero
                destination={tour.destination}
                title={tour.title}
                image={tour.image}
                duration={tour.duration}
                bestTime={tour.bestTime}
                cities={tour.cities}
            />

            <TourSnapshot {...tour.snapshot} />

            <TourNarrative beats={tour.narrativeBeats} />

            <TourLogistics />

            <TourPricing
                destination={tour.destination}
                startingPrice={tour.pricing.startingFrom}
                pricingNote={tour.pricing.note}
            />
        </main>
    );
}
