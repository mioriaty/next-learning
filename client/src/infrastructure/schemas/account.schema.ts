import z from 'zod';

export const AccountResponseSchema = z
  .object({
    data: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string()
    }),
    message: z.string()
  })
  .strict();

export type AccountResponseType = z.TypeOf<typeof AccountResponseSchema>;

export const UpdateMeBodySchema = z.object({
  name: z.string().trim().min(2).max(256)
});

export type UpdateMeBodyType = z.TypeOf<typeof UpdateMeBodySchema>;
