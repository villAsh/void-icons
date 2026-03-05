import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const iconName = name.replace(".json", "");
  
  try {
    const filePath = path.join(process.cwd(), "src/icons", `${iconName}.tsx`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Icon not found" }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, "utf-8");
    
    const registryJson = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: iconName,
      type: "registry:ui",
      author: "void-icons",
      dependencies: [
        "motion",
        "lucide-react",
        "clsx",
        "tailwind-merge"
      ],
      registryDependencies: [],
      files: [
        {
          path: `ui/${iconName}.tsx`,
          content: content,
          type: "registry:ui",
          target: `components/ui/${iconName}.tsx`
        }
      ]
    };

    return NextResponse.json(registryJson, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate registry item" }, { status: 500 });
  }
}
