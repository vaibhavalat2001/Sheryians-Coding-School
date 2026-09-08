import React from "react";
import {
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  Users,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#fffdf8]">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pt-16">
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 px-6 py-14 text-white sm:px-12 lg:px-20 lg:py-20">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 right-40 h-80 w-80 rounded-full bg-white/5" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
              <Sparkles size={14} />
              About Shoply
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shopping made
              <span className="block text-orange-300">
                simple & enjoyable.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base">
              We believe shopping should be simple, convenient, and
              enjoyable. Shoply brings quality products and great prices
              together in one place.
            </p>
          </div>

          {/* Decorative Icon */}
          <div className="absolute bottom-8 right-12 hidden lg:block">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <ShoppingBag
                size={110}
                strokeWidth={1}
                className="text-white/90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <p className="text-sm font-bold text-emerald-600">
              WHO WE ARE
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              More than just an online store.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Shoply is an e-commerce platform created to make online
              shopping easier for everyone. From everyday essentials to
              products you simply love, we aim to provide a smooth shopping
              experience from discovery to delivery.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We carefully select products, focus on quality, and work to
              provide competitive prices while keeping your shopping
              experience simple and reliable.
            </p>

            <NavLink
              to="/product"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Explore Products
              <ArrowRight size={18} />
            </NavLink>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-3xl bg-emerald-50 p-7">
              <ShoppingBag className="text-emerald-600" size={30} />

              <h3 className="mt-5 text-3xl font-extrabold text-emerald-950">
                10K+
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Products available
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-orange-50 p-7">
              <Users className="text-orange-500" size={30} />

              <h3 className="mt-5 text-3xl font-extrabold text-orange-950">
                5K+
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Happy customers
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-7">
              <Truck className="text-blue-600" size={30} />

              <h3 className="mt-5 text-3xl font-extrabold text-blue-950">
                24/7
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Order availability
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-rose-50 p-7">
              <Heart className="text-rose-500" size={30} />

              <h3 className="mt-5 text-3xl font-extrabold text-rose-950">
                98%
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Customer satisfaction
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold text-orange-500">
              OUR PURPOSE
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What drives us
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Everything we do is focused on making online shopping more
              convenient, trustworthy, and enjoyable.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {/* Mission */}
            <div className="group rounded-3xl border border-gray-100 bg-[#fffdf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                <Target size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                To make quality products accessible while creating a
                shopping experience that is simple, fast, and enjoyable.
              </p>

            </div>

            {/* Vision */}
            <div className="group rounded-3xl border border-gray-100 bg-[#fffdf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-50">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                <Sparkles size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                To become a trusted shopping destination where customers
                can discover products they love with confidence.
              </p>

            </div>

            {/* Values */}
            <div className="group rounded-3xl border border-gray-100 bg-[#fffdf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-500 group-hover:text-white">
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Our Values
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Quality, transparency, customer satisfaction, and trust are
                at the heart of everything we build.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Illustration */}
          <div className="relative flex min-h-88 items-center justify-center overflow-hidden rounded-4xl bg-linear-to-br from-orange-50 to-emerald-50">

            <div className="absolute h-64 w-64 rounded-full bg-white/70" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-4xl bg-white shadow-xl shadow-emerald-100">
              <ShoppingBag
                size={70}
                strokeWidth={1.5}
                className="text-emerald-500"
              />
            </div>

            <div className="absolute left-8 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
              <Heart className="text-rose-500" size={24} />
            </div>

            <div className="absolute bottom-10 right-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
              <ShieldCheck className="text-emerald-500" size={24} />
            </div>

          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-bold text-emerald-600">
              WHY SHOPLY?
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Built around your shopping experience.
            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Trusted & Secure
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Your shopping experience and personal information are
                    handled with care.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <ShoppingBag size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Quality Products
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We focus on bringing useful and quality products to
                    your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Truck size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Convenient Shopping
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Browse, choose, and order your favorite products from
                    anywhere.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">

        <div className="relative overflow-hidden rounded-4xl bg-slate-900 px-6 py-14 text-center sm:px-10">

          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to start shopping?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
              Discover products you'll love and enjoy a simple, reliable
              shopping experience.
            </p>

            <NavLink
              to="/product"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-400"
            >
              Explore Products
              <ArrowRight size={18} />
            </NavLink>
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
