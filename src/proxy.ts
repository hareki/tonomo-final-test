import { NextResponse } from 'next/server';

import { featuredProperty } from '@/src/features/property/data';

import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL(`/properties/${featuredProperty.slug}`, request.url));
}

export const config = {
  matcher: '/',
};
