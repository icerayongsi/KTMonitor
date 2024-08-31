import { Dto } from './dto';

export default class TaskDto extends Dto {

    static taskBody = Dto.t.Object({
        title: Dto.t.String({
            error: 'title is required with minimum length of 3',
            minLength: 3,
        }),
    });

    static taskResponse = Dto.t.Object({ id: Dto.t.Number(), title: Dto.t.String() });
    static taskListResponse = Dto.t.Array(TaskDto.taskResponse);
    static taskParams = Dto.t.Object({ id: Dto.t.Numeric() });
    static taskQuery = Dto.t.Object({ limit: Dto.t.Optional(Dto.t.Numeric()) });

}