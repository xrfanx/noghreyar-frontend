export const STORAGE_KEYS = {
  theme: "noghreyar_theme",
  authToken: "noghreyar_auth_token",
  userProfile: "noghreyar_user_profile_v1",
  walletBalance: "noghreyar_wallet_balance_v1",
  transactions: "noghreyar_transactions_v1",
  contactMessages: "noghreyar_contact_messages_v1",
} as const;

export const INITIAL_DEMO_DATA = {
  defaultUser: {
    fullName: "عرفان روزبهانی",
    phoneOrEmail: "09125013983",
    isVerified: true,
  },
  defaultWallet: {
    cashToman: 5_000_000, // ۵ میلیون تومان موجودی نقدی اولیه برای تست سریع
    silverGrams: 12.5, // ۱۲.۵ گرم نقره اولیه
  },
} as const;