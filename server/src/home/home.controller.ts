import { Controller, Get } from "@nestjs/common";
import { AllowAnonymous } from "@thallesp/nestjs-better-auth";
import { HomeService } from "./home.service";
import { success } from "../common/helpers/result.helper";
import { Result } from "../common/interfaces/result.interface";

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get("indexCount")
  @AllowAnonymous()
  async indexCount(): Promise<Result> {
    const data = await this.homeService.getIndexCount();
    return success(data);
  }

  @Get("indexBlog")
  @AllowAnonymous()
  async indexBlog(): Promise<Result> {
    const data = await this.homeService.getIndexBlog();
    return success(data);
  }
}
