import { getAvailableContentTypes } from "../../_util/contentful";
import { NextResponse } from "next/server";

// Debug endpoint to list available content types
// Access at: http://localhost:3000/api/debug-contentful
export async function GET() {
  try {
    const contentTypes = await getAvailableContentTypes();
    
    return NextResponse.json({
      success: true,
      contentTypes: contentTypes,
      message: contentTypes.length === 0 
        ? "No content types found. Make sure your Contentful space is configured correctly."
        : `Found ${contentTypes.length} content type(s)`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        contentTypes: [],
      },
      { status: 500 }
    );
  }
}
