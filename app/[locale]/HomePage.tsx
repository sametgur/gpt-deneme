"use client"

import MenuShowcase from "@/components/menu-showcase"
import Testimonials from "@/components/testimonials"
import LocationFeature from "@/components/location-feature"
import HeroSection from "@/components/hero-section"
import ReservationForm from "@/components/reservation-form"
import FeaturedDishes from "@/components/featured-dishes"
import AkyakaFeature from "@/components/akyaka-feature"
import AnimatedFoodGallery from "@/components/animated-food-gallery"
import type { Locale } from "@/lib/i18n"

interface HomePageProps {
  locale: Locale
}

export default function HomePage({ locale }: HomePageProps) {
  return (
    <main className="overflow-hidden">
      <HeroSection locale={locale} />
      <MenuShowcase locale={locale} />
      <FeaturedDishes locale={locale} />
      <AnimatedFoodGallery locale={locale} />
      <AkyakaFeature locale={locale} />
      <Testimonials locale={locale} />
      <LocationFeature locale={locale} />
      <ReservationForm locale={locale} />
    </main>
  )
}
