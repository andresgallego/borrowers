import FriendsBaseController from './base';

export default FriendsBaseController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('friends.show');
			return false;
		}
	}
});