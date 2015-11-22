var _ = require('lodash');

module.exports = function ProfileCtrl(usersService, $window) {
    var ctrl = this;

    usersService.users.$watch(function () {
       ctrl.user = _.find(usersService.users, {id: Number($window.location.search.substr(1))});

        var user = _.find(usersService.users, { id: 1});

        user.firstName = 'Alison';
        user.lastName = 'Yesilcimen';
        user.skills = ['Entrepreneurship', 'Publishing', 'Social Media Marketing'];

        usersService.users.$save(user);
    });
};