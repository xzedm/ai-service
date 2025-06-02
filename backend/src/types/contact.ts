export interface Contact {
  id?: string;
  full_name: string;
  whatsapp: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}

export interface ContactInput {
  fullName: string;
  whatsapp: string;
  email: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}