import {inject} from '@loopback/core';
import {DefaultCrudRepository, DefaultKeyValueRepository } from '@loopback/repository';
import {CustomerDataSource} from '../datasources';
import {Customer, CustomerRelations} from '../models';

export class CustomerRepository extends DefaultKeyValueRepository<
  Customer
> {
  constructor(
    @inject('datasources.customer') dataSource: CustomerDataSource,
  ) {
    super(Customer, dataSource);
  }
}
