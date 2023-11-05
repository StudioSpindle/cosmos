import { team } from "./collections/team";
import { addClassToSchema } from "./schema/add-class-to-schema";
import { removeClassFromSchema } from "./schema/remove-class-from-schema";

addClassToSchema(team).then().catch((error) => {
  throw new Error(error);
});

removeClassFromSchema('').then().catch((error) => {
  throw new Error(error);
});
