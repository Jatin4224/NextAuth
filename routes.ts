/*
an array of routes that are accessible to the public 
these routes do not require authentication
@type {string[]}
*/
export const publicRoutes = ["/"];
/*
an array of routes that are used for authentication
these routes will redirect looged in users to /settings
@type {string[]}
*/
export const authRoutes = ["/auth/login", "/auth/register"];
/*
the prefix for API authentication routes
Rotues that start with this prefix are used for API authentication purposes
@type {string}
*/
export const apiAuthPrefix = "api/auth";

/*
the default redirect path after logging in
@type{string}
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";
