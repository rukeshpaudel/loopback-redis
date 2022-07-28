import {Entity, model, property} from '@loopback/repository';

@model()
export class Mail extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true
  })
  from: string;

  @property({
    type: 'string',
    required: true,
  })
  to: string;

  @property({
    type: 'string',
  })
  subject?: string;

  @property({
    type: 'string',
    required: true,
  })
  message: string;


  constructor(data?: Partial<Mail>) {
    super(data);
  }
}

export interface MailRelations {
  // describe navigational properties here
}

export type MailWithRelations = Mail & MailRelations;
