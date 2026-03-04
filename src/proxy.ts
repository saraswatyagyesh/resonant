import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {

    // extract user id nd organisation id from auth
    const { userId, orgId } = await auth();

    if(isPublicRoute(req)) { return NextResponse.next(); }
    if( !userId) { await auth.protect(); }
    if(isOrgSelectionRoute(req)) { return NextResponse.next(); }

    // for all protected routes, ensure org is selected
    if(userId && !orgId) { const orgSelection = new URL("/org-selection", req.url); return NextResponse.redirect(orgSelection); }

    return NextResponse.next();
});

export const config = { matcher: [ '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', '/(api|trpc)(.*)', ], };