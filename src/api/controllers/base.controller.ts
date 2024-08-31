import { Elysia } from "elysia";
import { decorators } from "elysia-decorators";

export default class BaseController {
    protected elysiaInstance!: Elysia;

    constructor(creteaBy: string) {
        console.log(creteaBy);
        try {
            this.elysiaInstance = new Elysia()
                .use(decorators({
                    controllers: [creteaBy]
                }));
            console.log(
                `Controller ${creteaBy} created successfully`
            );  
        } catch (error) {
            console.log('error to create controller');
            console.error(error);
        }
    }
}