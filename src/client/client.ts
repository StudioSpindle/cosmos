import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';

const { WCS_HOST, WCS_API_KEY, OPEN_AI_KEY } = process.env;

if (typeof WCS_HOST !== 'string' || typeof WCS_API_KEY !== 'string' || typeof OPEN_AI_KEY !== 'string') {
  throw new Error("One or more required environment variables are not defined or not of type 'string'");
}

export const client: WeaviateClient = weaviate.client({
  scheme: 'https',
  host: WCS_HOST,
  apiKey: new ApiKey(WCS_API_KEY),
  headers: { 'X-OpenAI-Api-Key': OPEN_AI_KEY },
});
