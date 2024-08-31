import { TasksService } from '../services';
import { TaskDto } from '../dto';
import { Controller, Get, Post, Put, Delete } from 'elysia-decorators';

@Controller('/tasks')
export class TasksController {

  constructor(private  tasksService: TasksService) {
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

  @Post('/', {
    config: { allowMeta: false },
    body: TaskDto.taskBody, 
    response: TaskDto.taskResponse
  })
  async create({ body }: { body: typeof TaskDto.taskBody }) {
    return this.tasksService.createTask({ title: body.title as string });
  }

  @Get('/:id', {
    config: { allowMeta: false },
    params: TaskDto.taskParams,
    response: TaskDto.taskResponse
  })
  async show({ params }: { params: typeof TaskDto.taskParams }) {
    return this.tasksService.getTask(params.id);
  }

  @Put('/:id', {
    config: { allowMeta: false },
    params: TaskDto.taskParams,
    body: TaskDto.taskBody,
    response: TaskDto.taskResponse 
  })
  async update({ params, body }: { params: typeof TaskDto.taskParams, body: typeof TaskDto.taskBody }) {
    return this.tasksService.updateTask({ id: params.id, title: body.title as string });
  }

  @Delete('/:id')
  async destroy({ params }: { params: typeof TaskDto.taskParams }) {
    return this.tasksService.deleteTask(params.id);
  }

}