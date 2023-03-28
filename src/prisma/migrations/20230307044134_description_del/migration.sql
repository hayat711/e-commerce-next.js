/*
  Warnings:

  - You are about to drop the column `description` on the `Addisas` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ConverseLow` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ConversePlat` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ConverseTop` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Leggings` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `MenTop` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `NikeMen` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `NikeWomen` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Yuga` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Addisas" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "ConverseLow" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "ConversePlat" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "ConverseTop" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Leggings" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "MenTop" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "NikeMen" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "NikeWomen" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Yuga" DROP COLUMN "description";
