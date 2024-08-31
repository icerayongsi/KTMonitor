import { Controller, Get } from "elysia-decorators";
import BaseController from "./base.controller";
import TaskDto from "../dto/task.dto";
import { TasksService } from '../services';

@Controller('/test')
export class TestController extends BaseController {

    protected readonly tasksService: TasksService;

    constructor() {
        super(__filename);

        this.tasksService = new TasksService();
    }

    @Get('/', {
        config: { allowMeta: false },
        query: TaskDto.taskQuery, 
        response: TaskDto.taskListResponse
    })
    async index({ query }: { query: typeof TaskDto.taskQuery }) {
      return this.tasksService.getAllTasks(query.limit);
      
    }
    
}