import { ContactInput, Contact } from '../types/contact';

export interface ValidationError {
  field: string;
  message: string;
}

export const validateContact = (data: any): { isValid: boolean; errors: ValidationError[] } => {
  const errors: ValidationError[] = [];

  // Check if data exists
  if (!data || typeof data !== 'object') {
    errors.push({ field: 'general', message: 'Invalid data format' });
    return { isValid: false, errors };
  }

  // Validate fullName
  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length === 0) {
    errors.push({ field: 'fullName', message: 'Full name is required' });
  } else if (data.fullName.trim().length < 2) {
    errors.push({ field: 'fullName', message: 'Full name must be at least 2 characters' });
  } else if (data.fullName.trim().length > 100) {
    errors.push({ field: 'fullName', message: 'Full name must be less than 100 characters' });
  }

  // Validate whatsapp
  if (!data.whatsapp || typeof data.whatsapp !== 'string' || data.whatsapp.trim().length === 0) {
    errors.push({ field: 'whatsapp', message: 'WhatsApp number is required' });
  } else {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,20}$/;
    if (!phoneRegex.test(data.whatsapp.trim())) {
      errors.push({ field: 'whatsapp', message: 'Invalid WhatsApp number format' });
    }
  }

  // Validate email
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push({ field: 'email', message: 'Invalid email format' });
    } else if (data.email.trim().length > 255) {
      errors.push({ field: 'email', message: 'Email must be less than 255 characters' });
    }
  }

  return { isValid: errors.length === 0, errors };
};

export const sanitizeContact = (data: ContactInput): Contact => {
  return {
    full_name: data.fullName.trim(),
    whatsapp: data.whatsapp.trim(),
    email: data.email.trim().toLowerCase()
  };
};