import {client} from "../client/client";

export async function removeClassFromSchema(className: string) {
  await client.schema
    .classDeleter()
    .withClassName(className)
    .do();
}
