import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/abc"]
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}