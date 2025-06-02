import  ConnectToDatabase  from "@/lib/Db";
import Job from "@/model/Job";

export async function GET() {
  await ConnectToDatabase();
  const jobs = await Job.find();
  return new Response(JSON.stringify(jobs), { status: 200 });
}

export async function POST(req) {
  await ConnectToDatabase();
  const body = await req.json();
  const newJob = await Job.create(body);
  return new Response(JSON.stringify(newJob), { status: 201 });
}
