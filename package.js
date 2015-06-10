Package.describe({
    name: "copleykj:stripe-sync",
    summary: "Sync wrapper for stripe-node",
    version: "2.0.0",
    git: "https://github.com/copleykj/meteor-stripe-sync"
});

Npm.depends({ "stripe": "3.3.4" });

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');
    api.addFiles("includes.html", "client");
    api.addFiles('StripeSync.js', "server");

    api.export("StripeSync", "server");
});
