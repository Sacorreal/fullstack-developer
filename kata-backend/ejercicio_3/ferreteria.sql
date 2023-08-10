CREATE TABLE "supplier" (
  "supplier_id" serial PRIMARY KEY,
  "name" varchar(20),
  "address" varchar(40),
  "city" varchar(10),
  "province" varchar(10),
  "shopping_id" serial,
  "part_id" serial,
  "created_at" timestamp
);

CREATE TABLE "part" (
  "part_id" serial PRIMARY KEY,
  "name" varchar(20),
  "color" varchar(40),
  "price" varchar(10),
  "category_id" serial(10),
  "supplier_id" serial,
  "shopping_id" serial,
  "created_at" timestamp
);

CREATE TABLE "category" (
  "category_id" serial PRIMARY KEY,
  "name" varchar(20),
  "part_id" serial,
  "created_at" timestamp
);

CREATE TABLE "shopping" (
  "shopping_id" serial PRIMARY KEY,
  "date" timestamp,
  "quantity" integer,
  "part_id" serial,
  "supplier_id" serial,
  "created_at" timestamp
);

ALTER TABLE "shopping" ADD FOREIGN KEY ("shopping_id") REFERENCES "supplier" ("shopping_id");

CREATE TABLE "part_supplier" (
  "part_part_id" serial,
  "supplier_part_id" serial,
  PRIMARY KEY ("part_part_id", "supplier_part_id")
);

ALTER TABLE "part_supplier" ADD FOREIGN KEY ("part_part_id") REFERENCES "part" ("part_id");

ALTER TABLE "part_supplier" ADD FOREIGN KEY ("supplier_part_id") REFERENCES "supplier" ("part_id");


ALTER TABLE "part" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("category_id");

CREATE TABLE "supplier_part" (
  "supplier_supplier_id" serial,
  "part_supplier_id" serial,
  PRIMARY KEY ("supplier_supplier_id", "part_supplier_id")
);

ALTER TABLE "supplier_part" ADD FOREIGN KEY ("supplier_supplier_id") REFERENCES "supplier" ("supplier_id");

ALTER TABLE "supplier_part" ADD FOREIGN KEY ("part_supplier_id") REFERENCES "part" ("supplier_id");


CREATE TABLE "shopping_part" (
  "shopping_shopping_id" serial,
  "part_shopping_id" serial,
  PRIMARY KEY ("shopping_shopping_id", "part_shopping_id")
);

ALTER TABLE "shopping_part" ADD FOREIGN KEY ("shopping_shopping_id") REFERENCES "shopping" ("shopping_id");

ALTER TABLE "shopping_part" ADD FOREIGN KEY ("part_shopping_id") REFERENCES "part" ("shopping_id");


ALTER TABLE "part" ADD FOREIGN KEY ("part_id") REFERENCES "category" ("part_id");

ALTER TABLE "part" ADD FOREIGN KEY ("part_id") REFERENCES "shopping" ("part_id");

ALTER TABLE "shopping" ADD FOREIGN KEY ("supplier_id") REFERENCES "supplier" ("supplier_id");
