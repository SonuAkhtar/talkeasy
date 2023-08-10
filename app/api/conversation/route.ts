import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("Not Authorized", { status: 401 });

    if (!configuration.apiKey)
      return new NextResponse("API Key not found", { status: 500 });

    if (!messages)
      return new NextResponse("Messages are required", { status: 400 });

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
  } catch (error) {
    console.log("Conversation_Error", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
