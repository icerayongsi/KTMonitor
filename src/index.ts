import bearer from "@elysiajs/bearer";
import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { ErrorMessages } from "./utils";
import { decorators } from "elysia-decorators";

try {
  const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(bearer())
    .use(
      decorators({
        controllers: [__dirname + '/api/tasks/tasks.controller.ts']
      })
    )
    // TODO : implement interceptor data on response .onResponse(requestLogger)
    // TODO : implement when stop server .onStop()
    .onError(({ code, error, set }) => ErrorMessages(code, error, set));

    process.on('SIGINT', app.stop);
    process.on('SIGTERM', app.stop);
    app.listen(process.env.PORT!); // TODO : implement log when server is booting

    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
    );
    
} catch (error) {
  console.log('error booting the server');
  console.error(error);
}



