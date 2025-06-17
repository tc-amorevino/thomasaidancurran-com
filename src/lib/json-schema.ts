import fs from 'node:fs';

import { z } from 'astro:content';
import { zodToJsonSchema } from 'zod-to-json-schema';

/**
 * Generate a JSON schema from a Zod schema and write it to a file. The file
 * will will be saved to the `./src/.json-schemas` directory.
 * @param schema The Zod schema to generate a JSON schema from.
 * @param fileName The name of the file to save the JSON schema to. Example:
 * `content-item-schema.json`
 */
function generateJsonSchema(
  schema: z.ZodType<unknown, z.ZodTypeDef, unknown>,
  fileName: string,
) {
  const schemaFolderLocation = './src/.json-schemas/';
  const jsonSchema = zodToJsonSchema(schema);
  const jsonSchemaString = JSON.stringify(jsonSchema, null, 2);

  if (!fs.existsSync(schemaFolderLocation)) {
    fs.mkdirSync(schemaFolderLocation);
  }

  fs.writeFileSync(`${schemaFolderLocation}${fileName}`, jsonSchemaString, {
    flag: 'w',
  });

  return;
}

export { generateJsonSchema };
