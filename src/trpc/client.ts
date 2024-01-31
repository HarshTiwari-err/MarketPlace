import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from './'
export const trpc = createTRPCReact<AppRouter>({})
// will we used for frontend
// Approuter is {type Backend}
