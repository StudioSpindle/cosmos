import {logResult} from "./utils/log-result";
import {errorHandler} from "./utils/error-handler";
import {question} from "./client/functions/question";
import {Collections} from "./collections/collections.enum";

import { addClassToSchema } from "./schema-modifiers/add-class-to-schema";
import { removeClassFromSchema } from "./schema-modifiers/remove-class-from-schema";
import {teamMembersImport} from "./collections/team-members/team-members-import";
import {getObjects} from "./client/introspection/get-objects";
import {teamMember} from "./collections/team-members/team-members";

/**
 * 1. Add class to schema
 */

// addClassToSchema(teamMember).then().catch(errorHandler);

/**
 * 2. Import data into Weaviate
 */

// teamMembersImport().then(logResult).catch(errorHandler);

// Optionally remove classes (and data)
// removeClassFromSchema(Collections.TeamMember).then().catch(errorHandler);

/**
 * 3. Ask questions
 */

question(Collections.TeamMember, 'Who has painting as a hobby?').then(logResult).catch(errorHandler);

/**
 * Introspection
 */

// getObjects().then((weaviateObjectsList) => {
//   console.log('weaviateObjectsList: ', weaviateObjectsList);
// });
