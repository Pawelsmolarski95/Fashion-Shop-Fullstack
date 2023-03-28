/*
  Warnings:

  - Added the required column `categories` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `categories` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
