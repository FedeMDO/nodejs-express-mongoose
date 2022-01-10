import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface Greeting {
  name: string;
  message: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Greeting>({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

// 3. Create a Model.
export const GreetingModel = model<Greeting>('Greeting', schema);
