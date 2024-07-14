-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "refree_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "refree_email" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,
    "phoneno" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);
