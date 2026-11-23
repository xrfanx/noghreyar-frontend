export type TransactionType = "buy" | "sell" | "deposit" | "withdraw";

export type TransactionStatus = "completed" | "pending" | "failed";

export type TradeSide = "buy" | "sell";

export interface WalletBalance {
  cashToman: number; // موجودی نقدی به تومان
  silverGrams: number; // موجودی نقره به گرم
}

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;
  grams: number; // مقدار نقره به گرم (در واریز/برداشت نقدی می‌تواند 0 باشد)
  amountToman: number; // مبلغ کل به تومان
  ratePerGram: number; // نرخ ثبت‌شده در زمان تراکنش
  feeToman: number; // کارمزد به تومان
  createdAt: string; // تاریخ ثبت (ISO string)
  trackingCode?: string; // کد پیگیری
  description?: string;
}

export interface TradeCalculation {
  side: TradeSide;
  grams: number;
  ratePerGram: number;
  baseAmountToman: number;
  feeToman: number;
  finalAmountToman: number; // مبلغ پرداختی در خرید یا دریافتی در فروش
}