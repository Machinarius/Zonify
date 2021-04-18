import * as fs from "fs";
import * as path from "path";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import { Express } from "express";

const schemaText = fs.readFileSync(path.join(__dirname, "schema.graphql")).toString("utf-8");
const schema = buildSchema(schemaText);

const resolverRoot = {
  hello: () => {
    return "Hello World"
  }
};

export default function configureGraphQL(app: Express) {
  const isProduction = process.env["NODE_ENV"] == "production";
  const gqlMiddleware = graphqlHTTP({
    schema,
    rootValue: resolverRoot,
    graphiql: !isProduction
  });
  app.use("/api", gqlMiddleware);
}