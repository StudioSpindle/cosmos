import {client} from "../client";

export async function getObjects() {
  return await client.data.getter().do();
}
