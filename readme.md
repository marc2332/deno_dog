Deno wrapper for https://dog.ceo/dog-api/

Usage:

```javascript
import {
  getAllBreeds,
  getAllDogsByBreed,
  getADogByBreed,
  getADog,
  getSubBreedsOf,
} from "https://raw.githubusercontent.com/marc2332/deno_dog/master/mod.ts";

console.log(await getAllBreeds());
console.log(await getAllDogsByBreed("retriever"));
console.log(await getADogByBreed("retriever"));
console.log(await getADog());
console.log(await getSubBreedsOf("greyhound"));
```
