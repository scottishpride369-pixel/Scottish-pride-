import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ service: "Automation Workflow Lab", status: "viability-test", payment: "not-connected", build: "github" });
}
