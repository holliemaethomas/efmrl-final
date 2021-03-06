import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "chatmessages",
    // 'Key' defines the partition key and sort key of the item to be removed
    Key: {
      room: event.pathParameters.room,
      messageId: event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("delete", params);
    return success({ status: true });
  } catch (e) {
    console.log({e});
    return failure({ status: false });
  }
}