/*
 * Features.tsx – dynamic 4‑card feature grid (light theme only)
 * Data is fetched from `/api/features` (expects an array of { id, title, desc, icon } ).
 * Icons use lucide‑react; API can return icon name string matching lucide icon.
 */
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import Card from "./FeatureCard";

/**
 * Fetch feature list (server‑side) and return first 4 items.
 */
async function getFeatures() {
  const res = await fetch("/api/features", { cache: "no-store" }); // adjust caching per needs
  if (!res.ok) throw new Error("Failed to fetch features");
  const data = (await res.json()) as FeatureItem[];
  return data.slice(0, 4);
}

export interface FeatureItem {
  id: string | number;
  title: string;
  desc: string;
  icon: string; // lucide icon name (e.g., "Maximize")
}

export default async function Features() {
  const features = await getFeatures();
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* heading */}
        <div className="grid grid-cols-1 text-center pb-6 max-w-3xl mx-auto">
          <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
            Features
          </h6>
          <h2 className="md:text-3xl text-2xl font-bold leading-normal mb-6">
            Discover Powerful Features
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
          </p>
        </div>

        {/* cards */}
        <Suspense
          fallback={
            <div className="flex justify-center py-10">
              <Loader2 className="animate-spin" />
            </div>
          }
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-6">
            {features.map((f, idx) => (
              <Card key={f.id ?? idx} item={f} variant={idx % 2 === 1} />
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

/*
 * FeatureCard component (client) – placed in same folder for brevity.
 * variant=true ⇒ shadow always, false ⇒ only on hover (alternating style)
 */
"use client";
import { createElement } from "react";
import * as Icons from "lucide-react";

function FeatureCard({ item, variant }: { item: FeatureItem; variant: boolean }) {
  const Icon = (Icons as any)[item.icon] ?? Icons.Maximize;
  return (
    <div
      className={
        variant
          ? "p-6 shadow-xl shadow-slate-100 transition duration-500 rounded-3xl"
          : "p-6 hover:shadow-xl hover:shadow-slate-100 transition duration-500 rounded-3xl"
      }
    >
      <div className="size-16 bg-red-500/5 text-red-500 rounded-2xl flex items-center justify-center shadow-sm">
        {createElement(Icon, { className: "size-5" })}
      </div>
      <div className="mt-7 space-y-3">
        <h3 className="text-lg font-semibold text-black hover:text-red-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm">{item.desc}</p>
        <a href="#" className="inline-flex items-center gap-1 text-sm hover:text-red-500 transition-colors">
          Read More <Icons.ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

export { FeatureCard as default };
