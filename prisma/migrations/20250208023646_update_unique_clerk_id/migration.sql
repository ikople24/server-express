/*
  Warnings:

  - A unique constraint covering the columns `[clerkId]` on the table `profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `profile_clerkId_key` ON `profile`(`clerkId`);
