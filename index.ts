const server = Bun.serve({
    port: 3003,
    fetch(request) {
      return new Response("Welcome to Buns!");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);
