import {EnvironmentProperties} from './model/environment.interface';

export const environment: EnvironmentProperties = {
  production: false,

  coreUrl: 'http://localhost:8080/api',
  authorizerUrl: 'http://localhost:8081/api'
};
