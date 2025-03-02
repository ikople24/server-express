/*
  Warnings:

  - Added the required column `public_id` to the `Landmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secure_url` to the `Landmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Landmark` ADD COLUMN `public_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `secure_url` VARCHAR(191) NOT NULL;
