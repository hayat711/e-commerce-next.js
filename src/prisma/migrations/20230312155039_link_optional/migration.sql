/*
  Warnings:

  - Made the column `link` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "link" SET NOT NULL;
