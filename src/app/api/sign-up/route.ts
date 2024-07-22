import dbConnect from "@/lib/dbConnent";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();
  try { 
    const {username, email, password} = await request.json();
  } catch (error) {
    console.error("Error registering User", error);
    return Response.json(
      {
        success: false,
        message: "Error Registering user!",
      },
      { status: 500 }
    );
  }
}
