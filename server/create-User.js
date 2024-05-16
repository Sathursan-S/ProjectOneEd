const { StreamClient } = require('@stream-io/node-sdk');

const createUser = async (userId, role, name) => {
  const STREAM_API_KEY = 'zqzcsd5wgg5q';
  const STREAM_API_SECRET = 'whknwpacp2dr26e9r5mm4yzup6b4dwezuedkr269tmpb5tmkvtp2anck2wed3dr4';
  
  try {
    const client = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

    const newUser = {
                    id: userId,
                    role: role,
                    name: name,
                  };       
                  await client.upsertUsers({
                    users: {
                      [newUser.id]: newUser,
                    },
                  });

    console.log('User upserted successfully');

    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const token = client.createToken(newUser.id, exp);

    console.log('Token generated:', token);
    return { userId, token };
  } catch (error) {
    console.error('Error generating Stream token:', error);
    throw error;
  }
};

module.exports = { createUser };
