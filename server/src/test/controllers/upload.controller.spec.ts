import { Test, TestingModule } from "@nestjs/testing";
import { UploadController } from "../../upload/upload.controller";
import { UploadService } from "../../upload/upload.service";

const mockUploadService = {
  getFileHost: jest.fn(),
  uploadFile: jest.fn(),
  uploadFiles: jest.fn(),
};

describe("UploadController", () => {
  let controller: UploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [{ provide: UploadService, useValue: mockUploadService }],
    }).compile();
    controller = module.get(UploadController);
    jest.clearAllMocks();
  });

  it("filehost", async () => {
    mockUploadService.getFileHost.mockResolvedValue("http://localhost:3000");
    const file = {
      originalname: "test.png",
      buffer: Buffer.from(""),
    } as Express.Multer.File;
    const result = await controller.filehost(file);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: "http://localhost:3000",
    });
  });

  it("fileupload", async () => {
    mockUploadService.uploadFile.mockResolvedValue(
      "http://localhost:3000/uploads/test.png",
    );
    const file = {
      originalname: "test.png",
      buffer: Buffer.from(""),
    } as Express.Multer.File;
    const result = await controller.fileupload(file);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: "http://localhost:3000/uploads/test.png",
    });
  });

  it("filesupload", async () => {
    mockUploadService.uploadFiles.mockResolvedValue(["path1", "path2"]);
    const files = [
      { originalname: "a.png", buffer: Buffer.from("") },
      { originalname: "b.png", buffer: Buffer.from("") },
    ] as Express.Multer.File[];
    const result = await controller.filesupload(files);
    expect(result).toEqual({
      code: 200,
      message: "SUCCESS",
      data: ["path1", "path2"],
    });
  });
});
