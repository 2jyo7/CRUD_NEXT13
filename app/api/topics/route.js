import connectDB from "@/libs/mongodb";
import {NextResponse} from "next/server";
import Topic from "../../../models/topic";

connectDB();

export async function POST (request) {
    const { title, description } = request.json();
   //await connectDB();
   await Topic.create({title, description});
   return NextResponse.json({message: "Topic created successfully"}, { status: 201 });
}

export async function GET () {
   //await connectDB();
   const topic = await Topic.find();
   return NextResponse.json({topic}, { status: 200 });
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams("id");
    //await connectDB();
    const topic = await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"}, { status: 200 });
 }

 