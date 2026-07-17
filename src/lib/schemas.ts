import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-().]{7,20}$/, 'Invalid phone number'),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(500, 'Message is too long'),
});

export type FormSchema = z.infer<typeof formSchema>;
