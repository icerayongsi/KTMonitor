import { t } from 'elysia';

export abstract class Dto {
    static t: typeof t = t;
}