StripeSync = function (key){
    var Stripe;
    var resources = {
        account:["create", "list", "update", "retrieve"],
        accounts:["create", "list", "update", "retrieve"],
        balance:["retrieve", "listTransactions", "retrieveTransaction"],
        charges:["create", "list", "retrieve", "capture", "refund", "update", "updateDispute", "closeDispute", "setMetadata", "getMetadata"],
        coupons:["create", "list", "retrieve", "del"],
        customers:["create", "list", "update", "retrieve", "del", "setMetaData", "getMetadata", "createSubscription", "updateSubscription", "cancelSubscription", "listSubscriptions", "createSource", "listCards", "retrieveCard", "updateCard", "deleteCard", "deleteDiscount"],
        events:["list", "retrieve"],
        invoiceItems:["create", "list", "update", "retrieve", "del"],
        invoices:["create", "list", "update", "retrieve", "retrieveLines", "retrieveUpcoming", "pay"],
        plans:["create", "list", "update", "retrieve", "del"],
        recipients:["create", "list", "update", "retrieve", "del", "setMetadata", "getMetadata"],
        tokens:["create", "retrieve"],
        transfers:["create", "list", "retrieve", "update", "cancel", "listTransactions", "setMetadata", "getMetadata"]
    };


    Stripe = StripeAPI(key);

    _.each(resources, function (resource, key){
        _.each(resource, function (funcName){
            var stripeFunc = Stripe[key][funcName];
            Stripe[key][funcName] = Meteor.wrapAsync(stripeFunc, Stripe[key]);
        });
    });

    return Stripe;
};
