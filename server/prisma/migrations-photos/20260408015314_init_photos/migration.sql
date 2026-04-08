-- CreateTable
CREATE TABLE "p_images" (
    "id" VARCHAR(50) NOT NULL,
    "image_name" TEXT,
    "url" TEXT,
    "preview_url" TEXT,
    "video_url" TEXT,
    "original_key" TEXT,
    "preview_key" TEXT,
    "video_key" TEXT,
    "blurhash" TEXT,
    "exif" JSON,
    "labels" JSON,
    "width" INTEGER NOT NULL DEFAULT 0,
    "height" INTEGER NOT NULL DEFAULT 0,
    "lon" TEXT,
    "lat" TEXT,
    "title" VARCHAR(200),
    "detail" TEXT,
    "type" SMALLINT NOT NULL DEFAULT 1,
    "show" SMALLINT NOT NULL DEFAULT 1,
    "show_on_mainpage" SMALLINT NOT NULL DEFAULT 1,
    "featured" SMALLINT NOT NULL DEFAULT 0,
    "sort" SMALLINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "del" SMALLINT NOT NULL DEFAULT 0,

    CONSTRAINT "p_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "p_albums" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "album_value" TEXT NOT NULL,
    "detail" TEXT,
    "theme" TEXT NOT NULL DEFAULT '0',
    "show" SMALLINT NOT NULL DEFAULT 1,
    "sort" SMALLINT NOT NULL DEFAULT 0,
    "random_show" SMALLINT NOT NULL DEFAULT 1,
    "license" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,
    "del" SMALLINT NOT NULL DEFAULT 0,
    "image_sorting" SMALLINT NOT NULL DEFAULT 1,
    "cover" TEXT,

    CONSTRAINT "p_albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "p_images_albums_relation" (
    "album_value" TEXT NOT NULL,
    "image_id" VARCHAR(50) NOT NULL,

    CONSTRAINT "p_images_albums_relation_pkey" PRIMARY KEY ("image_id","album_value")
);

-- CreateTable
CREATE TABLE "p_tags" (
    "id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "category" VARCHAR(200),
    "parent_id" VARCHAR(50),
    "detail" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "p_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "p_images_tags_relation" (
    "id" VARCHAR(50) NOT NULL,
    "image_id" VARCHAR(50) NOT NULL,
    "tag_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "p_images_tags_relation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "p_configs" (
    "id" VARCHAR(50) NOT NULL,
    "config_key" VARCHAR(200) NOT NULL,
    "config_value" TEXT,
    "detail" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP,

    CONSTRAINT "p_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "p_visit_log" (
    "id" VARCHAR(50) NOT NULL,
    "path" TEXT NOT NULL,
    "page_type" VARCHAR(50) NOT NULL,
    "ip" VARCHAR(100),
    "user_agent" TEXT,
    "referrer" TEXT,
    "source" VARCHAR(50),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "p_visit_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "p_images_del_show_idx" ON "p_images"("del", "show");

-- CreateIndex
CREATE INDEX "p_images_featured_idx" ON "p_images"("featured");

-- CreateIndex
CREATE INDEX "p_images_created_at_idx" ON "p_images"("created_at");

-- CreateIndex
CREATE INDEX "p_images_show_show_on_mainpage_idx" ON "p_images"("show", "show_on_mainpage");

-- CreateIndex
CREATE INDEX "p_images_del_show_featured_idx" ON "p_images"("del", "show", "featured");

-- CreateIndex
CREATE UNIQUE INDEX "p_albums_album_value_key" ON "p_albums"("album_value");

-- CreateIndex
CREATE INDEX "p_albums_del_show_idx" ON "p_albums"("del", "show");

-- CreateIndex
CREATE INDEX "p_albums_album_value_idx" ON "p_albums"("album_value");

-- CreateIndex
CREATE INDEX "p_images_albums_relation_image_id_idx" ON "p_images_albums_relation"("image_id");

-- CreateIndex
CREATE INDEX "p_images_albums_relation_album_value_idx" ON "p_images_albums_relation"("album_value");

-- CreateIndex
CREATE UNIQUE INDEX "p_tags_name_key" ON "p_tags"("name");

-- CreateIndex
CREATE INDEX "p_images_tags_relation_image_id_idx" ON "p_images_tags_relation"("image_id");

-- CreateIndex
CREATE INDEX "p_images_tags_relation_tag_id_idx" ON "p_images_tags_relation"("tag_id");

-- CreateIndex
CREATE UNIQUE INDEX "p_images_tags_relation_image_id_tag_id_key" ON "p_images_tags_relation"("image_id", "tag_id");

-- CreateIndex
CREATE UNIQUE INDEX "p_configs_config_key_key" ON "p_configs"("config_key");

-- CreateIndex
CREATE INDEX "p_visit_log_created_at_idx" ON "p_visit_log"("created_at");

-- CreateIndex
CREATE INDEX "p_visit_log_path_idx" ON "p_visit_log"("path");

-- AddForeignKey
ALTER TABLE "p_images_albums_relation" ADD CONSTRAINT "p_images_albums_relation_album_value_fkey" FOREIGN KEY ("album_value") REFERENCES "p_albums"("album_value") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p_images_albums_relation" ADD CONSTRAINT "p_images_albums_relation_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "p_images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p_tags" ADD CONSTRAINT "p_tags_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "p_tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p_images_tags_relation" ADD CONSTRAINT "p_images_tags_relation_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "p_images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p_images_tags_relation" ADD CONSTRAINT "p_images_tags_relation_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "p_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
