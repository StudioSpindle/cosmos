
export const team = {
  "class": "Team",
  "vectorizer": "text2vec-cohere",
  "moduleConfig": {
    "generative-openai": {}
  },
  "properties": [
    {
      "name": "teamName",
      "dataType": ["text"]
    },
    {
      "name": "memberName",
      "dataType": ["text"]
    },
    {
      "name": "jobDescription",
      "dataType": ["text"]
    },
    {
      "name": "responsibilities",
      "dataType": ["text"]
    },
    {
      "name": "education",
      "dataType": ["text"]
    },
    {
      "name": "hobbies",
      "dataType": ["text"]
    }
  ]
}
