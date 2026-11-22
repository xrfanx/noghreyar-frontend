
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import { ROUTES } from "../../routes/paths";

function PublicHeader() {
  const [theme, setTheme] = useState<"dark" | "light">(
    document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };

 const navLinkClass = " hover:text-primary-hover text-primary gap-8"

  return (
    <header className="sticky top-0 flex justify-center w-full min-h-8  mx-auto mt-0 mb-4 lg:top-8 lg:mt-8 lg:px-4">
      <div className="container w-full flex justify-around min-h-8 px-4 2xl:px-0 bg-(--color-surface)
            relative mx-auto max-w-7xl overflow-hidden rounded-xs py-3
            lg:rounded-md lg:px-4">

        {/* Logo */}
        <Link to={ROUTES.HOME} className="text-xl font-bold text-primary">
          نقره‌یار
        </Link>

        {/* Navigation */}
        <nav className="flex max-w-125 items-center justify-center lg:flex lg:gap-x-7 xl:gap-x-10 text-sm">

          <NavLink to={ROUTES.HOME} className={navLinkClass}>
            درباره ما
          </NavLink>

          <NavLink to="/terms" className={navLinkClass}>
            قوانین و مقررات
          </NavLink>

          <NavLink to="/magazine" className={navLinkClass}>
            مجوز ها
          </NavLink>

          <NavLink to={ROUTES.CONTACT} className={navLinkClass}>
            راهنما ء
          </NavLink>

          <NavLink to={ROUTES.CONTACT} className={navLinkClass}>
            محتوا ء
          </NavLink>

        </nav>

        {/* Actions */}
        <div className="flex items-center lg:gap-2 xl:gap-4">

          <button
            onClick={toggleTheme}
            className="rounded-lg border border-border px-3 py-2"
            aria-label="تغییر تم"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <Link
            to={ROUTES.LOGIN}
            className="h-10 border-primary rounded-sm bg-primary px-5 py-2 text-background lg:min-w-40"
          >
            ورود / ثبت‌ نام
          </Link>

        </div>

      </div>
    </header>
  );
}

export default PublicHeader;
