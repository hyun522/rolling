
const getInformation = async () => {
  try {
    const response = await fetch(
      'https://rolling-api.vercel.app/2-8/recipients/?limit=0',
    );
    const body = await response.json();
    return body;
  } catch (err) {
    console.log(err.message);
  }

  return;
};

export defalut getInformation;


