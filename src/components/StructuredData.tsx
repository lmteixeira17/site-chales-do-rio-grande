export function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Chalés do Rio Grande",
        "description": "Aluguel de rancho de luxo para temporada na beira do Rio Grande. Piscina aquecida, área gourmet e lazer completo.",
        "url": "https://chalesdoriogrande.com.br",
        "telephone": "+5516981190106",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pontal do Rio Grande",
            "addressLocality": "Miguelópolis",
            "addressRegion": "SP",
            "postalCode": "",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-20.1114131",
            "longitude": "-47.9853469"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Piscina Aquecida", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Ar Condicionado", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Churrasqueira", "value": true }
        ],
        "image": [
            "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800"
        ],
        "priceRange": "$$$"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
