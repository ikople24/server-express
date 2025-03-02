/*
  Warnings:

  - You are about to drop the column `public_id` on the `Landmark` table. All the data in the column will be lost.
  - You are about to drop the column `secure_url` on the `Landmark` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Landmark` DROP COLUMN `public_id`,
    DROP COLUMN `secure_url`;
