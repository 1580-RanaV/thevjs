import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Image from 'next/image';
import ExperienceEntry from './components/ExperienceEntry';

const Page = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col px-5 py-5">
      <Navbar />
      <main className="flex-grow px-4 sm:px-5 py-5 flex justify-center">
        <div className="container mx-auto max-w-3xl">
          <Welcome />
          
          <div className="mt-8 text-neutral-600 text-center">
          <p className="text-sm sm:text-base">
            Head to{' '}
            <Link href="/work" className="font-semibold underline">
              work
            </Link>{' '}
            to view all my works, or contact me at{' '}
            <Link href="/contact" className="font-semibold underline">
              contact
            </Link>{' '}
            for any queries or business.
          </p>
        </div>


          <section className="mt-16">
            <h2 className="font-semibold text-5xl md:text-5xl uppercase">
              Innovate. Push Creative Boundaries. Every single day.
            </h2>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
                Fueled by an unrelenting passion for architecture and design, I embrace every project as an opportunity to innovate and redefine possibilities. With a thirst for knowledge and a commitment to growth, I approach my work with zeal, continually honing my skills and challenging creative limits to leave a meaningful impact.
            </p>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
                As an architect based in Dubai with over 3 years of regional experience, I specialize in transforming concepts into compelling visual narratives, utilizing advanced design tools like SketchUp, D5, AutoCAD, Lumion, Enscape, VRay, and Revit. With a strong focus on the retail sector, I have successfully overseen more than 200 global projects, covering architecture, interiors, F&B, landscape, planning, and office spaces.
            </p>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
                My collaborations with prestigious brands such as Adidas, Aldar, Al Futtaim Group, BOSS, Cartier, HUGO, and Roberto Cavalli demonstrate my ability to deliver exceptional design solutions across various industries. Driven by an unwavering passion for innovation, I am constantly refining my skills and pushing creative boundaries, always striving to contribute to impactful and forward-thinking projects.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="font-semibold text-5xl md:text-5xl uppercase">
              Work. Recognition. Awards.
            </h2>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
              My work has consistently garnered recognition in the architectural community, with accolades such as the <span className='font-medium'>Commercial Project of the Year</span> and <span className='font-medium'>Retail Interior Design of the Year</span> highlighting my commitment to innovation and excellence. I was also honored at the <span className='font-medium'>Design Middle East - Architecture Leaders Awards 2023</span> and received special mentions at prestigious events like the <span className='font-medium'>NASA Louis I. Khan Trophy</span> and the <span className='font-medium'>HUDCO Trophy</span>. Additionally, Ive contributed to major architectural events, including serving as the Organizing Committee Head for <span className='font-medium'>Archcult</span> and holding leadership roles in <span className='font-medium'>NASA</span> events at NIT Trichy. These milestones reflect my dedication to pushing creative boundaries and shaping the future of architecture.
            </p>
            <Image
              src="/awards/award1.png"
              alt="Award for Commercial Project of the Year"
              className='mt-12'
              layout="responsive"
              width={100}
              height={100}
            />
          </section>

          <section className="mt-16">
            <h2 className="font-semibold text-5xl md:text-5xl uppercase">
              Evolution. Growth. Journey.
            </h2>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
            With extensive experience spanning various sectors including architecture, urban planning, interiors, and retail design, I have worked on over 350 projects, delivering innovative and impactful solutions. My expertise includes managing diverse teams, developing design concepts, and executing customer-centric spaces that enhance brand identity. Throughout my career, I have taken on key roles in design coordination and project management, ensuring seamless collaboration across disciplines and contributing to the successful realization of both small and large-scale projects.
            </p>
            <ExperienceEntry
              company="Pixel5 Design Studio"
              location="Dubai, UAE"
              position="Design Manager - Design Development"
            />
            <ExperienceEntry
              company="BuildNext Studios"
              location="Bangalore, India"
              position="Lead Architect"
            />
            <ExperienceEntry
              company="RR Associates"
              location="Hyderabad, India"
              position="Interior Designer"
            />
          </section>

          <section>
          <div className='mt-16 md:mt-16'>
            <span className='font-semibold text-5xl md:text-5xl uppercase'>WHATS AHEAD. VISION. FUTURE.</span>
            <p className='text-lg font-regular mt-4 md:mt-6 text-justify leading-relaxed'>
              As I continue to evolve in the field of architecture, my future goals are centered around expanding my expertise in creating innovative, sustainable, and functional spaces. I aim to work on projects that challenge traditional design norms and push the boundaries of what is possible, while staying true to the core principles of architecture. My focus will remain on designing spaces that are not only visually striking but also adaptable, efficient, and responsive to the needs of their users and the environment.
              <br></br><br></br>
              Looking ahead, I aspire to collaborate with visionary teams on large-scale, transformative projects that redefine the built environment. I am committed to continuously refining my design skills and deepening my understanding of architectures role in shaping communities and enhancing quality of life. Ultimately, I aim to contribute to the future of architecture by leading projects that inspire creativity, foster sustainability, and stand the test of time.
            </p>
          </div>
          </section>
        </div>
      </main>

      <div className='mt-24'>
      <Footer />
      </div>

    </div>
  );
};

export default Page;
