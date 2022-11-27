'use strict';

/**
 * todolist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todolist.todolist');
