import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

export const carSchema = VehicleSchema.extend({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type Car = z.infer<typeof carSchema>;
