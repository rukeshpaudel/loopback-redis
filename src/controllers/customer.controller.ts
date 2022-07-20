import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
  juggler,
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
import {Customer} from '../models';
import {CustomerRepository} from '../repositories';
import redis from 'redis';

export class CustomerController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository: CustomerRepository,
  ) {}

  
  @post('/save-data-to-redis')
  async saveDatatoRedis(): Promise<void> {
    try {
      let timeForExpiring = 300;
      await this.customerRepository.set('customer_name', {
        customer_name: 'Rukesh',
      });

      await this.customerRepository.expire(
        'customer_name',
        timeForExpiring * 1000,
      ); //to dave data in milliseconds

      //to get data in redis use

      await this.customerRepository.get('customer_name');

      //to delete data in redis use

      await this.customerRepository.get('customer_name');
    } catch (exception) {
      console.log(exception);
    }
  }

  // @get('/customers')
  // @response(200, {
  //   description: 'Array of Customer model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(Customer, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })

  // async find(
  //   @param.filter(Customer) filter?: Filter<Customer>,
  //   ): Promise<Customer[]> {
  //     return this.customerRepository.find(filter);
  //   }

  //     @post('/customers')
  //     @response(200, {
  //       description: 'Customer model instance',
  //       content: {'application/json': {schema: getModelSchemaRef(Customer)}},
  //     })
  //     async create(
  //       @requestBody({
  //         content: {
  //           'application/json': {
  //             schema: getModelSchemaRef(Customer, {
  //               title: 'NewCustomer',
  //               exclude: ['id'],
  //             }),
  //           },
  //         },
  //       })
  //       customer: Omit<Customer, 'id'>,
  //     ): Promise<Customer> {
  //       return this.customerRepository.create(customer);
  //     }

  //     @get('/customers/count')
  //     @response(200, {
  //       description: 'Customer model count',
  //       content: {'application/json': {schema: CountSchema}},
  //     })
  //     async count(
  //       @param.where(Customer) where?: Where<Customer>,
  //     ): Promise<Count> {
  //       return this.customerRepository.count(where);
  //     }

  //   @patch('/customers')
  //   @response(200, {
  //     description: 'Customer PATCH success count',
  //     content: {'application/json': {schema: CountSchema}},
  //   })
  //   async updateAll(
  //     @requestBody({
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Customer, {partial: true}),
  //         },
  //       },
  //     })
  //     customer: Customer,
  //     @param.where(Customer) where?: Where<Customer>,
  //   ): Promise<Count> {
  //     return this.customerRepository.updateAll(customer, where);
  //   }

  //   @get('/customers/{id}')
  //   @response(200, {
  //     description: 'Customer model instance',
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Customer, {includeRelations: true}),
  //       },
  //     },
  //   })
  //   async findById(
  //     @param.path.number('id') id: any,
  //     @param.filter(Customer, {exclude: 'where'}) filter?: FilterExcludingWhere<Customer>
  //   ): Promise<Customer> {
  //     return this.customerRepository.findById(id, filter);
  //   }

  //   @patch('/customers/{id}')
  //   @response(204, {
  //     description: 'Customer PATCH success',
  //   })
  //   async updateById(
  //     @param.path.number('id') id: any,
  //     @requestBody({
  //       content: {
  //         'application/json': {
  //           schema: getModelSchemaRef(Customer, {partial: true}),
  //         },
  //       },
  //     })
  //     customer: Customer,
  //   ): Promise<void> {
  //     await this.customerRepository.updateById(id, customer);
  //   }

  //   @put('/customers/{id}')
  //   @response(204, {
  //     description: 'Customer PUT success',
  //   })
  //   async replaceById(
  //     @param.path.string('id') id: any,
  //     @requestBody() customer: Customer,
  //   ): Promise<void> {
  //     await this.customerRepository.replaceById(id, customer);
  //   }

  //   @del('/customers/{id}')
  //   @response(204, {
  //     description: 'Customer DELETE success',
  //   })
  //   async deleteById(@param.path.string('id') id: any): Promise<void> {
  //     await this.customerRepository.deleteById(id);
  //   }
}
