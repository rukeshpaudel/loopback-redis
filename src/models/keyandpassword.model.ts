import {Model, model, property} from '@loopback/repository';

@model()
export class Keyandpassword extends Model {
  @property({
    type: 'string',
  })
  resetKey?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  confirmpassword?: string;


  constructor(data?: Partial<Keyandpassword>) {
    super(data);
  }
}

export interface KeyandpasswordRelations {
  // describe navigational properties here
}

export type KeyandpasswordWithRelations = Keyandpassword & KeyandpasswordRelations;
