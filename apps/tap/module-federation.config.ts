import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'tap',
  exposes: {
    './Module': 'apps/tap/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
