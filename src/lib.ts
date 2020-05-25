const RANDOM_ENDPOINT = "https://dog.ceo/api/breeds/image/random";
const BY_BREED_ENDPOINT = "https://dog.ceo/api/breed/";
const BREEDS_ENDPOINT = "https://dog.ceo/api/breeds/list/all";
const SUB_BREED_ENDPOINT = "https://dog.ceo/api/breed/";

function fetchByEndpoint(endpoint: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(endpoint).then((res) => {
      res.json().then((json) => resolve(json.message));
    }).catch((err) => {
      reject(err);
    });
  });
}

export const getAllBreeds = async (): Promise<Array<string>>  => {
  return fetchByEndpoint(BREEDS_ENDPOINT);
};

export const getAllDogsOfBreed = async (breed: string): Promise<Array<string>>  => {
  return fetchByEndpoint(`${BY_BREED_ENDPOINT}${breed}/images`);
};

export const getADogOfBreed = async (breed: string): Promise<string>  => {
  const allDogs: Array<string> = await getAllDogsOfBreed(breed);
  return allDogs[Math.floor(Math.random() * allDogs.length)];
};

export const getADog = async (): Promise<string> => {
  return fetchByEndpoint(RANDOM_ENDPOINT);
};

export const getSubBreedsOf = async (breed: string): Promise<Array<string>>  => {
  return fetchByEndpoint(`${SUB_BREED_ENDPOINT}${breed}/list`);
};