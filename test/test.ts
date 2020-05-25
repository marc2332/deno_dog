import {
  getAllBreeds,
  getAllDogsOfBreed,
  getADogOfBreed,
  getADog,
  getSubBreedsOf,
} from "../mod.ts";
import {
  equal,
  assertStrContains,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("getAllBreeds", async () => {
  const allBreeds = await getAllBreeds();
  equal(Array.isArray(allBreeds), true);
});

Deno.test("getAllDogsOfBreed", async () => {
  const allDogs = await getAllDogsOfBreed("retriever");
  equal(Array.isArray(allDogs), true);
});

Deno.test("getADogOfBreed", async () => {
  const theDog = await getADogOfBreed("retriever");
  assertStrContains(theDog, "/images.dog.ceo");
});

Deno.test("getADog", async () => {
  const theDog = await getADog();
  assertStrContains(theDog, "/images.dog.ceo");
});

Deno.test("getSubBreedsOf", async () => {
  const subRreeds = await getSubBreedsOf("greyhound");
  equal(Array.isArray(subRreeds), true);
});
