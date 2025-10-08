"use client";

import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Linkedin } from "lucide-react";
import mayurImage from '@/assets/leads/mayur.png'
import sanchitImage from '@/assets/leads/sanchit.png'
import shrajalImage from '@/assets/leads/shrajal.png'
import rajratnaImage from '@/assets/leads/rajratna.png'

// 1. Dynamically import all member images from the specified folder.
const memberImageModules = import.meta.glob('@/assets/membersimg/*.png', {
  eager: true, // Eagerly load the modules
  import: 'default', // Import the default export (the image path)
});

// 2. Create a clean map from a member ID to their image path.
const memberImages: { [key: string]: string } = {};
for (const path in memberImageModules) {
  // Get the filename (e.g., "5.png") from the full path
  const filename = path.split('/').pop();
  if (filename) {
    // Get the ID (e.g., "5") from the filename
    const id = filename.split('.')[0];
    memberImages[id] = memberImageModules[path] as string;
  }
}


export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Core Lead (no changes here)
  const coreLead = {
    id: 1,
    name: "Mayur Patil",
    role: "Core Lead",
    image: mayurImage,
    linkedin: "https://www.linkedin.com/in/mayur-patil-1451ba2b1/"
  }

  // Team Leads (no changes here)
  const teamLeads = [
    {
      id: 2,
      name: "Sanchit Kumbhar",
      role: "Technical Lead",
      image: sanchitImage,
      linkedin: "https://www.linkedin.com/in/sanchit-kumbhar-85b44a289/"
    },
    {
      id: 3,
      name: "Shrajal Upadhyay",
      role: "Management Lead",
      image: shrajalImage,
      linkedin: "https://www.linkedin.com/in/shrajal-upadhyay-8b5329248/"
    },
    {
      id: 4,
      name: "Rajratna Suralkar",
      role: "Media and Outreach Lead",
      image: rajratnaImage,
      linkedin: "https://www.linkedin.com/in/rajratna-b-suralkar-588727287/"
    }
  ]

  // 3. Update team members to use the dynamically imported images
  const technicalTeam = [
    {
      id: 5,
      name: "Aniket Yelameli",
      role: "Backend Developer",
      image: memberImages['23'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/aniket-yelameli/"
    },
    {
      id: 6,
      name: "Ayaan Khan",
      role: "Frontend Developer",
      image: memberImages['10'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/ayaankhan0717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 7,
      name: "Adnan Chherawala",
      role: "Web Developer",
      image: memberImages['12'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/adnanchherawala/"
    },
    {
      id: 8,
      name: "Bhargavi Adhav",
      role: "Data Analyst",
      image: memberImages['24'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/bhargavi-adhav-97645b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 15,
      name: "Srujan Pote",
      role: "Data Analyst",
      image: memberImages['3'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/srujanpote?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 16,
      name: "Ritika Mohite",
      role: "AR/VR Developer",
      image: memberImages['17'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/ritika-mohite-152931289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 17,
      name: "Shaunak Naik",
      role: "AI/ML Engineer",
      image: memberImages['20'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/shaunak-naik-684644375/"
    },
  ]

  const managementTeam = [
    {
      id: 9,
      name: "Aryan Raina",
      image: memberImages['6'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/aryan-raina-041570322/"
    },
    {
      id: 10,
      name: "Shruti Ghuge",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/shruti-ghuge-182977364/"
    },
    {
      id: 11,
      name: "Vaidehi Doke",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/vaidehi-doke-22062005s/"
    },
    {
      id: 18,
      name: "Piyush Sakhalkar",
      image: memberImages['22'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/piyush-sakhalkar-363931289/"
    },
    {
      id: 19,
      name: "Eshaan Razdan",
      image: memberImages['7'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/eshaan-razdan-625320320/"
    },
    {
      id: 20,
      name: "Sakshi Dube",
      image: memberImages['13'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/sakshi-dubey-b48477270/"
    },
    {
      id: 21,
      name: "Pavankumar Thakur",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/pavankumar-thakur-b52757384/"
    },
    {
      id: 22,
      name: "Rohan Doke",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/rohan-doke-9b9a8a359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 23,
      name: "Sneha Koul",
      image: memberImages['14'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/sneha-koul-192737375/"
    },
    {
      id: 24,
      name: "Sanika Kadam",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/sanika-kadam-01ab57356/"
    },
    {
      id: 25,
      name: "Tanvi Chougule",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/tanvi-chougule-501806330/"
    },
    {
      id: 30,
      name: "Shreya Kalekar",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/shreya-kalekar-077587384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]

  const mediaTeam = [
    {
      id: 12,
      name: "Pradnya Pol",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/pradnya-pol-218448289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 13,
      name: "Kushal Agrawal",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://in.linkedin.com/in/kushal-agrawal-258ba9385"
    },
    {
      id: 14,
      name: "Vedant Dandge",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/vedant-dandge-481058319"
    },
    {
      id: 26,
      name: "Shubham Sonawane",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://linkedin.com/in/nisha-patel"
    },
    {
      id: 27,
      name: "Atharva Guldagad",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/atharva-guldagad-b09277331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 28,
      name: "Pratiksha Rajput",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/pratiksha-rajput-5b3544340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 29,
      name: "Samarth Gavali",
      image: memberImages['user'], // Dynamically assigned image
      linkedin: "https://www.linkedin.com/in/samarth-gavali-91676b356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ]


  // Handle card click to open LinkedIn profile
  const handleCardClick = (linkedinUrl: string) => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#4285F4]/5 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#34A853]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 px-4 py-2 rounded-full border border-[#4285F4]/20 mb-6">
            <Users className="w-5 h-5 text-[#4285F4]" />
            <span className="text-sm font-medium text-foreground font-google-sans-mono">
              Our Team
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-google-sans mb-6">
            Meet the
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
              GDGoC-TAE Team
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-google-sans">
            Passionate students driving innovation and fostering
            technology education at Trinity Academy of
            Engineering.
          </p>
        </div>

        {/* 1. Core Lead Section - Positioned at the very top */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-google-sans">
            Core Lead
          </h3>
          <div className="flex justify-center">
            <div
              onClick={() => handleCardClick(coreLead.linkedin)}
              className="relative bg-card border border-border rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl max-w-sm cursor-pointer group"
            >
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted ring-4 ring-[#4285F4]/20">
                  <ImageWithFallback
                    src={coreLead.image}
                    alt={coreLead.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2 font-google-sans">
                {coreLead.name}
              </h4>
              <p className="text-muted-foreground font-google-sans">
                {coreLead.role}
              </p>

              {/* LinkedIn Icon - Top Right */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Team Leads Section - Below Core Lead */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center font-google-sans">
            Team Leads
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamLeads.map((lead) => (
              <div
                key={lead.id}
                onClick={() => handleCardClick(lead.linkedin)}
                className="relative bg-card border border-border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={lead.image}
                      alt={lead.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-bold text-lg text-foreground mb-1 font-google-sans">
                  {lead.name}
                </h4>
                <p className="text-muted-foreground font-google-sans text-sm">
                  {lead.role}
                </p>

                {/* LinkedIn Icon - Top Right */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <Linkedin className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. All Team Members Section - Combined and Organized by Department */}
        <div
          className={`mb-16 transition-all duration-1000 delay-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-12 text-center font-google-sans">
            Our Team Members
          </h3>

          {/* Technical Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#4285F4]">
              Technical Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {technicalTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#4285F4]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                      {member.role && <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>}
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Management Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#34A853]">
              Management Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {managementTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#34A853]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                       {member.role && <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>}
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>

          {/* Media and Outreach Team - Horizontal Scrollable */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-foreground mb-6 text-center font-google-sans text-[#EA4335]">
              Media and Outreach Team
            </h4>
            <div className="relative">
              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide px-4">
                {mediaTeam.map((member) => (
                  <div
                    key={member.id}
                    onClick={() =>
                      handleCardClick(member.linkedin)
                    }
                    className="relative bg-card/70 rounded-2xl border border-border p-6 text-center hover:bg-card hover:scale-105 transition-all duration-300 flex-shrink-0 w-[220px] shadow-lg cursor-pointer group"
                  >
                    {/* Circular Photo */}
                    <div className="mb-4">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted ring-2 ring-[#EA4335]/30">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h5 className="font-bold text-foreground font-google-sans text-lg leading-tight">
                        {member.name}
                      </h5>
                       {member.role && <p className="text-muted-foreground font-google-sans text-sm leading-relaxed">
                        {member.role}
                      </p>}
                    </div>

                    {/* LinkedIn Icon - Top Right */}
                    <div className="absolute top-3 right-3 w-7 h-7 bg-[#0077B5] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Linkedin className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicators */}
              <div className="absolute top-1/2 left-0 w-6 h-16 bg-gradient-to-r from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-6 h-16 bg-gradient-to-l from-background to-transparent pointer-events-none transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}