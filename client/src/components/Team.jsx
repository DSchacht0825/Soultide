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
  const member6Ref = useScrollAnimation('slide-in-right', 0.1);
  const member7Ref = useScrollAnimation('slide-in-left', 0.1);
  const member8Ref = useScrollAnimation('slide-in-right', 0.1);
  const member9Ref = useScrollAnimation('slide-in-left', 0.1);
  const member10Ref = useScrollAnimation('slide-in-right', 0.1);
  const member11Ref = useScrollAnimation('slide-in-left', 0.1);
  const member12Ref = useScrollAnimation('slide-in-right', 0.1);

  const truncateBio = (bio, maxLength = 200) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength) + '...';
  };
  const teamMembers = [
    {
      id: 0,
      name: "Dr. Trevor Olson",
      title: "Owner",
      altText: "Dr. Trevor Olson, PsyD - Licensed Psychologist and Owner of Soul Tide Therapy in Carlsbad",
      bio: `Dr. Trevor Olson is a licensed psychologist, clinical director, and entrepreneur dedicated to evolving how we approach mental health, leadership, and human development. As the founder of Soul Tide Psychotherapy, P.C., he couples deep clinical expertise with a pragmatic understanding of organizational leadership, supervising a growing clinical team across Southern California. Trevor's clinical career spans intensive long-term rehabilitation, specialized geriatric and skilled nursing consultation, and directing complex behavioral health initiatives for political refugees funded by the Department of Health and Human Services (HHS). He holds a Doctorate in Clinical Psychology (Psy.D.) and a Master's degree from Regent University, building on a fundamental training foundation in psychology from UC San Diego. Driven by the philosophy that therapeutic frameworks should adapt directly to the individual's unique environment and context, Trevor balances rigorous clinical science with a profoundly human approach to healing and professional growth.`,
      image: "/images/team/trevor.png",
      credentials: "PsyD, PSY28474"
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
      id: 11,
      name: "Lizzette Vescera",
      title: "Licensed Marriage and Family Therapist",
      altText: "Lizzette Vescera, LMFT - Licensed Marriage and Family Therapist in Carlsbad",
      bio: `My ideal clients are individuals, couples, and families who feel overwhelmed, stuck, disconnected, or exhausted from carrying so much on their own. Many struggle with anxiety, depression, trauma, grief, relationship issues, parenting stress, postpartum concerns, or difficult childhood experiences. Often they appear high-functioning on the outside but feel overwhelmed and lost inside. I provide a safe, supportive, nonjudgmental space to process experiences, build coping skills, improve communication, strengthen self-esteem, and create lasting change.

I help children, teens, adults, couples, and families with anxiety, depression, trauma, relationships, postpartum concerns, and life transitions. Using Evidence Based practices and practical coping skills, I provide a supportive space to heal, build confidence, improve relationships, and create lasting change.

If you've been carrying so much for so long, you do not have to do it alone. Therapy can help you feel heard, supported, and understood while learning healthier ways to cope, heal, and move forward. You deserve a space where you can slow down, feel safe, and begin creating lasting change.`,
      image: "/images/team/lizzette.jpeg",
      credentials: "LMFT 87605"
    },
    {
      id: 1,
      name: "Ashley Sellers",
      title: "Registered Associate Professional Clinical Counselor",
      altText: "Ashley Sellers, APCC - Registered Associate Professional Clinical Counselor in Carlsbad",
      bio: `A graduate of Pepperdine University, where she earned her Master's in Clinical Psychology with honors, Ashley brings both academic rigor and heart-driven purpose to the field of behavioral health. Her experience spans several years working within Skilled Nursing Facilities (SNFs), Assisted Living Communities (ALFs), and Home Health organizations, where she developed a deep understanding of the emotional, cognitive, and psychosocial challenges faced by older adults and their families. Ashley has worked in diverse care environments, including as a social worker and care coordinator, where she cultivated her passion for integrating mental-health support into medical and post-acute care systems. She also spent several years working with adolescents in residential treatment, helping youth navigate trauma, rebuild self-esteem, and foster emotional regulation. These experiences shaped Ashley's core belief that effective therapy is both compassionate and structured — a space where empathy, accountability, and growth coexist to help individuals rediscover resilience and balance. She believes healing is not simply the absence of illness, but the presence of connection, dignity, and purpose.`,
      image: "/images/team/ashley.jpg",
      credentials: "APCC (CA #20871)",
      supervisor: "Supervised by Jessica Anderson, LCSW 61295"
    },
    {
      id: 2,
      name: "Cameron Marrs",
      title: "Registered Associate Marriage and Family Therapist",
      altText: "Cameron Marrs, AMFT - Registered Associate Marriage and Family Therapist in Carlsbad",
      bio: `Hello, my name is Cameron. I'm a Registered Associate Marriage and Family Therapist with a Master's in Clinical Psychology from Pepperdine University. Before becoming an associate therapist, I gained valuable experience as a student therapist, providing both talk therapy and neurofeedback, which enriched my ability to approach treatment with versatility and depth, while under direct supervision. I believe healing takes root in relationships where we feel safe, seen, heard, and genuinely understood. While under supervision, my approach to therapy is warm, collaborative, and grounded in empathy. I'm here to walk alongside you as we navigate life's challenges together, whether you're feeling stuck, overwhelmed, disconnected, hoping to achieve a goal, or simply looking to better understand yourself. While under direct supervision, I've supported individuals ranging from children to adults with concerns such as anxiety, depression, grief, relationship issues, identity exploration, and life transitions. I tailor therapy to each person's unique needs and pace, always working to build a relationship based on trust, respect, and care. Sometimes, taking the first step toward therapy can feel overwhelming, but it can also be the beginning of meaningful change. If you are thinking about starting this journey, know that you are not alone. I am here to support you in moving toward greater clarity, connection, and healing whenever you are ready.`,
      image: "/images/team/cameron.jpg",
      credentials: "M.A., AMFT #155545",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 4,
      name: "Mayra E Quezada",
      title: (
        <>
          Registered Associate Marriage and Family Therapist
          <br />
          Registered Associate Professional Clinical Counselor
        </>
      ),
      altText: "Mayra E Quezada, AMFT, APCC - Bilingual Registered Associate Therapist in Carlsbad (English/Spanish)",
      bio: `Mayra is a Registered Associate Marriage and Family Therapist and Registered Associate Professional Clinical Counselor. She earned her Master's degree in Clinical Psychology from Pepperdine University and her Bachelor's degree in Political Science with a minor in Psychology from Boston University. Born and raised in Southern California, she is bilingual in English and Spanish. Her journey in the mental health field began while volunteering at a women's resource center, where she discovered her passion for working with individuals one-on-one. This experience inspired her to pursue a career as a therapist, with the goal of supporting individuals through life's transitions and challenges. While under direct supervision, Mayra utilizes a client-centered approach, focusing on creating a safe, supportive, and collaborative space that fosters healing, growth, and self-discovery. She is dedicated to tailoring her approach and developing individualized treatment plans that reflect each client's unique strengths, needs, and goals. She has experience and training in trauma-informed care and suicide prevention. Committed to ongoing professional development, Mayra continues to engage in advanced trainings and certifications to remain current with research-based therapeutic practices.`,
      image: "/images/team/myra.jpg",
      credentials: "AMFT 153788, APCC 18914",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 6,
      name: "Maren Gregg",
      title: "Registered Associate Professional Clinical Counselor",
      altText: "Maren Gregg, APCC - Registered Associate Professional Clinical Counselor in Carlsbad",
      bio: `Maren is a Registered Associate Professional Clinical Counselor (APCC) in California. She earned her Master's degree in Clinical Counseling from Alliant International University and her Bachelor's degree in Psychology from the University of Alabama. While under direct supervision, Maren believes therapy is most effective when it is a collaborative and thoughtful process, grounded in compassion and care. Maren supports adults navigating life transitions, emotional challenges, relationship concerns, and questions around identity or direction. While under direct supervision, her approach focuses on helping clients explore their experiences and reflect on their patterns while developing helpful strategies to navigate challenges. Throughout the process, she remains curious about each client's perspective and works to create a safe, supportive space for understanding and growth. While under direct supervision and during her student training, Maren provided individual therapy, facilitated mental health groups, and received training in neurofeedback, which informed her understanding of the mind-body connection. She has experience working in outpatient, residential, and inpatient settings, supporting adults with a range of mental health challenges. Maren is committed to providing trauma-informed, individualized care that honors each client's unique needs and values. She receives regular clinical supervision and engages in ongoing professional development to ensure her work remains ethical, evidence-based, and thoughtfully tailored.`,
      image: "/images/team/maren.jpg",
      credentials: "APCC #21533",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 7,
      name: "Blanca Iniguez Valdivia",
      title: "Registered Associate Clinical Social Worker",
      altText: "Blanca Iniguez Valdivia, ASW - Bilingual Registered Associate Clinical Social Worker in Carlsbad (English/Spanish)",
      bio: `Hello, my name is Blanca, I am a Registered Associate Clinical Social Worker with a Master's in Social Work from Boston University. While under direct supervision, my counseling style is warm, compassionate, and non-judgmental. I strive to meet you where you are, recognizing that you are the expert in your own life. My role is to support you, help you explore what may be getting in the way, and guide you toward living your fullest potential. While under direct supervision from my supervisor, I believe therapy should be a safe, supportive space where you can heal, process past experiences, and work toward your goals. I honor your pace and will work collaboratively with you to ensure you feel heard, respected, and understood. While under direct supervision, I tailor my approach based on your unique needs and goals. Whether you are looking to build coping skills for anxiety and depression or process past experiences and inner child work, we will find what works best for you. I have experience working with children, adolescents, and adults addressing trauma, anxiety, depression, intimate partner violence, sexual assault, suicidality, and other mental health concerns. While under direct supervision, I utilize evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Trauma-Focused CBT (TF-CBT), Dialectical Behavior Therapy (DBT), and Motivational Interviewing (MI). I also emphasize grounding and regulation skills to help calm the mind and body during times of distress. As a first-generation Latina, I also offer services in Spanish for clients who prefer it, while under direct supervision. Como Latina de primera generación, también ofrezco servicios en español para quienes lo prefieran.`,
      image: "/images/team/blanca.jpeg",
      credentials: "ASW 119060",
      supervisor: "Supervised by Dr. Trevor Olson, PsyD, Licensed Psychologist, PSY28474"
    },
    {
      id: 9,
      name: "Tria Ismay",
      title: (
        <>
          Registered Associate Professional Clinical Counselor
          <br />
          Registered Associate Marriage and Family Therapist
        </>
      ),
      altText: "Tria Ismay, APCC, AMFT - Registered Associate EMDR Therapist in Carlsbad",
      bio: `While under direct supervision, Tria is a compassionate EMDR registered associate therapist who brings both heart and resilience to her work. She earned her degree from Pepperdine University and was a dedicated student-athlete at Sacramento State, an experience that shaped her strong belief in perseverance, balance, and personal growth. While under direct supervision, Tria specializes in Eye Movement Desensitization and Reprocessing (EMDR), helping clients gently and safely reprocess past trauma. She is committed to creating a space where you feel secure, supported, and truly heard—because healing happens best when you don't have to face it alone. While under direct supervision, her approach is collaborative and grounded, meeting you where you are while helping you move toward where you want to be. Tria is passionate about helping her clients not just cope, but truly thrive—so they can step into fuller, more meaningful lives with confidence and clarity.`,
      image: "/images/team/tria.jpeg",
      credentials: "AMFT #153291, APCC #18796"
    },
    {
      id: 10,
      name: "Gity Nematollahi",
      title: "Registered Associate Marriage and Family Therapist",
      altText: "Gity Nematollahi, AMFT - Registered Associate Marriage and Family Therapist in Carlsbad",
      bio: `When you feel overwhelmed, stuck, or disconnected and are seeking more clarity, balance, and connection in your life, this is where our work can begin. If you are navigating anxiety, relationship challenges, life transitions, or the impact of past experiences, while under direct supervision, I offer a warm, compassionate space where you can slow down, feel seen, and better understand yourself. Under direct supervision, I use a holistic, trauma-informed, and mindful approach, I blend reflection with practical tools to help you reconnect with yourself and move forward in a meaningful way. Under direct supervision, I help individuals navigate anxiety, life transitions, relational challenges, and past experiences and trauma. With compassion, curiosity, and a nonjudgmental, safe space, we build insight and emotional awareness to help you move forward with clarity and balance. As a mother, immigrant, and lifelong learner, I know how life's changes and challenges can feel heavy. While under direct supervision, I provide a safe, compassionate, and nonjudgmental space where you can reflect, reconnect with your inner wisdom, and take steps forward in a way that feels authentic to you. I invite you to reach out and start your journey today.`,
      image: "/images/team/gity.jpeg",
      credentials: "AMFT 161652",
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
        {/* Owner - Dr. Trevor Olson */}
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
            const memberRefs = [member2Ref, member3Ref, member4Ref, member5Ref, member6Ref, member7Ref, member8Ref, member9Ref, member10Ref, member11Ref, member12Ref];
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
