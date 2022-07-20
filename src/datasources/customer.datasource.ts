import {inject, lifeCycleObserver, LifeCycleObserver, ValueOrPromise} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'customer',
  connector: 'kv-redis',
  url: '',
  host: '',
  port: 6379,
  password: '',
  db: 0
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CustomerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'customer';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.customer', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }



  stop():ValueOrPromise<void> // to shutdown app gracefull after disconnecting datasource
  {
    return super.disconnect();
  }
}
