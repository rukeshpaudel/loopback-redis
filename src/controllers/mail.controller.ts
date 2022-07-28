import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Mail} from '../models';
import {MailRepository} from '../repositories';

export class MailController {
  constructor(
    @repository(MailRepository)
    public mailRepository : MailRepository,
  ) {}

  @post('/mail')
  @response(200, {
    description: 'Mail model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mail)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mail, {
            title: 'NewMail',
            
          }),
        },
      },
    })
    mail: Mail,
  ): Promise<Mail> {
    return this.mailRepository.create(mail);
  }

  @get('/mail/count')
  @response(200, {
    description: 'Mail model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mail) where?: Where<Mail>,
  ): Promise<Count> {
    return this.mailRepository.count(where);
  }

  @get('/mail')
  @response(200, {
    description: 'Array of Mail model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mail, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mail) filter?: Filter<Mail>,
  ): Promise<Mail[]> {
    return this.mailRepository.find(filter);
  }

  @patch('/mail')
  @response(200, {
    description: 'Mail PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mail, {partial: true}),
        },
      },
    })
    mail: Mail,
    @param.where(Mail) where?: Where<Mail>,
  ): Promise<Count> {
    return this.mailRepository.updateAll(mail, where);
  }

}
