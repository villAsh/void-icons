import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  
  try {
    const filePath = path.join(process.cwd(), "src/icons", `${name}.tsx`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Icon not found" }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, "utf-8");
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read icon file" }, { status: 500 });
  }
}
