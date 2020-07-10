"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    const { id } = ctx.state.user;
    let entities = await strapi.services.operations.find();
    entities = entities.filter((entity) => entity.user.id === id);

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.operations })
    );
  },
};
