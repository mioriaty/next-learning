import { z } from 'zod';

export const LoginRequestSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100)
  })
  .strict();

export type LoginRequestType = z.TypeOf<typeof LoginRequestSchema>;

export const LoginResponseSchema = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string()
    })
  }),
  message: z.string()
});

export type LoginResponseType = z.TypeOf<typeof LoginResponseSchema>;
