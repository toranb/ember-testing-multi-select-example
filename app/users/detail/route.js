import Ember from 'ember';
import inject from 'admin/utilities/inject';

export default Ember.Route.extend({
    roleRepository: inject('role'),
    repository: inject('user'),
    model: function(params) {
        let repository = this.get('repository');
        let roleRepository = this.get('roleRepository');
        let user = repository.fetchById(params.user_id);
        let roles = roleRepository.fetch();
        return {user: user, roles: roles};
    },
    setupController: function(controller, hash) {
        controller.set('model', hash.user);
        controller.set('roles', hash.roles);
    }
});
