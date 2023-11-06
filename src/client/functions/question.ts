import { client } from "../client";
import { Collections } from "../../collections/collections.enum";

export async function question(collection: Collections, question: string) {
  return await client.graphql
    .get()
    .withClassName(collection)
    .withAsk({ question })
    .withFields('memberName _additional { answer { hasAnswer property result startPosition endPosition } }')
    .withLimit(5)
    .do()
}
