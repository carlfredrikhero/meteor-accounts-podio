Accounts.oauth.registerService('podio');

if (Meteor.isClient) {
  Meteor.loginWithPodio = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Podio.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: [
      'services.podio.id', 
      'services.podio.email', 
      'services.podio.inbox_new',
      'services.podio.profile_id',
      'services.podio.avatar',
      'services.podio.title',
      'services.podio.name',
    ]
  });
}