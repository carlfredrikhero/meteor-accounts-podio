Package.describe({
  name: 'carlfredrikhero:accounts-podio',
  summary: 'Login service for Podio accounts',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('carlfredrikhero:podio', ['client', 'server']);

  api.add_files('podio_login_button.css', 'client');

  api.addFiles('carlfredrikhero:accounts-podio.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('carlfredrikhero:accounts-podio');
  api.addFiles('carlfredrikhero:accounts-podio-tests.js');
});