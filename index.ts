const server = Bun.serve({
    port: 3005,
    fetch(request) {
      return new Response("Welcome to Buns!");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);
