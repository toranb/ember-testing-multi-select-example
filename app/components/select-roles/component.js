import Ember from 'ember';

export default Ember.Component.extend({
    init: function() {
        //in production apps you would bind this using
        //a true relationship (one-to-many or m2m)
        this.local_role_list = [2];
        this._super();
    },
    actions: {
        /*jshint unused:vars */
        changed: function(user, selected_role_id) {
            console.log(selected_role_id);
            //in the future when a relationship is
            //bound you would update the user model/that related array :)
        }
    }
});
