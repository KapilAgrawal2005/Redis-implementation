const client = require("./client.js");

async function init() {
  //   await client.set("msg:1", "Hello from Node and Kapil");
  //   const result = await client.get("msg:1");

  //   await client.set("msg:2", "Hello from Node and Kapil 2");
  //   await client.expire("msg:2", 20);
  const result = await client.get("msg:2");
  console.log("the resulst is ->", result);
}

init();
