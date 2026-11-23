export interface UserProfile {
  id: string;
  fullName: string;
  phoneOrEmail: string;
  nationalCode?: string;
  isVerified: boolean;
}

export interface LoginPayload {
  identifier: string; // شماره موبایل یا ایمیل
  password: string;
}

export interface RegisterPayload {
  fullName: string;
  identifier: string;
  password: string;
}

export interface ContactMessagePayload {
  fullName: string;
  emailOrPhone: string;
  subject: string;
  message: string;
}