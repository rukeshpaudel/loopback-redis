import {inject} from '@loopback/core';
import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {CustomerDataSource} from '../datasources';
import {Customer} from '../models';

export class CustomerRepository extends DefaultCrudRepository<
  Customer
> {
  constructor(
    @inject('datasources.customer') dataSource: CustomerDataSource,
  ) {
    super(Customer, dataSource);
  }
}
