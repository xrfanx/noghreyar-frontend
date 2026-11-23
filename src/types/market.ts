export interface SilverRate {
  pricePerGram: number; // قیمت پایه هر گرم نقره (تومان)
  buyPricePerGram: number; // نرخ خرید نقره توسط کاربر (تومان)
  sellPricePerGram: number; // نرخ فروش نقره توسط کاربر (تومان)
  changePercent24h: number; // درصد تغییر ۲۴ ساعته
  updatedAt: string; // زمان آخرین به‌روزرسانی (ISO string)
}

export interface SilverPricePoint {
  label: string; // برچسب زمانی یا بازه (مثلاً "۱۰:۰۰" یا "فروردین")
  pricePerGram: number;
}