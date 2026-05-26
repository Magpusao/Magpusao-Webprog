import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="min-h-screen w-full px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl overflow-hidden rounded-3xl border-2 border-zinc-900 bg-white shadow-xl lg:grid-cols-[1fr_0.95fr]">
          <div className="relative hidden bg-zinc-950 p-8 text-white lg:block">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,197,94,0.3),transparent_45%),linear-gradient(315deg,rgba(37,99,235,0.28),transparent_40%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-green-300">
                  Zandra
                </p>
                <h1 className="mt-4 max-w-md text-4xl font-extrabold leading-tight">
                  Continue your web project journey.
                </h1>
                <p className="mt-5 max-w-md text-sm leading-7 text-zinc-200">
                  Sign in or create an account to access the same simple routes, article pages, and project layout.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-semibold">React Router</p>
                  <p className="mt-1 text-xs leading-6 text-zinc-300">
                    Auth pages are grouped under their own layout branch.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-semibold">Component Based</p>
                  <p className="mt-1 text-xs leading-6 text-zinc-300">
                    Shared button styles keep forms and landing pages consistent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10">
            <div className="mx-auto w-full max-w-md">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
