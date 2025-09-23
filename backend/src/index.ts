import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({strapi}: { strapi: Core.Strapi }) {

    /**
     * Lifecycle hook triggered after a new user is created.
     * Ensures that a user profile is created with either the provided full name and bio
     * or a default generated username and bio if missing.
     * @param {any} event - The event object containing the created user's details.
     */
    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"], // Applies only to users in users-permissions

      async afterCreate(event: any) {
        console.log(542111);
      },
      
      async beforeCreate(event) {
        const {data} = event.params;

        // if no username provided, use email as username
        data.username = data.email;
        
      },
    })
  }
}
