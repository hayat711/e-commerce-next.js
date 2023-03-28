-- CreateTable
CREATE TABLE "AsusLaptop" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Laptop',

    CONSTRAINT "AsusLaptop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NikeMen" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "NikeMen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NikeWomen" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "NikeWomen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConverseTop" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ConverseTop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConverseLow" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ConverseLow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversePlat" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "ConversePlat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leggings" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Leggings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Yuga" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Yuga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Addisas" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Addisas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenTop" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "MenTop_pkey" PRIMARY KEY ("id")
);
