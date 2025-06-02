import { Request, Response } from 'express';
import { ContactInput } from '../types/contact';
import { validateContact, sanitizeContact } from '../utils/validation';
import { supabase } from '../config/supabase';

export async function submitContactForm(req: Request, res: Response): Promise<void> {
  try {
    const data: ContactInput = req.body;

    // Validate input
    const { isValid, errors } = validateContact(data);
    if (!isValid) {
      res.status(400).json({ 
        error: 'Validation failed',
        details: errors 
      });
      return;
    }

    // Sanitize input
    const contactData = sanitizeContact(data);

    // Check for duplicate email
    const { data: existingContact, error: checkError } = await supabase
      .from('contacts')
      .select('id, email')
      .eq('email', contactData.email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking for duplicate email:', checkError);
      res.status(500).json({ error: 'Database error occurred' });
      return;
    }

    if (existingContact) {
      res.status(409).json({ error: 'An account with this email already exists' });
      return;
    }

    // Insert new contact
    const { data: insertedData, error: supabaseError } = await supabase
      .from('contacts')
      .insert([contactData])
      .select('*')
      .single();

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      res.status(500).json({ error: `Failed to save data: ${supabaseError.message}` });
      return;
    }

    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: insertedData,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}