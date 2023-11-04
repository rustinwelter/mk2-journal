import dialogue from "./data";

export function onRequestGet() {
  return Response.json(dialogue);
}
