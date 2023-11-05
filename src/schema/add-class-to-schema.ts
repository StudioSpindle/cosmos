import {client} from "../client/client";

export async function addClassToSchema(classObject: object) {
  const res = await client.schema.classCreator().withClass(classObject).do();
  console.log('Schema: ', res);
}
