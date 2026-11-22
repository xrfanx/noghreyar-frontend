import { ROUTES } from "../routes/paths";

export interface NavItem {
  label: string;
  to: string;
  external?: boolean;
}

export const PUBLIC_NAV_ITEMS: NavItem[] = [
  { label: "صفحه اصلی", to: ROUTES.HOME },
  { label: "درباره ما", to: ROUTES.ABOUT },
  { label: "تماس با ما", to: ROUTES.CONTACT },
];

export const PUBLIC_EXTRA_LINKS: NavItem[] = [
  { label: "قوانین و مقررات", to: "/terms" },
  { label: "مجوزها", to: "/licenses" },
  { label: "راهنما", to: "/guide" },
];

export const DASHBOARD_NAV_ITEMS: NavItem[] = [
  { label: "نمای کلی", to: ROUTES.DASHBOARD },
  { label: "کیف‌پول و معامله", to: ROUTES.WALLET },
  { label: "تراکنش‌ها", to: ROUTES.TRANSACTIONS },
];