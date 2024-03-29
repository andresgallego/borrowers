import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  articles: DS.hasMany('articles'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  state: DS.attr('string', {
  	defaultValue: 'borrowed'
  }),
  fullName: Ember.computed('firstName', 'lastName', function() {
  	return this.get('firstName') + ' ' + this.get('lastName');
  })
});
