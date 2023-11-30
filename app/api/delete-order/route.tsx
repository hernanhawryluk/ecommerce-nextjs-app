import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/get-current-user";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();
  const { row } = body;

  if (row.paymentStatus !== "pending" || row.deliveryStatus !== "pending") {
    return NextResponse.error();
  }

  const order = await prisma.order.delete({
    where: { id: row.id },
  });

  return NextResponse.json(order);
}
