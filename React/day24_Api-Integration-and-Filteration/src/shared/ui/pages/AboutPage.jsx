import React from "react";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Heart,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const AboutPage = () => {
  const navigate = useNavigate() 
    const features = [
    {
      icon: ShoppingBag,
      title: "Quality Products",
      description:
        "We carefully select products to provide you with quality, reliable, and valuable choices.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "Your privacy and security are important to us. Shop with confidence through our secure platform.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "We work to make sure your orders reach your doorstep quickly and safely.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction comes first. We continuously improve our service based on your experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
              <Sparkles size={15} />
              About Our Store
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shopping Made
              <span className="text-violet-500"> Simple & Better.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              We are building a better way to shop online — bringing quality
              products, great prices, and a smooth shopping experience together
              in one place.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate("/main/product")} className="group flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold transition duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20">
                Start Shopping
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
           <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition duration-300 hover:border-violet-500/30 hover:bg-white/10">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-violet-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
                alt="Online shopping"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-4 backdrop-blur-xl">
                <p className="text-2xl font-bold text-violet-400">2026</p>
                <p className="mt-1 text-xs text-zinc-400">Our Journey</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              More Than Just an
              <span className="text-violet-500"> Online Store.</span>
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Our goal is simple — make online shopping convenient, reliable,
              and enjoyable for everyone. We bring together products from
              different categories so you can discover everything you need
              without jumping between multiple platforms.
            </p>

            <p className="mt-4 leading-7 text-zinc-500">
              From the products we showcase to the experience we provide, we
              focus on quality, transparency, and customer satisfaction. We
              believe shopping should be simple, fast, and accessible.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Products Available
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Customer Rating
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Customer Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="border-y border-white/10 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
            <Users size={26} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-violet-500">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Making Better Shopping
            <span className="text-violet-500"> Accessible to Everyone.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400">
            We want to create an e-commerce experience where customers can
            easily discover products, compare options, make secure purchases,
            and receive their orders without unnecessary complexity.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Built Around You
          </h2>

          <p className="mt-4 text-zinc-500">
            Everything we do is focused on making your shopping experience
            better.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 transition duration-300 group-hover:bg-violet-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-500/20 bg-violet-600 px-6 py-14 text-center sm:px-10 lg:py-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Start Shopping?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-violet-100 sm:text-base">
              Discover products you'll love and enjoy a simple, secure, and
              convenient shopping experience.
            </p>

            <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-600 transition duration-300 hover:bg-zinc-100">
              Explore Products
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
