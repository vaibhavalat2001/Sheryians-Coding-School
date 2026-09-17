import UrlForm from "./components/UrlForm";
import UrlResult from "./components/UrlResult";
import UrlsList from "./components/UrlsList";


const App = () => {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Main Container */}
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        {/* Hero Section */}
        <section className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
            ✦ Simple URL Shortener
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Long links?
            <span className="block text-indigo-400">
              Make them short.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Paste a long URL, get a short one, and keep track of how many
            people click your link.
          </p>
        </section>

        {/* URL Generator */}
        <section className="mx-auto mt-8 w-full max-w-3xl sm:mt-10">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-4 shadow-2xl shadow-black/20 sm:p-6">
            <UrlForm />

            <UrlResult />
          </div>
        </section>

        {/* Links List */}
        <section className="mx-auto mt-10 w-full max-w-5xl sm:mt-14">
          <UrlsList />
        </section>
      </div>
    </main>
  );
};

export default App;