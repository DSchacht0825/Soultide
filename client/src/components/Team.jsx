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

  const truncateBio = (bio, maxLength = 200) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength) + '...';
  };
  const teamMembers = [
    {
      id: 1,
      name: "Ashley Sellers",
      title: "Founder & Chief Financial Officer",
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
      credentials: "APCC (CA #20871)"
    },
    {
      id: 2,
      name: "Cameron Marrs",
      title: "Associate Marriage and Family Therapist",
      bio: "Hello, my name is Cameron. I'm an Associate Marriage and Family Therapist with a Master's in Clinical Psychology from Pepperdine University. I'm passionate about creating a supportive, welcoming space where people feel safe to be themselves and explore whatever they may be going through. Before becoming a licensed associate therapist, I gained valuable experience as a student therapist, providing both talk therapy and neurofeedback, which enriched my ability to approach treatment with versatility and depth. I believe healing takes root in relationships where we feel safe, seen, heard, and genuinely understood. My approach to therapy is warm, collaborative, and grounded in empathy. I'm here to walk alongside you as we navigate life's challenges together, whether you're feeling stuck, overwhelmed, disconnected, hoping to achieve a goal, or simply looking to better understand yourself. In my clinical work, I've supported individuals ranging from children to adults with concerns such as anxiety, depression, grief, relationship issues, identity exploration, and life transitions. I tailor therapy to each person's unique needs and pace, always working to build a relationship based on trust, respect, and care. Sometimes, taking the first step toward therapy can feel overwhelming, but it can also be the beginning of meaningful change. If you are thinking about starting this journey, know that you are not alone. I am here to support you in moving toward greater clarity, connection, and healing whenever you are ready.",
      image: "/images/team/cameron.jpg",
      credentials: "M.A., AMFT #155545",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      title: "Psychologist & Family Therapist",
      bio: "Dr. Chen specializes in family systems therapy and adolescent mental health. She is dedicated to helping families strengthen their connections and navigate life transitions together.",
      image: "/images/team/emily-chen.jpg",
      credentials: "PsyD, Licensed Psychologist"
    },
    {
      id: 4,
      name: "Michael Thompson, MA",
      title: "Licensed Marriage & Family Therapist",
      bio: "Michael works with couples and individuals to build healthier relationships and overcome communication barriers. His approach combines attachment theory with practical, solution-focused strategies.",
      image: "/images/team/michael-thompson.jpg",
      credentials: "LMFT, MA"
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
        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const memberRefs = [member1Ref, member2Ref, member3Ref, member4Ref];
            return (
              <div key={member.id} ref={memberRefs[index]} className="team-member">
                <div className="member-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
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
                  alt={selectedMember.name}
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
