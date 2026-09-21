import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useUserRole } from "@/hooks/useUserRole";
import { useLandingContent } from "@/hooks/useLandingContent";
import { LANDING_DEFAULTS } from "@/lib/landing-defaults";
import { Logo } from "@/components/Logo";
import { BENTO_PRESETS } from "@/components/landing/landing-data";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingHero } from "@/components/landing/LandingHero";
import { PopularEventsSection } from "@/components/landing/PopularEventsSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { LandingDevTools } from "@/components/landing/LandingDevTools";

const Landing = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { role, loading: roleLoading } = useUserRole();
  const { data: landing } = useLandingContent();

  useEffect(() => {
    if (authLoading || !user) return;
    if (roleLoading || !role) return;
    navigate(role === "organizer" ? "/dashboard/events" : "/dashboard/home", { replace: true });
  }, [user, authLoading, role, roleLoading, navigate]);

  const [navVisible, setNavVisible] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [titleWeight, setTitleWeight] = useState(700);
  const [confettiSize, setConfettiSize] = useState(2.5);
  const [confettiOpacity, setConfettiOpacity] = useState(0.8);
  const [confettiCount, setConfettiCount] = useState(8);
  const [confettiSpread, setConfettiSpread] = useState(1.0);
  const [bentoStyle, setBentoStyle] = useState(0);

  const hero = landing?.content.hero ?? LANDING_DEFAULTS.hero;
  const popular = landing?.content.popular_events ?? LANDING_DEFAULTS.popular_events;
  const features = landing?.content.features ?? LANDING_DEFAULTS.features;
  const testimonials = landing?.content.testimonials ?? LANDING_DEFAULTS.testimonials;
  const cta = landing?.content.cta ?? LANDING_DEFAULTS.cta;
  const currentPreset = BENTO_PRESETS[bentoStyle] ?? BENTO_PRESETS[0];
  const redirectingAuthenticatedUser = !authLoading && !!user && (roleLoading || !!role);

  useEffect(() => {
    const handleScroll = () => setNavVisible(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("h1,h2,h3,h4,h5,h6,.font-display").forEach((element) => {
      element.style.fontWeight = String(titleWeight);
    });
  }, [titleWeight]);

  if (redirectingAuthenticatedUser) return null;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <LandingNavbar visible={navVisible} />
      <LandingHero hero={hero} titleWeight={titleWeight} confettiSize={confettiSize} confettiOpacity={confettiOpacity} confettiCount={confettiCount} confettiSpread={confettiSpread} />
      <PopularEventsSection content={popular} titleWeight={titleWeight} />
      <FeaturesSection content={features} titleWeight={titleWeight} preset={currentPreset} />
      <TestimonialsSection content={testimonials} titleWeight={titleWeight} />
      <CtaSection content={cta} titleWeight={titleWeight} />

      <footer className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="md" />
          <p className="text-sm text-muted-foreground">© 2026 eventspark. All rights reserved.</p>
        </div>
      </footer>

      <LandingDevTools
        open={devOpen}
        setOpen={setDevOpen}
        titleWeight={titleWeight}
        setTitleWeight={setTitleWeight}
        bentoStyle={bentoStyle}
        setBentoStyle={setBentoStyle}
        confettiCount={confettiCount}
        setConfettiCount={setConfettiCount}
        confettiSize={confettiSize}
        setConfettiSize={setConfettiSize}
        confettiOpacity={confettiOpacity}
        setConfettiOpacity={setConfettiOpacity}
        confettiSpread={confettiSpread}
        setConfettiSpread={setConfettiSpread}
      />
    </div>
  );
};

export default Landing;
