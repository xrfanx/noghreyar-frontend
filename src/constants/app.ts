export const APP_INFO = {
  brandName: "نقره عیار",
  tagline: "خرید، فروش و سرمایه‌گذاری آنلاین نقره با پشتوانه فیزیکی",
  supportEmail: "erfanroozbahani6@gmail.com",
  supportPhone: "+98-9125013983",
} as const;

// as const برای تایپ اسکریپت ک مقدار مثلا استرینگ اینا نباشه دقیقا همون چیزی ک ثبت میکند باشد

export const CURRENCY_AND_WEIGHT = {
  tomanUnit: "تومان",
  rialUnit: "ریال",
  gramUnit: "گرم",
  milligramUnit: "میلی‌گرم",
  gramToMilligram: 1000,
  tomanToRial: 10,
} as const;

export const TRADING_CONFIG = {
  // نرخ پایه فرضی هر گرم نقره به تومان برای شروع کار فرانت‌اند
  initialBasePricePerGram: 95000,
  // اختلاف جزئی قیمت خرید و فروش (اسپرد فرضی) برای شبیه‌سازی بازار
  buySpreadPercent: 0.5,
  sellSpreadPercent: 0.5,
  // کارمزد فرضی تراکنش‌ها (درصد)
  buyFeePercent: 1,
  sellFeePercent: 1,
  // حداقل و حداکثر وزن قابل معامله به گرم
  minTradeGrams: 0.1,
  maxTradeGrams: 1000,
  // بازه به‌روزرسانی خودکار شبیه‌سازی نرخ (میلی‌ثانیه)
  rateTickIntervalMs: 5000,
} as const;