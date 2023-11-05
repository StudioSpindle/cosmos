# Cosmos

To run application place an .env file in the root of the project.

You will need three accounts and get API keys:

1. https://console.weaviate.cloud/ 
2. https://platform.openai.com/ Used for both text-based vectorization capabilities (converting text data into numerical vectors) and generative text generation tasks
3. https://cohere.com/ 

Then for the .env file:

```shell
WCS_HOST=https://<your-url>.weaviate.network
WCS_API_KEY=<api-key>
OPEN_AI_KEY=<api-key>
COHERE_API_KEY=<api-key>
```

Then run:

```shell
npm run start
```
