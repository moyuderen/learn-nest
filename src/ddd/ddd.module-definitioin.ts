import { ConfigurableModuleBuilder } from '@nestjs/common';

export type DddModuleOtions = {
  name: string;
  age: number;
};

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<DddModuleOtions>()
  .setClassMethodName('register')
  .setExtras({ isGlobal: true }, (definitioin, extras) => {
    return {
      ...definitioin,
      global: extras.isGlobal,
    };
  })
  .build();
