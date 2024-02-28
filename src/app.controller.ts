import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { SimpleFlowRun } from './entities'; // Ensure this import matches your actual file structure

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Example endpoint to execute a specific flow
  @Get('execute-flow')
  async executeFlow(@Query('flowId') flowId?: string): Promise<void> {
    if (!flowId) {
      // Updated error handling to throw an HttpException
      throw new HttpException('Flow ID is required', HttpStatus.BAD_REQUEST);
    }
    // Since we're simulating the execution and not returning an entity, adjust the return type
    await this.appService.executeFlow(flowId);

    // You might want to return some kind of confirmation message or status
    // Since the method's return type is void, we do not return anything here
    // If you want to return a message, change the return type and include a return statement
  }
}
