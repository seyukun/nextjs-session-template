import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/pages/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    if (req.body.username && req.body.password) {
      await prisma.$connect();
      let find = await prisma.users.create({
        data: {
          username: req.body.username,
          password: req.body.password,
        },
      });
      await prisma.$disconnect();
      res.redirect("/login");
      return;
    }
  }
  res.redirect("/");
}
