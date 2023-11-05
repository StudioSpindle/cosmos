// import { addClassToSchema } from "./schema-modifiers/add-class-to-schema";
// import { removeClassFromSchema } from "./schema-modifiers/remove-class-from-schema";
//
// removeClassFromSchema('Team').then().catch((error) => {
//   throw new Error(error);
// });

// addClassToSchema(teamMember).then().catch((error) => {
//   throw new Error(error);
// });

import {teamMembersImport} from "./collections/team-members/team-members-import";
import {getObjects} from "./client/introspection/get-objects";

teamMembersImport().then(async (result) => {
  console.log('result: ', result);
}).catch((error) => {
  throw new Error(error);
});

getObjects().then((weaviateObjectsList) => {
  console.log('weaviateObjectsList: ', weaviateObjectsList);
});
