const axios = require("axios");
const Dev = require("../models/Dev");

const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(_, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};
