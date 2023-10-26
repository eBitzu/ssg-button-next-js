import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: '9t62yyret4kd',
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});
