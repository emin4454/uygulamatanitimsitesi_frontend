/*
 * HeroSection.tsx – centred more precisely (light theme)
 */
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 md:py-44 bg-slate-50/50 bg-[url('/assets/images/bg1.png')] bg-no-repeat bg-center bg-cover"
    >
      <div className="container relative">
        {/* Wrapper flex → centres children horizontally */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-20 mt-6">
          {/* Text column */}
          <div className="max-w-xl text-center space-y-6 order-2 md:order-1">
            <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider">
              App Showcase
            </h6>
            <h1 className="font-bold leading-tight text-[42px] lg:text-[54px]">
              Creative way to Showcase your app
            </h1>
            <p className="text-slate-500 text-lg">
              Gain valuable insights into user behavior and drive data‑informed decision‑making with our revolutionary platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="#">
                <Image
                  src="/assets/images/app.png"
                  alt="App Store"
                  width={140}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/images/play.png"
                  alt="Google Play"
                  width={140}
                  height={40}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Image column */}
          <div className="relative order-1 md:order-2 flex justify-center items-center">
            {/* Gradient circle centred behind phone */}
            <div className="absolute md:size-[500px] size-[400px] bg-gradient-to-tl from-red-500 via-red-500/70 to-red-500/20 rounded-full shadow-md shadow-red-500/10" />
            <Image
              src="/assets/images/phone/1.png"
              alt="Phone"
              width={320}
              height={640}
              className="w-80 rotate-12 relative z-10"
            />
            {/* Spinning square accent */}
            <div className="absolute -top-8 right-10 size-16 bg-red-500/20 rounded-lg animate-[spin_10s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
