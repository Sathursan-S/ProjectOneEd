const { StreamClient } = require("@stream-io/node-sdk");

const STREAM_API_KEY = 'zqzcsd5wgg5q';
const STREAM_API_SECRET = 'whknwpacp2dr26e9r5mm4yzup6b4dwezuedkr269tmpb5tmkvtp2anck2wed3dr4';
const callType = 'default';
const callId = 'my-first-call';

const createCall = async ({ creator_id, call_Id, call_Type, callData }) => {
  try {
    const client = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

    const call = client.video.call(callType, callId); // Pass call_Type here

    // Convert userId to string
    const creatorIdString = String(creator_id);

    await call.create(callData);

    console.log('Call created successfully');
  } catch (error) {
    console.error('Error creating call', error);
    throw error;
  }
};

module.exports = { createCall };

