/*
  Warnings:

  - You are about to drop the `Addisas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Addisas";

-- CreateTable
CREATE TABLE "Addidas" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Addidas_pkey" PRIMARY KEY ("id")
);
