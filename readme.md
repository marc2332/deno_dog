Deno wrapper for https://dog.ceo/dog-api/

Usage:

```javascript
import {
  getAllBreeds,
  getAllDogsOfBreed,
  getADogOfBreed,
  getADog,
  getSubBreedsOf,
} from "https://deno.land/x/dog/mod.ts";

console.log(await getAllBreeds()); 
// List all available breeds
console.log(await getAllDogsOfBreed("retriever"));
// List all dogs of breed retriever
console.log(await getADogOfBreed("retriever"));
// Get a random dog of breed retriever
console.log(await getADog());
// Get a random dog of any breed
console.log(await getSubBreedsOf("greyhound"));
// List all available subbreeds of a breed
```
