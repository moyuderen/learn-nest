import { ConfigurableModuleBuilder } from '@nestjs/common';

export type CccModuleOtions = {
  name: string;
  age: number;
};

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<CccModuleOtions>().build();
