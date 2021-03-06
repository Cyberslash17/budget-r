import IRepository from '../../../core/dal/IRepository';
import Id from '../../../core/models/Id';
import { IOrder } from '../../../core/dal/Repository';

export class RepoStub<T extends Id> implements IRepository<T> {
  private db: T[];

  constructor() {
    this.db = Array<T>();
  }

  public async find(id: number): Promise<T> {
    return this.db.find(x => x.id === id);
  }

  public async get(filter: any, order: IOrder): Promise<T[]> {
    throw new Error('not implemented');
  }

  public add(entity: T): void {
    entity.id = this.db.length + 1;
    this.db.push(entity);
  }

  public delete(id: number): void {
    throw new Error('not implementd');
  }

  public update(entity: T): void {
    throw new Error('not implemented');
  }
}
