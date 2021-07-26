exports.handler = async function (event, context) {
  console.log("event")
  console.log(event.headers['x-from'])
  console.log("context")
  console.log(context)
  const { TEST_VARIABLE } = process.env;
  console.log(`env_var: ${TEST_VARIABLE}`)

  if(event.headers['x-from'] != TEST_VARIABLE){
    return{
      statusCode: 500,
      body: JSON.stringify({
        msg: "Unauthorized"
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello World"
    })
  }
}