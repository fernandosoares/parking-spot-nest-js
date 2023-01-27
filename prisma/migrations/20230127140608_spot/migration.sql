-- CreateTable
CREATE TABLE "spots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "spot_number" TEXT NOT NULL,
    "car_brand" TEXT NOT NULL,
    "car_model" TEXT NOT NULL,
    "car_color" TEXT NOT NULL,
    "car_license_plate" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "tower" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
