import Ember from 'ember';

export default Ember.Helper.helper((params) => {
    return Ember.$.inArray(params[0], params[1]) > -1;
});
