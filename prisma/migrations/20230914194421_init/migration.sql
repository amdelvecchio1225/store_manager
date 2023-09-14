/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `store` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "product";

-- DropTable
DROP TABLE "store";

-- CreateTable
CREATE TABLE "stores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cost" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stores_id_key" ON "stores"("id");

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");
