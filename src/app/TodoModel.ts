import {TodoInterface} from './todo.interface';

export class TodoModel implements TodoInterface {
    id: number;
    name: string;
    details: string;
    status: boolean;
    date: Date;
}
