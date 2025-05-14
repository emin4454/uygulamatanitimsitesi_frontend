"use client";

/*
 * LandingPage component – single‑page layout adapted from shreethemes Appever demo.
 * Sections: Hero · Features · Customizable · Design · Screenshots · Stats · FAQs · Download · Reviews · Contact · Footer.
 * ————————————————————————————————————————————————————————————
 * 📦 External deps (install first):
 *   npm i lucide-react @headlessui/react framer-motion
 * 📁 Assets: copy images from demo into /public/images/*  (or keep remote URLs).
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Play, Download, ChevronDown } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="scroll-smooth">{/* id’ler navbar anchor’ları için */}
      <HeroSection />
      <FeaturesSection />
      <CustomizableSection />
      <DesignSection />
      <ScreenshotSection />
      <StatsSection />
      <FAQSection />
      <DownloadSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */
function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-28 bg-gradient-to-b from-red-50/40 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4">
        {/* text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Creative way to <span className="text-red-500">Showcase</span> your app
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Gain valuable insights into user behavior and drive data‑informed decision‑making with our revolutionary platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#download" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-red-500 text-white font-medium shadow hover:bg-red-600 transition-colors">
              <Download className="size-5 mr-2" /> Download Now
            </Link>
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-medium shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
              <Play className="size-5 mr-2" /> Watch Demo
            </button>
          </div>
        </div>
        {/* image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="https://shreethemes.in/appever/layouts/assets/images/app/app-showcase.png"
            alt="App Showcase"
            width={450}
            height={600}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Features                                                                    */
/* -------------------------------------------------------------------------- */
function FeaturesSection() {
  const cards = [
    {
      title: "Fully functional",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      icon: <Check className="size-5" />,
    },
    {
      title: "Secure Data",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      icon: <Check className="size-5" />,
    },
    {
      title: "Track Location",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      icon: <Check className="size-5" />,
    },
    {
      title: "Data Analyse",
      desc: "The phrasal sequence of the is now so that many campaign and benefit",
      icon: <Check className="size-5" />,
    },
  ];
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover Powerful Features</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12">
          Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow">
              <div className="size-12 flex items-center justify-center rounded-full bg-red-500/10 text-red-500 mb-4 mx-auto">
                {c.icon}
              </div>
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Customizable Section                                                        */
/* -------------------------------------------------------------------------- */
function CustomizableSection() {
  return (
    <section id="custom" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="w-full lg:w-1/2">
          <Image
            src="https://shreethemes.in/appever/layouts/assets/images/app/app-support.png"
            alt="Support"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-wider text-red-500">Customizable</span>
          <h2 className="text-3xl font-bold mb-4">Work Faster With <br /> Powerful Tools</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg">
            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Check className="size-4 mt-1 text-red-500" />
              <span>
                <strong>Enhance Security</strong>
                <br />There are many variations of passages of Lorem Ipsum available
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="size-4 mt-1 text-red-500" />
              <span>
                <strong>High Performance</strong>
                <br />There are many variations of passages of Lorem Ipsum available
              </span>
            </li>
          </ul>
          <Link href="#" className="inline-flex mt-8 items-center text-red-500 hover:underline font-medium">
            Learn More ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Elegant Design Section                                                      */
/* -------------------------------------------------------------------------- */
function DesignSection() {
  return (
    <section id="design" className="py-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4">
        <div className="w-full lg:w-1/2">
          <span className="text-sm font-semibold uppercase tracking-wider text-red-500">Elegant Design</span>
          <h2 className="text-3xl font-bold mb-4">
            Share your photos with <br /> friends easily
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg">
            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Digital Marketing Solutions for Tomorrow",
              "Our Talented & Experienced Marketing Agency",
              "Create your own skin to match your brand",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="size-4 mt-1 text-red-500" /> {item}
              </li>
            ))}
          </ul>
          <Link href="#" className="inline-flex items-center text-red-500 hover:underline font-medium">
            Learn More ↗
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="https://shreethemes.in/appever/layouts/assets/images/app/app-elegant.png"
            alt="Elegant Design"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Screenshot carousel placeholder                                             */
/* -------------------------------------------------------------------------- */
function ScreenshotSection() {
  const screenshots = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  return (
    <section id="screenshot" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple &amp; Beautiful Interface</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-10">
          Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
        </p>
        <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
          {screenshots.map((n) => (
            <Image
              key={n}
              src={`https://shreethemes.in/appever/layouts/assets/images/app/screenshot/${n}.jpg`}
              alt={`Screenshot ${n}`}
              width={200}
              height={360}
              className="rounded-xl shadow-lg shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Stats                                                                       */
/* -------------------------------------------------------------------------- */
function StatsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-red-500 mb-2">Total Users</h3>
        <p className="text-6xl font-extrabold">39,548</p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQs                                                                        */
/* -------------------------------------------------------------------------- */
function FAQSection() {
  const initial = 0;
  const [open, setOpen] = useState<number | null>(initial);
  const faqs = [
    {
      q: "How does it work ?",
      a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      q: "Do I need a designer to use Appever ?",
      a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      q: "What do I need to do to start selling ?",
      a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      q: "What happens when I receive an order ?",
      a: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-gradient-to-b from-white to-red-50/40 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Have Questions? Look Here</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-10">
          Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
        </p>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex justify-between items-center p-4 font-medium text-left"
              >
                {item.q}
                <ChevronDown className={`size-4 transition-transform ${open === idx ? "rotate-180" : ""}`} />
              </button>
              {open === idx && (
                <div className="p-4 pt-0 text-sm text-slate-600 dark:text-slate-300 border-t">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Download                                                                    */
/* -------------------------------------------------------------------------- */
function DownloadSection() {
  return (
    <section id="download" className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Install app now on your cellphones</h2>
        <Link
          href="#"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-colors"
        >
          <Download className="size-5 mr-2" /> Install Now
        </Link>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Reviews carousel placeholder                                                */
/* -------------------------------------------------------------------------- */
function ReviewsSection() {
  const reviews = [
    {
      text: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
      author: "Calvin Carlo",
      role: "Manager",
      img: "https://shreethemes.in/appever/layouts/assets/images/client/01.jpg",
    },
    {
      text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
      author: "Christa Smith",
      role: "Manager",
      img: "https://shreethemes.in/appever/layouts/assets/images/client/02.jpg",
    },
    {
      text: "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
      author: "Jemina Clone",
      role: "Manager",
      img: "https://shreethemes.in/appever/layouts/assets/images/client/04.jpg",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">10k+ Customers Trust Us</h2>
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-10">
          Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
        </p>
        <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar">
          {reviews.map((r) => (
            <figure key={r.author} className="flex-none w-80 p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
              <blockquote className="text-slate-600 dark:text-slate-300 mb-4 italic">“{r.text}”</blockquote>
              <figcaption className="flex items-center gap-4">
                <Image src={r.img} alt={r.author} width={48} height={48} className="rounded-full" />
                <div className="text-left">
                  <div className="font-medium">{r.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */
function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in touch!</h2>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-500 outline-none dark:bg-slate-800 dark:border-slate-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-500 outline-none dark:bg-slate-800 dark:border-slate-700"
          />
          <input
            type="text"
            placeholder="Your Question"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-500 outline-none dark:bg-slate-800 dark:border-slate-700"
          />
          <textarea
            rows={4}
            placeholder="Your Comment"
            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-red-500 outline-none dark:bg-slate-800 dark:border-slate-700"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                      */
/* -------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="py-12 bg-slate-100 dark:bg-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
      © {new Date().getFullYear()} <span className="font-semibold">Appever</span>. Built with ❤ by Shreethemes.
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Utility: hide-scrollbar class (tailwind plugin alternatif)                  */
/* -------------------------------------------------------------------------- */
// Add this CSS snippet to globals.css if scrollbars görünmesin:
// .hide-scrollbar::-webkit-scrollbar { display:none; }
// .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
