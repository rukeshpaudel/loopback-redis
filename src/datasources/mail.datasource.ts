import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mail',
  connector: 'mail',
  "tranasports":[{
    "type": "smtp",
    "host" : "smtp.mailtrap.io",
    "secure" : false,
    "port" : 2525,
    "tls":{
      "rejectUnauthorized": false
    },
    "auth":{
      "user" : "f2315e41b19484",
      "pass" :"35ffdd01356c42"
    }

  }]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MailDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mail';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mail', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
