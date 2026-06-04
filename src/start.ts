import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const redirectMiddleware = createMiddleware().server(async ({ request, pathname, next }) => {
  const url = new URL(request.url);
  if (url.hostname === "glow.hairqare.co" && pathname === "/") {
    return Response.redirect("https://hairqare.co/", 301);
  }
  return await next();
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [redirectMiddleware, errorMiddleware],
}));
