import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {MailDataSource} from '../datasources';
import {Mail} from '../models';
import { DefaultCrudRepository } from '@loopback/repository';
import {inject, Getter} from '@loopback/core';
import { repository } from '@loopback/repository';

export class MailRepository extends DefaultCrudRepository<
  Mail,
  Mail
> {
  
  constructor(
    @inject('datasources.mail') dataSource: MailDataSource,
    @repository.getter('MailRepository')
        mailRepositoryGetter: Getter<MailRepository>
  ) {
    super(Mail, dataSource);
  }
}
