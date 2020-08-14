import { checkCategoryRelated } from "utils";

const BASE = "https://www.breakingbadapi.com/api/";
const CHARACTER_ENDPOINT = "characters/";
const EPISODE_ENDPOINT = "episodes/";
const QUOTE_ENDPOINT = "quotes/";
const SERIES_PARAM = "?series=Breaking+Bad";
const NAME_PARAM = "&name=";

class BBService {
  getResource = async (endpoint, params = "") => {
    const res = await fetch(`${BASE}${endpoint}${SERIES_PARAM}${params}`);
    if (!res.ok) {
      const error = new Error(`Could not fetch ${endpoint}, received ${res.status}`);
      error.code = res.status;
      console.error(error);
      throw error;
    }

    return await res.json();
  };

  getCharacter = async (name) => {
    const charater = await this.getResource(`${CHARACTER_ENDPOINT}`, `${NAME_PARAM}${name}`);
    return this._transformCharacter(...charater);
  };

  getAllCharacters = async () => {
    const allCharaters = await this.getResource(CHARACTER_ENDPOINT);
    return allCharaters.map(this._transformCharacter).filter((char) => checkCategoryRelated(char.category));
  };

  getEpisode = async (id) => {
    const episode = await this.getResource(`${EPISODE_ENDPOINT}${id}`);
    return this._transformEpisode(episode);
  };

  getAllEpisodes = async () => {
    const allEpisodes = await this.getResource(EPISODE_ENDPOINT);
    return allEpisodes.map(this._transformEpisode);
  };

  getQuote = async (id) => {
    const quote = await this.getResource(`${QUOTE_ENDPOINT}${id}`);
    return this._transformQuote(quote);
  };

  getAllQuotes = async () => {
    const allQuotes = await this.getResource(QUOTE_ENDPOINT);
    return allQuotes.map(this._transformQuote);
  };

  _transformCharacter(characterItem) {
    return {
      id: characterItem.char_id,
      img: characterItem.img,
      name: characterItem.name,
      nickname: characterItem.nickname,
      actor: characterItem.portrayed,
      birthday: characterItem.birthday,
      occupation: characterItem.occupation,
      status: characterItem.status,
      category: characterItem.category,
    };
  }

  _transformEpisode(episodeItem) {
    return {
      id: episodeItem.episode_id,
      title: episodeItem.title,
      season: episodeItem.season,
      date: episodeItem.air_date,
      characters: episodeItem.characters,
      episode: episodeItem.episode,
    };
  }

  _transformQuote(quoteItem) {
    return {
      id: quoteItem.quote_id,
      quote: quoteItem.quote,
      author: quoteItem.author,
    };
  }
}

const serviceInstance = new BBService();
Object.freeze(serviceInstance);
export default serviceInstance;
