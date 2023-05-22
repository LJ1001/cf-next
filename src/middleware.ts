import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/api/hello", "/api/protected"]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}