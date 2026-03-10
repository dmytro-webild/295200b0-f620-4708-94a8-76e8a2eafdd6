"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumSizeLargeTitles"
      background="aurora"
      cardStyle="solid"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Bala"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Choose Us", id: "why-choose-us" },
            { name: "Success Stories", id: "success-stories" },
            { name: "Get Started", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Bala"
          description="Transform your career with 95/100 ATS score resumes. Expert resume writing and career services for professionals with 2-30+ years of experience."
          buttons={[
            { text: "Get Your Resume Crafted", href: "#contact" },
            { text: "View Services", href: "#services" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-office-with-tablet_1098-2077.jpg?_wi=1"
          imageAlt="Professional career growth and success"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Trusted by 150+ Professionals"
          description="Land your dream job with resumes optimized for applicant tracking systems. Our proven strategies have helped professionals from Google, Amazon, Microsoft, and other top MNCs secure their ideal positions."
          tag="Why Choose Bala"
          buttons={[
            { text: "Learn More", href: "#why-choose-us" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/smiling-woman-office-with-tablet_1098-2077.jpg?_wi=2"
          imageAlt="Career success and professional achievement"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Comprehensive Career Services"
          description="Everything you need to land your dream job, from resume crafting to direct recruiter connections. All services designed to maximize your visibility to top employers."
          tag="Services"
          features={[
            {
              id: 1,
              title: "ATS-Optimized Resume",              description: "Professionally crafted resumes tailored to your target role with 95/100 ATS scores guaranteed. Our resumes pass applicant tracking systems used by leading companies.",              imageSrc: "http://img.b2bpic.net/free-vector/attractive-online-curriculum-template_23-2147818274.jpg",              imageAlt: "ATS-optimized resume writing service"
            },
            {
              id: 2,
              title: "Cover Letter Design",              description: "Compelling cover letters that highlight your unique value and grab recruiter attention. Each letter is customized to position you as the ideal candidate.",              imageSrc: "http://img.b2bpic.net/free-vector/collection-photography-blog-element_23-2147559815.jpg?_wi=1",              imageAlt: "Professional cover letter design"
            },
            {
              id: 3,
              title: "LinkedIn Optimization",              description: "Complete profile makeover with keyword optimization, custom banner design, and profile headline optimization to attract recruiters and hiring managers.",              imageSrc: "http://img.b2bpic.net/free-vector/image-people-avatars-connecting-each-other_1048-3303.jpg",              imageAlt: "LinkedIn profile optimization service"
            },
            {
              id: 4,
              title: "Free Cheat Sheets",              description: "Exclusive access to recruiter emails, low-traffic job boards with less competition, LinkedIn tricks, referral strategies, and direct hiring manager contacts.",              imageSrc: "http://img.b2bpic.net/free-vector/collection-photography-blog-element_23-2147559815.jpg?_wi=2",              imageAlt: "Career cheat sheets and resources"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <MetricCardFourteen
          title="95/100 ATS Score Guarantee - Our resumes are tested against multiple ATS systems including Workday, Greenhouse, and Lever. We ensure maximum visibility to recruiters and hiring managers."
          tag="Our Promise"
          metrics={[
            { id: "1", value: "150+", description: "Resumes successfully transformed and optimized for ATS compatibility" },
            { id: "2", value: "95/100", description: "Average ATS score achieved across all professional resumes" },
            { id: "3", value: "2-30+", description: "Years of experience range we serve, from entry to executive level" },
            { id: "4", value: "100%", description: "Client satisfaction with proven career advancement results" }
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="mnc-advantage" data-section="mnc-advantage">
        <ProductCardThree
          title="The MNC Template Advantage"
          description="Data-driven resume templates from professionals who successfully secured positions at top MNCs like Google, Amazon, and Microsoft. Why settle for generic when you can use proven formats?"
          tag="Secret Weapon"
          products={[
            {
              id: "1",              name: "Google Senior Manager Template",              price: "Included",              imageSrc: "http://img.b2bpic.net/free-vector/set-four-vintage-quality-badges_23-2147551086.jpg?_wi=1",              imageAlt: "Google professional resume template"
            },
            {
              id: "2",              name: "Amazon PM Template",              price: "Included",              imageSrc: "http://img.b2bpic.net/free-vector/set-four-vintage-quality-badges_23-2147551086.jpg?_wi=2",              imageAlt: "Amazon PM resume template"
            },
            {
              id: "3",              name: "Microsoft Engineer Template",              price: "Included",              imageSrc: "http://img.b2bpic.net/free-vector/set-four-vintage-quality-badges_23-2147551086.jpg?_wi=3",              imageAlt: "Microsoft technical resume template"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="success-stories" data-section="success-stories">
        <TestimonialCardFive
          title="Success Stories"
          description="Join 150+ professionals who transformed their careers with our expert resume services and landed their dream jobs."
          tag="Client Results"
          testimonials={[
            {
              id: "1",              name: "Rajesh Kumar, Senior Software Engineer at Infosys",              date: "Date: Recent",              title: "Transformed my 8-year experience resume",              quote: "Bala transformed my 8-year experience resume into an ATS-optimized masterpiece. Got shortlisted for Google within 2 weeks! The attention to detail and industry-specific optimization made all the difference.",              tag: "Tech Professional",              avatarSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-young-man-black-jacket_23-2147955449.jpg",              avatarAlt: "Rajesh Kumar",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-young-man-black-jacket_23-2147955449.jpg",              imageAlt: "Rajesh Kumar success story"
            },
            {
              id: "2",              name: "Michael Chen, Product Manager at Amazon",              date: "Date: Recent",              title: "The MNC template strategy is genius",              quote: "The MNC template strategy is genius! My resume now mirrors successful Amazon PMs. Landed 3 interviews in top tech companies within a month. Highly recommended for anyone serious about their career.",              tag: "Product Manager",              avatarSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",              avatarAlt: "Michael Chen",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-looking-camera_23-2148112827.jpg",              imageAlt: "Michael Chen success story"
            },
            {
              id: "3",              name: "Priya Sharma, Senior Manager at TechCorp",              date: "Date: Recent",              title: "Best investment in my career",              quote: "Best investment in my career! The LinkedIn optimization alone opened doors I didn't expect. Combined with the resume overhaul, I went from 2 interviews in 6 months to getting multiple offers.",              tag: "Management",              avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-couch_23-2149915934.jpg",              avatarAlt: "Priya Sharma",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-couch_23-2149915934.jpg",              imageAlt: "Priya Sharma success story"
            },
            {
              id: "4",              name: "David Wilson, Senior Data Scientist",              date: "Date: Recent",              title: "Career game-changer",              quote: "The career cheat sheets and recruiter contacts provided invaluable insights. Got connected directly to hiring managers at multiple Fortune 500 companies. This service is a career game-changer.",              tag: "Data Science",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-elegant-man-with-one-fist-raised_23-2147574146.jpg",              avatarAlt: "David Wilson",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-elegant-man-with-one-fist-raised_23-2147574146.jpg",              imageAlt: "David Wilson success story"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your career? Book your free Google Meet consultation today and discover how we can help you land your dream job with a 95/100 ATS score resume."
          animationType="entrance-slide"
          buttons={[
            { text: "WhatsApp: +91 6302815567", href: "https://wa.me/916302815567" },
            { text: "Connect on LinkedIn", href: "https://www.linkedin.com/in/balasai-marisetti-937239201" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Bala's Career Services"
          copyrightText="© 2026 Bala's Career Services. All rights reserved. Helping professionals land their dream jobs since 2020."
          columns={[
            {
              title: "Services",              items: [
                { label: "ATS-Optimized Resumes", href: "#services" },
                { label: "Cover Letter Design", href: "#services" },
                { label: "LinkedIn Optimization", href: "#services" },
                { label: "Career Cheat Sheets", href: "#services" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "WhatsApp: +91 6302815567", href: "https://wa.me/916302815567" },
                { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/balasai-marisetti-937239201" },
                { label: "Book Consultation", href: "#contact" },
                { label: "Free Resources", href: "#services" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "About Us", href: "#about" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
