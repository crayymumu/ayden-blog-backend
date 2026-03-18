import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import { UploadService } from "./upload.service";
import { success } from "../common/helpers/result.helper";
import { Result } from "../common/interfaces/result.interface";

@Controller()
@AllowAnonymous()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("filehost")
  @UseInterceptors(FileInterceptor("file"))
  async filehost(@UploadedFile() _file: Express.Multer.File): Promise<Result> {
    const host = await this.uploadService.getFileHost();
    return success(host);
  }

  @Post("fileupload")
  @UseInterceptors(FileInterceptor("file"))
  async fileupload(@UploadedFile() file: Express.Multer.File): Promise<Result> {
    const path = await this.uploadService.uploadFile(file);
    return success(path);
  }

  @Post("filesupload")
  @UseInterceptors(FilesInterceptor("file"))
  async filesupload(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<Result> {
    const paths = await this.uploadService.uploadFiles(files);
    return success(paths);
  }
}
