import {logResult} from "./utils/log-result";
import {errorHandler} from "./utils/error-handler";
import {question} from "./client/functions/question";
import {Collections} from "./collections/collections.enum";

// import { addClassToSchema } from "./schema-modifiers/add-class-to-schema";
// import { removeClassFromSchema } from "./schema-modifiers/remove-class-from-schema";
// import {teamMembersImport} from "./collections/team-members/team-members-import";
// import {getObjects} from "./client/introspection/get-objects";

/**
 * 1. Add class to schema
 */

// addClassToSchema(teamMember).then().catch(errorHandler);

// Optionally remove classes
//
// removeClassFromSchema('Team').then().catch(errorHandler);

/**
 * 2. Import data into Weaviate
 */

//
// teamMembersImport().then(logResult).catch(errorHandler);
//
// getObjects().then((weaviateObjectsList) => {
//   console.log('weaviateObjectsList: ', weaviateObjectsList);
// });

/**
 * 3. Ask questions
 */

// TODO: implement https://weaviate.io/developers/weaviate/modules/reader-generator-modules/qna-transformers
question(Collections.TeamMember, 'Who has the hobby to paint?').then(logResult).catch(errorHandler);

