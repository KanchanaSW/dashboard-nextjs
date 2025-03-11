import { NextResponse } from 'next/server';
import shipmentProgressCard from './data.json';

export async function GET(request) {
  return NextResponse.json(shipmentProgressCard);
}