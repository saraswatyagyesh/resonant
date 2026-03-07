import { createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  voices: voicesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;