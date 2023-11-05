
export const teamMember = {
  "class": "TeamMember",
  "vectorizer": "text2vec-openai",
  "moduleConfig": {
    "text2vec-openai": {},
    "generative-cohere": {},
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
