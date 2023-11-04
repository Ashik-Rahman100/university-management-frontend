import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextResponse) {
  return NextResponse.json({ name: "File Upload " });
}
