import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';
import registration from 'admin/tests/helpers/registration';

var store, user;

moduleForComponent('select-roles', 'integration: select-roles test', {
    integration: true,
    setup() {
        store = registration(this.container, this.registry, ['model:user', 'model:role']);
        user = store.push('user', {id: 1, name: 'Toran Billups'});
    }
});

test('selecting an option will not deselect the current item when multiselect', function(assert) {
    store.push('role', {id: 2, name: 'Admin'});
    store.push('role', {id: 3, name: 'Guest'});
    let roles = store.find('role');
    this.set('user', user);
    this.set('roles', roles);
    this.render(hbs`{{select-roles roles=roles user=user}}`);
    let $component = this.$('.detail-role');
    assert.equal($component.find('option:selected').length, 1);
    assert.equal($component.find('option:selected').val(), 2);
    // $component.val(3).trigger('change'); will not work :(
    $component.find('option[value="' + 3 + '"]').prop('selected',true).trigger('change');
    assert.equal($component.find('option:selected').length, 2);
    assert.equal($component.find('option:selected:eq(0)').val(), 2);
    assert.equal($component.find('option:selected:eq(1)').val(), 3);
});
