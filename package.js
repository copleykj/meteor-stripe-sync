Package.describe({
    name: "copleykj:stripe-sync",
    summary: "Sync wrapper for stripe-node",
    version: "1.0.0",
    git: "https://github.com/copleykj/meteor-stripe-sync"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');
    api.addFiles('StripeSync.js', "server");

    api.export("StripeSync", "server");
});
