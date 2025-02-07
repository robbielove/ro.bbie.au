import Image from "next/image";
import ContentCard from "@/components/ContentCard";

export default function Home() {
  return (
    <div>
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image of Robbie Loversidge"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">Robbie Loversidge</h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Showcasing skills and experience in Web Development, AI, and more.
          </p>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="container mx-auto p-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore My Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Resume"
            description="Detailed overview of my professional experience and qualifications."
            href="/resume"
          />
          <ContentCard
            title="Web Development Services"
            description="Web Development Services"
            href="/services/web-development"
          />
          <ContentCard
            title="Magento Development Services"
            description="Magento Development Services"
            href="/services/magento-development"
          />
          <ContentCard
            title="Testimonials"
            description="What clients and colleagues are saying about my work."
            href="/testimonials"
          />
          <ContentCard
            title="Projects"
            description="Showcase of selected web development and AI projects."
            href="/showcase/projects"
          />
          <ContentCard
            title="Clients"
            description="List of clients and employers I have worked with."
            href="/showcase/clients"
          />
          <ContentCard
            title="Tech Stack"
            description="Technologies and skills I utilize in my work."
            href="/showcase/tech-stack"
          />
          <ContentCard
            title="Contact"
            description="Get in touch with me for inquiries and collaborations."
            href="/contact"
          />
        </div>
      </section>
    </div>
  );
}