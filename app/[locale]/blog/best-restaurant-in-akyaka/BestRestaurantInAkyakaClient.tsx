"use client"

import Link from "next/link"
import Image from "next/image"
import { SocialShare } from "@/components/blog/social-share"
import { CommentSection } from "@/components/blog/comment-section"
import { RelatedPosts } from "@/components/blog/related-posts"

export default function BestRestaurantInAkyakaClient() {
  const currentUrl = "https://v0-cennet-restaurant-remake.vercel.app/blog/best-restaurant-in-akyaka"

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Blog
        </Link>
      </div>

      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-6">Best Restaurant in Akyaka: Cennet Restaurant</h1>

        <div className="mb-6">
          <Image
            src="/outdoor-restaurant-sea-view.png"
            alt="Cennet Restaurant in Akyaka with sea view"
            width={900}
            height={500}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2">Cennet Restaurant's stunning waterfront location in Akyaka</p>
        </div>

        <div className="flex items-center mb-8">
          <div className="text-sm text-gray-500">
            <span>Published: May 1, 2023</span>
            <span className="mx-2">•</span>
            <span>
              Category:{" "}
              <Link href="/blog/categories/dining" className="text-primary hover:underline">
                Dining
              </Link>
            </span>
          </div>
        </div>

        <SocialShare url={currentUrl} title="Best Restaurant in Akyaka | Cennet Restaurant" />

        <h2 className="text-2xl font-semibold mt-8 mb-4">Discovering Akyaka's Culinary Gem</h2>
        <p>
          Nestled along the picturesque coastline of Akyaka, Cennet Restaurant stands as a beacon of culinary excellence
          in this charming Turkish town. For visitors and locals alike seeking the best restaurant in Akyaka, Cennet
          Restaurant offers an unparalleled dining experience that combines authentic Turkish flavors, fresh local
          ingredients, and breathtaking views of the Aegean Sea.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why Cennet Restaurant Is Considered the Best in Akyaka</h2>
        <p>
          What makes a restaurant truly exceptional? At Cennet Restaurant, we believe it's a combination of several key
          elements that come together to create a memorable dining experience:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1. Authentic Turkish Cuisine with a Modern Twist</h3>
        <p>
          Our menu celebrates the rich culinary heritage of Turkey while incorporating contemporary techniques and
          presentations. Each dish is crafted with care by our skilled chefs who are passionate about preserving
          traditional flavors while adding their own creative touch.
        </p>

        <div className="my-6">
          <Image
            src="/turkish-meze-variety.png"
            alt="Authentic Turkish meze selection at Cennet Restaurant"
            width={900}
            height={500}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2">Our signature meze selection featuring local specialties</p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. Prime Waterfront Location</h3>
        <p>
          One of the defining features that makes Cennet Restaurant the best restaurant in Akyaka is our stunning
          location. Situated directly on the waterfront, our restaurant offers panoramic views of Akyaka's azure waters
          and the surrounding mountains. Dining on our terrace as the sun sets over the Aegean creates an atmosphere
          that simply cannot be replicated.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. Fresh, Locally-Sourced Ingredients</h3>
        <p>
          We believe that exceptional cuisine begins with exceptional ingredients. Our chefs work closely with local
          farmers, fishermen, and producers to source the freshest seasonal ingredients. From the morning's catch to
          vegetables harvested the same day, our commitment to quality is evident in every bite.
        </p>

        <div className="my-6">
          <Image
            src="/fresh-fish-ice.png"
            alt="Fresh seafood selection at Cennet Restaurant"
            width={900}
            height={500}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2">Our daily selection of fresh seafood from local fishermen</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Signature Dishes You Must Try</h2>
        <p>
          When visiting the best restaurant in Akyaka, certain dishes simply cannot be missed. Here are some of our most
          celebrated creations that have earned us our reputation:
        </p>

        <ul className="list-disc pl-6 my-4">
          <li className="mb-2">
            <strong>Char-Grilled Octopus</strong> - Tender octopus marinated in olive oil, lemon, and herbs, then
            perfectly grilled over open flames
          </li>
          <li className="mb-2">
            <strong>Akyaka-Style Sea Bass</strong> - Locally caught sea bass prepared with a special blend of Aegean
            herbs and served with roasted vegetables
          </li>
          <li className="mb-2">
            <strong>Traditional Meze Platter</strong> - A curated selection of our finest cold and hot appetizers,
            showcasing the diverse flavors of Turkish cuisine
          </li>
          <li className="mb-2">
            <strong>Cennet Special Kebab</strong> - Our signature dish featuring tender lamb, marinated in a secret
            family recipe and cooked to perfection
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What Our Guests Say</h2>
        <p>
          Don't just take our word for it. Here's what visitors have to say about their experience at what many consider
          the best restaurant in Akyaka:
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          "We visited several restaurants during our stay in Akyaka, but Cennet Restaurant was by far the highlight of
          our culinary journey. The seafood was incredibly fresh, the service attentive, and the sunset view from their
          terrace was simply magical. A must-visit!" - Sarah T., London
        </blockquote>

        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
          "As someone who has traveled extensively throughout Turkey, I can confidently say that Cennet Restaurant
          offers some of the most authentic and delicious Turkish cuisine I've encountered. Their attention to
          traditional flavors while adding their own unique touch makes this truly the best restaurant in Akyaka." -
          Michael K., Berlin
        </blockquote>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Planning Your Visit</h2>
        <p>
          To experience the best restaurant in Akyaka for yourself, we recommend making a reservation, especially during
          the peak summer season. Our restaurant is open daily for lunch and dinner, with extended hours during the
          summer months.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-3">Reservation Information</h3>
          <p className="mb-2">
            <strong>Hours:</strong> 12:00 PM - 11:00 PM daily
          </p>
          <p className="mb-2">
            <strong>Address:</strong> Akyaka Waterfront, Muğla, Turkey
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +90 252 123 4567
          </p>
          <p className="mb-2">
            <strong>Online Reservations:</strong>
            <Link href="/iletisim" className="text-primary hover:underline ml-1">
              Make a reservation here
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p>
          Cennet Restaurant has earned its reputation as the best restaurant in Akyaka through a steadfast commitment to
          culinary excellence, exceptional service, and an unbeatable location. Whether you're a food enthusiast seeking
          authentic Turkish flavors or a traveler looking to create memorable dining experiences, we invite you to
          discover why Cennet Restaurant stands apart from the rest.
        </p>

        <p className="mt-6">
          We look forward to welcoming you soon and providing you with a dining experience that captures the essence of
          Akyaka's natural beauty and rich culinary traditions.
        </p>

        <div className="mt-8 mb-12">
          <Link
            href="/iletisim"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Reserve Your Table Today
          </Link>
        </div>
      </article>

      <CommentSection postId="best-restaurant-in-akyaka" />

      <div className="mt-12">
        <RelatedPosts currentPostId="best-restaurant-in-akyaka" category="dining" locale="en" />
      </div>
    </div>
  )
}
