import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const headingRef = useScrollAnimation('slide-in-left');
  const member1Ref = useScrollAnimation('slide-in-left', 0.1);
  const member2Ref = useScrollAnimation('slide-in-right', 0.1);
  const member3Ref = useScrollAnimation('slide-in-left', 0.1);
  const member4Ref = useScrollAnimation('slide-in-right', 0.1);
  const member5Ref = useScrollAnimation('slide-in-left', 0.1);

  const truncateBio = (bio, maxLength = 200) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength) + '...';
  };
  const teamMembers = [
    {
      id: 1,
      name: "Ashley Sellers",
      title: "Founder & Chief Financial Officer",
      altText: "Ashley Sellers, APCC - Licensed Associate Professional Clinical Counselor in Carlsbad",
      bio: `Dedicated to bridging compassion and clinical excellence, Ashley leads Soul Tide Therapy with a vision to integrate behavioral health into every stage of care.

Background & Education
A graduate of Pepperdine University, where she earned her Master's in Clinical Psychology with honors, Ashley brings both academic rigor and heart-driven purpose to the field of behavioral health. Her experience spans several years working within Skilled Nursing Facilities (SNFs), Assisted Living Communities (ALFs), and Home Health organizations, where she developed a deep understanding of the emotional, cognitive, and psychosocial challenges faced by older adults and their families.

Professional Experience & Focus
Before founding Soul Tide Therapy, Ashley worked in diverse care environments, including as a social worker and care coordinator, where she cultivated her passion for integrating mental-health support into medical and post-acute care systems. She also spent several years working with adolescents in residential treatment, helping youth navigate trauma, rebuild self-esteem, and foster emotional regulation.

These experiences shaped Ashley's core belief that effective therapy is both compassionate and structured — a space where empathy, accountability, and growth coexist to help individuals rediscover resilience and balance.

Soul Tide Leadership & Mission
Through Soul Tide Therapy, Ashley leads with a mission to bridge the gap between traditional psychotherapy and integrated healthcare systems. As Founder, Ashley has built Soul Tide Therapy around three distinct service lines designed to meet clients where they are in their journey of care:

• Facility-Based Behavioral Health — Delivering in-facility psychotherapy that enhances residents' quality of life and proactively reduces rehospitalization rates through early intervention and coordinated care.

• Outpatient Clinical Services — In partnership with Dr. Jeffrey Raunig in Carlsbad, providing individualized, evidence-based care for clients of all ages seeking emotional balance and personal growth.

• Telehealth Therapy — Offering accessible, HIPAA-compliant virtual care across California, ensuring clients receive consistent, compassionate support wherever they are.

Vision & Philosophy
Ashley's vision is to transform how behavioral health is viewed and delivered — making emotional wellness a cornerstone of every care plan. She believes healing is not simply the absence of illness, but the presence of connection, dignity, and purpose.

"Healing requires both empathy and structure — it's about being seen, supported, and understood."`,
      image: "/images/team/ashley.jpg",
      credentials: "APCC (CA #20871)",
      supervisor: "Supervised by Jessica Anderson, LCSW 61295"
    },
    {
      id: 2,
      name: "Cameron Marrs",
      title: "Associate Marriage and Family Therapist",
      altText: "Cameron Marrs, AMFT - Associate Marriage and Family Therapist in Carlsbad",
      bio: "Hello, my name is Cameron. I'm an Associate Marriage and Family Therapist with a Master's in Clinical Psychology from Pepperdine University. I'm passionate about creating a supportive, welcoming space where people feel safe to be themselves and explore whatever they may be going through. Before becoming a licensed associate therapist, I gained valuable experience as a student therapist, providing both talk therapy and neurofeedback, which enriched my ability to approach treatment with versatility and depth. I believe healing takes root in relationships where we feel safe, seen, heard, and genuinely understood. My approach to therapy is warm, collaborative, and grounded in empathy. I'm here to walk alongside you as we navigate life's challenges together, whether you're feeling stuck, overwhelmed, disconnected, hoping to achieve a goal, or simply looking to better understand yourself. In my clinical work, I've supported individuals ranging from children to adults with concerns such as anxiety, depression, grief, relationship issues, identity exploration, and life transitions. I tailor therapy to each person's unique needs and pace, always working to build a relationship based on trust, respect, and care. Sometimes, taking the first step toward therapy can feel overwhelming, but it can also be the beginning of meaningful change. If you are thinking about starting this journey, know that you are not alone. I am here to support you in moving toward greater clarity, connection, and healing whenever you are ready.",
      image: "/images/team/cameron.jpg",
      credentials: "M.A., AMFT #155545",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 3,
      name: "Jessica Anderson, LCSW",
      title: "Licensed Clinical Social Worker",
      altText: "Jessica Anderson, LCSW - Licensed Clinical Social Worker in Carlsbad and San Diego",
      bio: "Hello, I'm Jessica Anderson, a Licensed Clinical Social Worker with a Master's Degree in Child Development from Sarah Lawrence College and a Master's Degree in Clinical Social Work from New York University. Since 2004, I've had the privilege of working in many different settings—community-based organizations, hospitals supporting children and adults, and now private practice. These experiences have given me the opportunity to work with people from all walks of life, each facing unique challenges and strengths.\n\nIn my practice, I approach every individual with curiosity, empathy, and unconditional positive regard. I believe we all have an innate ability to heal, grow, and create change. Sometimes, though, life's stressors—whether loss, trauma, transitions, or biological factors—can make that feel out of reach. My role is to provide support and guidance as you navigate those moments, helping you reconnect with your resilience and sense of self.\n\nTherapy, to me, is a space for exploration and growth—a place to make sense of your experiences and learn new ways of being. I understand that being human can be complicated: we're constantly figuring out how to live in a world that's both beautiful and unpredictable, how to love deeply, face pain, and keep moving forward.\n\nI work with children, adults, individuals, and couples. My areas of focus include depression, anxiety, trauma, grief and loss, as well as supporting those in the medical field, military personnel, and individuals or couples navigating the perinatal and postpartum experience.",
      image: "/images/team/Jessica.jpg",
      credentials: "LCSW"
    },
    {
      id: 4,
      name: "Mayra E Quezada",
      title: (
        <>
          Dual Licensed
          <br />
          Associate Marriage and Family Therapist
        </>
      ),
      altText: "Mayra E Quezada, AMFT, APCC - Bilingual Therapist in Carlsbad (English/Spanish)",
      bio: "Mayra is an Associate Marriage and Family Therapist and Associate Professional Clinical Counselor. She earned her Master's degree in Clinical Psychology from Pepperdine University and her Bachelor's degree in Political Science with a minor in Psychology from Boston University. Born and raised in Southern California, she is bilingual in English and Spanish. Her journey in the mental health field began while volunteering at a women's resource center, where she discovered her passion for working with individuals one-on-one. This experience inspired her to pursue a career as a therapist, with the goal of supporting individuals through life's transitions and challenges. Mayra utilizes a client-centered approach, focusing on creating a safe, supportive, and collaborative space that fosters healing, growth, and self-discovery. She is dedicated to tailoring her approach and developing individualized treatment plans that reflect each client's unique strengths, needs, and goals. She has experience and training in trauma-informed care and suicide prevention. Committed to ongoing professional development, Mayra continues to engage in advanced trainings and certifications to remain current with research-based therapeutic practices.",
      image: "/images/team/myra.jpg",
      credentials: "AMFT 153788, APCC 18914",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 5,
      name: "Katrina Biggs",
      title: "Associate Professional Clinical Counselor",
      altText: "Katrina Biggs, M.A., APCC - Associate Professional Clinical Counselor in Carlsbad",
      bio: "Katrina Biggs is a skilled and compassionate clinician with a Master's degree in Clinical Psychology from Pepperdine University and a Bachelor's degree in Psychology with a minor in Applied Counseling Sciences from Arizona State University. Has experience in providing services of Neurofeedback and integrates this specialized approach to support clients in achieving greater emotional regulation and cognitive balance.\n\nKatrina's clinical experience includes working with individuals navigating trauma, crisis, suicidal ideation, personality disorders, grief, and recovery from domestic violence. She is committed to providing trauma-informed, evidence-based care that promotes safety, trust, and long-term healing.\n\nKnown for her open, honest, and collaborative therapeutic style, Katrina fosters an environment in which clients feel respected, empowered, and supported in their personal growth. She maintains an ongoing commitment to professional excellence through continuing education and the application of current best practices in the field of mental health.",
      image: "/images/team/Katrina.png",
      credentials: "M.A., APCC #20523",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-header">
          <h2 ref={headingRef}>Meet Our Team</h2>
          <p className="team-intro">
            Our compassionate team of licensed therapists is here to support you on your journey to wellness.
          </p>
        </div>
        {/* Founder - Ashley */}
        <div className="team-founder-section">
          <div key={teamMembers[0].id} ref={member1Ref} className="team-member team-founder">
            <div className="member-image-wrapper">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].altText || teamMembers[0].name}
                className="member-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%232c5f6f"/%3E%3Ctext x="50%25" y="50%25" font-size="60" fill="%23ffffff" text-anchor="middle" dy=".3em"%3E' + teamMembers[0].name.split(' ').map(n => n[0]).join('') + '%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="member-info">
              <h3>{teamMembers[0].name}</h3>
              <p className="member-title">{teamMembers[0].title}</p>
              <p className="member-credentials">{teamMembers[0].credentials}</p>
              {teamMembers[0].supervisor && (
                <p className="member-supervisor">{teamMembers[0].supervisor}</p>
              )}
              <p className="member-bio">{truncateBio(teamMembers[0].bio)}</p>
              <button
                className="btn-read-more"
                onClick={() => setSelectedMember(teamMembers[0])}
              >
                Read Full Bio
              </button>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="team-grid">
          {teamMembers.slice(1).map((member, index) => {
            const memberRefs = [member2Ref, member3Ref, member4Ref, member5Ref];
            return (
              <div key={member.id} ref={memberRefs[index]} className="team-member">
                <div className="member-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.altText || member.name}
                    className="member-image"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%232c5f6f"/%3E%3Ctext x="50%25" y="50%25" font-size="60" fill="%23ffffff" text-anchor="middle" dy=".3em"%3E' + member.name.split(' ').map(n => n[0]).join('') + '%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-credentials">{member.credentials}</p>
                  {member.supervisor && (
                    <p className="member-supervisor">{member.supervisor}</p>
                  )}
                  <p className="member-bio">{truncateBio(member.bio)}</p>
                  <button
                    className="btn-read-more"
                    onClick={() => setSelectedMember(member)}
                  >
                    Read Full Bio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="bio-modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>
              ×
            </button>
            <div className="modal-header">
              <div className="modal-image-wrapper">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.altText || selectedMember.name}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%232c5f6f"/%3E%3Ctext x="50%25" y="50%25" font-size="60" fill="%23ffffff" text-anchor="middle" dy=".3em"%3E' + selectedMember.name.split(' ').map(n => n[0]).join('') + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="modal-title-section">
                <h2>{selectedMember.name}</h2>
                <p className="modal-member-title">{selectedMember.title}</p>
                <p className="modal-credentials">{selectedMember.credentials}</p>
                {selectedMember.supervisor && (
                  <p className="modal-supervisor">{selectedMember.supervisor}</p>
                )}
              </div>
            </div>
            <div className="modal-body">
              <p className="modal-bio">{selectedMember.bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
