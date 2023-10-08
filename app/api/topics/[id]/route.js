import Topic from "@/models/topic";
import connectDB from "@/libs/mongodb";

export async function PUT (request, {params}) {
    const { id } = params;
    const {
        newTitle: title,
        newDescription: description,
    } = await request.json();
    await connectDB();
  await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message:"Topic Updated"}, { status: 200 });
 }