import { NextResponse } from 'next/server';
import shipments from './data.json';

export async function GET(request) {
  return NextResponse.json(shipments);
}