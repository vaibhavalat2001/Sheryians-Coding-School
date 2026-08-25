import React from "react";
import {
  Users,
  ShieldCheck,
  Truck,
  Heart,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-zinc-900">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <span
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-purple-500/10
            border border-purple-500/20
            text-purple-400
            text-xs sm:text-sm
            font-semibold
          "
          >
            <Sparkles size={15} />
            ABOUT CARTIQO
          </span>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            mt-7
            leading-tight
          "
          >
            Shopping Made
            <span className="text-purple-500"> Simple & Better.</span>
          </h1>

          <p
            className="
            max-w-2xl
            mx-auto
            text-zinc-400
            text-base
            sm:text-lg
            mt-6
            leading-relaxed
          "
          >
            We bring a wide range of quality products together in one place,
            making it easier for you to discover, compare and shop for
            everything you need.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="
              absolute
              -inset-2
              bg-purple-600/10
              blur-2xl
              rounded-3xl
            "
            />

            <div
              className="
              relative
              overflow-hidden
              rounded-2xl sm:rounded-3xl
              border border-zinc-800
            "
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
                alt="Online shopping"
                className="
                  w-full
                  h-[320px]
                  sm:h-[400px]
                  lg:h-[450px]
                  object-cover
                  opacity-75
                  hover:opacity-100
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-transparent
                to-transparent
              "
              />
            </div>

            {/* Floating Stat */}
            <div
              className="
              absolute
              -bottom-5
              right-4
              sm:right-8
              bg-[#151515]
              border border-zinc-800
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              rounded-2xl
              px-5
              py-4
            "
            >
              <p className="text-2xl sm:text-3xl font-bold text-purple-500">
                10K+
              </p>

              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                Happy Customers
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="
              text-purple-500
              font-semibold
              text-xs sm:text-sm
              uppercase
              tracking-wider
            "
            >
              Our Story
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              font-bold
              mt-3
              leading-tight
            "
            >
              More Than Just
              <br />
              An Online Store
            </h2>

            <p
              className="
              text-zinc-400
              mt-6
              leading-relaxed
            "
            >
              Our goal is to create a simple and enjoyable shopping experience
              where customers can find products from different categories
              without having to visit multiple stores.
            </p>

            <p
              className="
              text-zinc-400
              mt-4
              leading-relaxed
            "
            >
              From electronics and fashion to beauty, furniture, groceries and
              home essentials, we bring everything together so you can spend
              less time searching and more time enjoying your purchases.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div
                className="
                p-5
                rounded-xl
                bg-[#111111]
                border border-zinc-800
                hover:border-purple-500/30
                transition
              "
              >
                <h3 className="text-3xl font-bold text-white">500+</h3>

                <p className="text-sm text-zinc-500 mt-1">Products</p>
              </div>

              <div
                className="
                p-5
                rounded-xl
                bg-[#111111]
                border border-zinc-800
                hover:border-purple-500/30
                transition
              "
              >
                <h3 className="text-3xl font-bold text-white">50+</h3>

                <p className="text-sm text-zinc-500 mt-1">Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section
        className="
        relative
        overflow-hidden
        border-y
        border-zinc-900
        bg-[#111111]
      "
      >
        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          top-0
          w-[500px]
          h-[300px]
          bg-purple-600/10
          blur-[100px]
          rounded-full
        "
        />

        <div
          className="
          relative
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
          py-20
          sm:py-24
          text-center
        "
        >
          <p
            className="
            text-purple-500
            font-semibold
            text-xs sm:text-sm
            uppercase
            tracking-wider
          "
          >
            Our Mission
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            mt-3
            leading-tight
          "
          >
            Making Online Shopping
            <br className="hidden sm:block" />
            <span className="text-purple-500">Easier for Everyone.</span>
          </h2>

          <p
            className="
            text-zinc-400
            text-base
            sm:text-lg
            mt-6
            leading-relaxed
          "
          >
            We believe shopping should be convenient, transparent and enjoyable.
            That's why we're focused on creating a platform where discovering
            great products is simple.
          </p>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center mb-10 sm:mb-12">
          <p
            className="
            text-purple-500
            font-semibold
            text-xs sm:text-sm
            uppercase
            tracking-wider
          "
          >
            Why Us
          </p>

          <h2
            className="
            text-3xl
            sm:text-4xl
            font-bold
            mt-2
          "
          >
            Why Shop With Us?
          </h2>

          <p
            className="
            text-zinc-500
            mt-4
            max-w-xl
            mx-auto
          "
          >
            We focus on making every part of your shopping experience simple and
            reliable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1 */}
          <div
            className="
            group
            bg-[#111111]
            border border-zinc-800
            rounded-2xl
            p-6 sm:p-7
            hover:-translate-y-2
            hover:border-purple-500/30
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-13
              h-13
              rounded-xl
              bg-purple-500/10
              border border-purple-500/20
              flex
              items-center
              justify-center
              group-hover:bg-purple-500/20
              transition
            "
            >
              <Users className="text-purple-400" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-5">Customer First</h3>

            <p
              className="
              text-zinc-500
              text-sm
              mt-3
              leading-relaxed
            "
            >
              Everything we do is designed around creating a better customer
              experience.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
            group
            bg-[#111111]
            border border-zinc-800
            rounded-2xl
            p-6 sm:p-7
            hover:-translate-y-2
            hover:border-purple-500/30
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-13
              h-13
              rounded-xl
              bg-purple-500/10
              border border-purple-500/20
              flex
              items-center
              justify-center
              group-hover:bg-purple-500/20
              transition
            "
            >
              <ShieldCheck className="text-purple-400" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-5">Trusted Products</h3>

            <p
              className="
              text-zinc-500
              text-sm
              mt-3
              leading-relaxed
            "
            >
              We aim to provide quality products across a wide range of
              categories.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
            group
            bg-[#111111]
            border border-zinc-800
            rounded-2xl
            p-6 sm:p-7
            hover:-translate-y-2
            hover:border-purple-500/30
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-13
              h-13
              rounded-xl
              bg-purple-500/10
              border border-purple-500/20
              flex
              items-center
              justify-center
              group-hover:bg-purple-500/20
              transition
            "
            >
              <Truck className="text-purple-400" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-5">Fast Delivery</h3>

            <p
              className="
              text-zinc-500
              text-sm
              mt-3
              leading-relaxed
            "
            >
              We work towards making your shopping experience quick and
              convenient.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="
            group
            bg-[#111111]
            border border-zinc-800
            rounded-2xl
            p-6 sm:p-7
            hover:-translate-y-2
            hover:border-purple-500/30
            hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]
            transition-all
            duration-300
          "
          >
            <div
              className="
              w-13
              h-13
              rounded-xl
              bg-purple-500/10
              border border-purple-500/20
              flex
              items-center
              justify-center
              group-hover:bg-purple-500/20
              transition
            "
            >
              <Heart className="text-purple-400" size={24} />
            </div>

            <h3 className="font-bold text-lg mt-5">Made With Care</h3>

            <p
              className="
              text-zinc-500
              text-sm
              mt-3
              leading-relaxed
            "
            >
              We continuously improve our platform to make shopping easier and
              more enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section
        className="
        border-y
        border-zinc-900
        bg-[#111111]
      "
      >
        <div
          className="
          max-w-7xl
          mx-auto
          px-4 sm:px-6
          py-14 sm:py-16
        "
        >
          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            text-center
          "
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-500">
                10K+
              </h3>

              <p className="text-sm text-zinc-500 mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-500">
                500+
              </h3>

              <p className="text-sm text-zinc-500 mt-2">Products</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-500">
                50+
              </h3>

              <p className="text-sm text-zinc-500 mt-2">Categories</p>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-purple-500">
                4.8
              </h3>

              <div className="flex justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-purple-500 text-purple-500"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div
          className="
          relative
          overflow-hidden
          rounded-2xl sm:rounded-3xl
          border border-purple-500/20
          bg-gradient-to-br
          from-purple-950/50
          via-[#151515]
          to-[#111111]
          px-6 sm:px-10 lg:px-16
          py-14 sm:py-16
          text-center
        "
        >
          {/* Glow */}
          <div
            className="
            absolute
            -top-24
            left-1/2
            -translate-x-1/2
            w-72
            h-72
            bg-purple-600/20
            blur-[100px]
            rounded-full
          "
          />

          <div className="relative">
            <p className="text-purple-400 text-sm font-semibold">
              START EXPLORING
            </p>

            <h2
              className="
              text-3xl
              sm:text-4xl
              font-bold
              mt-3
            "
            >
              Ready to Discover
              <span className="text-purple-500"> Something New?</span>
            </h2>

            <p
              className="
              text-zinc-400
              mt-4
              max-w-xl
              mx-auto
            "
            >
              Explore our collection and find products you'll love.
            </p>

            <button
              onClick={() => navigate("/main/shop")}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-purple-600
                hover:bg-purple-500
                text-white
                font-semibold
                active:scale-95
                transition-all
              "
            >
              Start Shopping
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
