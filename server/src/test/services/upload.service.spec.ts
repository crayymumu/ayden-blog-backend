import { Test, TestingModule } from "@nestjs/testing";
import { UploadService } from "../../upload/upload.service";
import { promises as fs } from "fs";

jest.mock("fs", () => ({
  promises: {
    mkdir: jest.fn().mockResolvedValue(undefined),
    writeFile: jest.fn().mockResolvedValue(undefined),
  },
}));

describe("UploadService", () => {
  let service: UploadService;

  beforeEach(async () => {
    process.env.BETTER_AUTH_URL = "http://localhost:3000";
    process.env.UPLOAD_DIR = "./uploads";
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadService],
    }).compile();
    service = module.get(UploadService);
    jest.clearAllMocks();
  });

  it("getFileHost", async () => {
    const result = await service.getFileHost();
    expect(result).toBe("http://localhost:3000");
  });

  it("uploadFile", async () => {
    const file = {
      originalname: "test.png",
      buffer: Buffer.from("data"),
    } as Express.Multer.File;
    const result = await service.uploadFile(file);
    expect(result).toContain("http://localhost:3000/uploads/");
    expect(result).toContain(".png");
    expect(fs.mkdir).toHaveBeenCalled();
    expect(fs.writeFile).toHaveBeenCalled();
  });

  it("uploadFiles", async () => {
    const files = [
      { originalname: "a.jpg", buffer: Buffer.from("a") },
      { originalname: "b.jpg", buffer: Buffer.from("b") },
    ] as Express.Multer.File[];
    const result = await service.uploadFiles(files);
    expect(result).toHaveLength(2);
    expect(result[0]).toContain(".jpg");
  });
});
