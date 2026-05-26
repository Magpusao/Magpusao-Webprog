import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200';

const actionButtonClasses = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <section>
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-green-600">
        Start fresh
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-950">
        Sign up
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account with the same structured layout pattern used across the project.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              id="signup-first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="signup-last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              id="signup-last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClasses}>
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClasses}>
            Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClasses}>
            Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already registered?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-green-700">
          Log in
        </Link>
      </div>
    </section>
  );
};

export default SignUpPage;
