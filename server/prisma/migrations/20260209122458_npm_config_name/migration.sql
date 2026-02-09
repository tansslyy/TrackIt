-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "first_name" TEXT,
ADD COLUMN     "last_name" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'local',
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "password_hash" DROP NOT NULL;
