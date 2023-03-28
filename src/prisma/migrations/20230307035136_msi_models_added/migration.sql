-- CreateTable
CREATE TABLE "MsiPc" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Gaming PC',

    CONSTRAINT "MsiPc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MsiMonitor" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Monitor',

    CONSTRAINT "MsiMonitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MsiLaptop" (
    "id" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Laptop',

    CONSTRAINT "MsiLaptop_pkey" PRIMARY KEY ("id")
);
