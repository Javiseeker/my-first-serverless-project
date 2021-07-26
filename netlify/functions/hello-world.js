exports.handler = async function () {
  const headers = {
    'Access-Control-Allow-Origin': 'main--my-first-serveless-site-javisito.netlify.app',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World"
    })
  }
}