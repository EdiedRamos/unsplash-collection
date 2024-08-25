import { Logo } from "./logo";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="border-b-2 dark:border-slate-600">
      <div className="flex flex-wrap justify-between items-center px-8 py-4">
        <div>
          <Logo />
        </div>
        <Navigation />
      </div>
    </header>
  );
}
