import {injectable, /* inject, */ BindingScope, Provider} from '@loopback/core';

/*
 * Fix the service type. Possible options can be:
 * - import {Mailtrap} from 'your-module';
 * - export type Mailtrap = string;
 * - export interface Mailtrap {}
 */
export type Mailtrap = unknown;

@injectable({scope: BindingScope.TRANSIENT})
export class MailtrapProvider implements Provider<Mailtrap> {
  constructor(/* Add @inject to inject parameters */) {}

  value() {
    // Add your implementation here
    throw new Error('To be implemented');
  }
}
