import { Injectable } from "@nestjs/common";
import { promises as fs } from "fs";
import { join, extname } from "path";

@Injectable()
export class UploadService {
  private uploadDir = process.env.UPLOAD_DIR || "./uploads";

  async getFileHost(): Promise<string> {
    return process.env.BETTER_AUTH_URL || "http://localhost:3000";
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    await fs.mkdir(this.uploadDir, { recursive: true });
    const filename = `${Date.now()}${extname(file.originalname)}`;
    const filepath = join(this.uploadDir, filename);
    await fs.writeFile(filepath, file.buffer);
    const host = await this.getFileHost();
    return `${host}/uploads/${filename}`;
  }

  async uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    return Promise.all(files.map((f) => this.uploadFile(f)));
  }
}
