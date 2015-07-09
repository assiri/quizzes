import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   host: 'http://skills.abegs.org/skills/api/v3'
});
