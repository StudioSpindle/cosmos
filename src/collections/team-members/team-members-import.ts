import { client } from "../../client/client";
import teamsJson from "./documents/teams.json";

export async function teamMembersImport() {
  let batcher = client.batch.objectsBatcher();

  // When importing the teamsJson, or when the teamsJson becomes large,
  // implement batching system as per example on https://weaviate.io/developers/weaviate/quickstart#step-5-add-objects
  for (const team of teamsJson) {

    const memberObjects = team.members.map((teamMember) => ({
      class: 'TeamMember',
      properties: {
        teamName: team.teamName,
        memberName: teamMember.memberName,
        jobDescription: teamMember.jobDescription,
        responsibilities: teamMember.responsibilities,
        education: teamMember.education,
        hobbies: teamMember.hobbies,
      }
    }));

    batcher.withObjects(...memberObjects);
  }

  await batcher.do().then((batchResponse) => {
    batchResponse.map((weaviateObjectsGet) => {

      if (weaviateObjectsGet.result.status === 'FAILED') {
        console.log(weaviateObjectsGet.result.errors);
        return;
      }

      if (weaviateObjectsGet.result.status === 'SUCCESS') {
        console.log(`added teamMember ${weaviateObjectsGet.properties.memberName} to ${weaviateObjectsGet.class}`)
      }
    });
  });
}
