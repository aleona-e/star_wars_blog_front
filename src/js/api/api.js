const getAllCharacters = () => {
  return fetch("https://www.swapi.tech/api/people/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const charactersArray = resp.results;
      const charactersInfoPromiseArray = charactersArray.map((characterObj) => {
        const characterId = characterObj.uid;
        return getCharacterInfo(characterId);
      });
      return Promise.all(charactersInfoPromiseArray);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getCharacterInfo = (characterId) => {
  return fetch("https://www.swapi.tech/api/people/" + characterId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      console.log(resp.ok + "getCharacterInfo");
      console.log(resp.status);
      return resp.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFinalCharacterInfo = () => {
  return getAllCharacters().then((charactersInfoRespArray) => {
    const finalCharacterInfo = charactersInfoRespArray.map(
      (characterResponse) => {
        const characterObj = characterResponse.result;
        const characterProperties = characterObj.properties;
        const attributesKeys = Object.keys(characterProperties).slice(0, 6);
        const attributes = attributesKeys.map((key) => {
          return { label: key, value: characterProperties[key] };
        });
        const finalCharacterObject = {
          img: "https://starwars-visualguide.com/assets/img/characters/" + characterObj.uid + ".jpg",
          name: characterProperties.name,
          attributes: attributes,
          description: characterObj.description,
        };
        return finalCharacterObject;
      } 
    );
    return new Promise((resolve, reject) => {
      resolve(finalCharacterInfo)
    })
  });
};
export const getAllPlanets = () => {
  return fetch("https://www.swapi.tech/api/planets/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const planetsArray = resp.results;
      const planetsInfoPromiseArray = planetsArray.map((planetObj) => {
        const planetId = planetObj.uid;
        return getPlanetInfo(planetId);
      });
      return Promise.all(planetsInfoPromiseArray);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getPlanetInfo = (planetId) => {
  return fetch("https://www.swapi.tech/api/planets/" + planetId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFinalPlanetInfo = () => {
  return getAllPlanets().then((planetsInfoRespArray) => {
    const finalPlanetInfo = planetsInfoRespArray.map(
      (planetsResponse) => {
        const planetObj = planetsResponse.result;
        const planetProperties = planetObj.properties;
        const attributesKeys = Object.keys(planetProperties).slice(0, 6);
        const attributes = attributesKeys.map((key) => {
          return { label: key, value: planetProperties[key] };
        });
        const finalPlanetObject = {
          img: "https://starwars-visualguide.com/assets/img/planets/" + planetObj.uid + ".jpg",
          name: planetProperties.name,
          attributes: attributes,
          description: planetObj.description,
        };
        return finalPlanetObject;
      } 
    );
    return new Promise((resolve, reject) => {
      resolve(finalPlanetInfo)
    })
  });
};
