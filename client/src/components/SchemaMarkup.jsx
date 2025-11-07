import { useEffect } from 'react';

const SchemaMarkup = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://soultidetherapy.com",
      "name": "Soul Tide Therapy",
      "image": "https://soultidetherapy.com/images/team/ashley.jpg",
      "url": "https://soultidetherapy.com",
      "telephone": "+1-858-230-5838",
      "email": "info@soultidetherapy.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3257 Camino De Los Coches",
        "addressLocality": "Carlsbad",
        "addressRegion": "CA",
        "postalCode": "92009",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "33.1581",
        "longitude": "-117.3506"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Carlsbad"
        },
        {
          "@type": "City",
          "name": "San Diego"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "medicalSpecialty": [
        "Mental Health",
        "Behavioral Health",
        "Psychotherapy",
        "Family Therapy",
        "Individual Counseling"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Therapy Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facility-Based Behavioral Health",
              "description": "Delivering in-facility psychotherapy that enhances residents' quality of life"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Outpatient Clinical Services",
              "description": "Individualized, evidence-based care for clients of all ages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Telehealth Therapy",
              "description": "HIPAA-compliant virtual care across California"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/soultidetherapy/",
        "https://www.linkedin.com/in/ashley-sellers-271656121/"
      ]
    };

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Soul Tide Therapy",
      "description": "Soul Tide Therapy is a premier mental health practice in Carlsbad and San Diego County, offering evidence-based psychotherapy with licensed clinical social workers (LCSW), licensed marriage and family therapists (LMFT), and supervised associates (APCC, AMFT). We specialize in treating anxiety disorders, depression, trauma and PTSD, relationship challenges, grief and loss, life transitions, and family dynamics. Our comprehensive services include in-person therapy at our Carlsbad office, HIPAA-compliant telehealth sessions throughout California, facility-based behavioral health programs, and outpatient clinical services for clients of all ages. We accept insurance and offer flexible scheduling including evening and weekend appointments.",
      "serviceType": [
        "Mental Health Therapy",
        "Behavioral Health Services",
        "Individual Counseling",
        "Couples Therapy",
        "Family Therapy",
        "Telehealth Therapy",
        "Anxiety Treatment",
        "Depression Counseling",
        "Trauma Therapy",
        "PTSD Treatment",
        "Grief Counseling",
        "Life Transition Support",
        "Relationship Counseling"
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Soul Tide Therapy"
      },
      "areaServed": [
        "Carlsbad, CA",
        "San Diego, CA",
        "San Diego County, CA",
        "California"
      ],
      "availableChannel": [
        {
          "@type": "ServiceChannel",
          "serviceType": "In-Person Therapy",
          "serviceLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3257 Camino De Los Coches",
              "addressLocality": "Carlsbad",
              "addressRegion": "CA",
              "postalCode": "92009"
            }
          }
        },
        {
          "@type": "ServiceChannel",
          "serviceType": "Telehealth Therapy",
          "availableLanguage": "English"
        }
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of therapy services do you offer in Carlsbad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Soul Tide Therapy offers facility-based behavioral health services, outpatient clinical services, and telehealth therapy across California. We provide individual therapy, couples counseling, and family therapy with licensed therapists."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer telehealth therapy services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer HIPAA-compliant telehealth therapy services across California, ensuring clients receive consistent, compassionate support wherever they are."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Soul Tide Therapy located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Soul Tide Therapy is located at 3257 Camino De Los Coches, Carlsbad, CA 92009. We serve clients throughout Carlsbad and San Diego County."
          }
        },
        {
          "@type": "Question",
          "name": "Are your therapists licensed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our therapists are licensed professionals including LCSWs, LMFTs, and supervised associates. Our team brings extensive experience in clinical psychology and behavioral health."
          }
        }
      ]
    };

    // Add schemas to head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(professionalServiceSchema);
    document.head.appendChild(script2);

    const script3 = document.createElement('script');
    script3.type = 'application/ld+json';
    script3.text = JSON.stringify(faqSchema);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return null;
};

export default SchemaMarkup;
