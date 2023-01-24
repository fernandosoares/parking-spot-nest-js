-- CreateTable
CREATE TABLE "spots" (
    "id" TEXT NOT NULL,
    "spot_number" VARCHAR(5) NOT NULL,
    "car_brand" VARCHAR(255) NOT NULL,
    "car_model" VARCHAR(255) NOT NULL,
    "car_color" VARCHAR(255) NOT NULL,
    "car_license_plate" VARCHAR(7) NOT NULL,
    "apartment" VARCHAR(5) NOT NULL,
    "tower" VARCHAR(5) NOT NULL,
    "owner" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "spots_pkey" PRIMARY KEY ("id")
);
