import { NextResponse } from 'next/server';
import outgoingShipments from './data.json';

export async function GET(request) {
  return NextResponse.json(outgoingShipments);
}