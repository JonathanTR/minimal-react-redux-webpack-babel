### Why?
I keep finding myself in this predicament: I want to spin up a small side project
over the weekend. I want to use react + redux, I want to use ES6 syntax, and I want
to include things nicely, but all the boilerplate repos out there have a bunch of
shit included that I don't need, or that I'm not smart enough to understand that
I need. I'll probably have another iteration with some niceties, but here's the
barest of bones in my opinion.

`make run` will spin up a webpack-dev-server with hot module replacement. If you
don't see "Hello World!" at `localhost:9898`, ya done fucked up.

### Setup
1. `npm install`
2. `make run`
3. App will be available at `localhost:9898`