
export const teamMember = {
  "class": "TeamMember",
  "vectorizer": "text2vec-openai",
  "moduleConfig": {
    "text2vec-openai": {},
    "qna-openai": {
      "model": "text-davinci-002",
      "maxTokens": 16,
      "temperature": 0.0,
      "topP": 1,
      "frequencyPenalty": 0.0,
      "presencePenalty": 0.0
    }
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
