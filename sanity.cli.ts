/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: { projectId: 'mtm7yg1a', dataset: 'production' },
  deployment: { appId: 'awf09rq9nv4kerm4hiu8gz3r' },
})
