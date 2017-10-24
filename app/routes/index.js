import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    login () {
      // Check out the docs for all the options:
      // https://auth0.com/docs/libraries/lock/customization
      const lockOptions = {
        auth: {
          params: {
            scope: 'openid user_metadata'
          }
        }
      };

      this.get('session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout () {
      this.get('session').invalidate();
    }
  }
});
