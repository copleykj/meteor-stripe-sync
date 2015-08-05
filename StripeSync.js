var StripeAPI = Npm.require('stripe');

StripeSync = function (key){
    var Stripe;
    var resources = {
        account: [
            "create",
            "list",
            "update",
            "retrieve"
        ],
        accounts: [
            "create",
            "list",
            "update",
            "retrieve"
        ],
        balance: [
            "retrieve",
            "listTransactions",
            "retrieveTransaction"
        ],
        charges: [
            "create",
            "list",
            "retrieve",
            "update",
            "setMetadata",
            "getMetadata",
            "capture",
            "refund",
            "updateDispute",
            "closeDispute",
            "createRefund",
            "listRefunds",
            "retrieveRefund",
            "updateRefund",
            "markAsSafe",
            "markAsFraudulent"
        ],
        coupons: [
            "create",
            "list",
            "update",
            "retrieve",
            "del"
        ],
        customers: [
            "create",
            "list",
            "update",
            "retrieve",
            "del",
            "setMetaData",
            "getMetadata",
            "createSubscription",
            "updateSubscription",
            "cancelSubscription",
            "listSubscriptions",
            "retrieveSubscription",
            "createSource",
            "listSources",
            "retrieveSource",
            "updateSource",
            "deleteSource",
            "createCard",
            "listCards",
            "retrieveCard",
            "updateCard",
            "deleteCard",
            "deleteDiscount",
            "deleteSubscriptionDiscount",
        ],
        disputes: [
            "list",
            "retrieve",
            "update",
            "setMetadata",
            "getMetadata",
            "close"
        ],
        events: [
            "list",
            "retrieve"
        ],
        invoices: [
            "create",
            "list",
            "update",
            "retrieve",
            "retrieveLines",
            "retrieveUpcoming",
            "pay"
        ],
        invoiceItems: [
            "create",
            "list",
            "update",
            "retrieve",
            "del",
            "setMetadata",
            "getMetadata"
        ],
        plans: [
            "create",
            "list",
            "update",
            "retrieve",
            "del"
        ],
        recipientCards: [
            "create",
            "list",
            "retrieve",
            "update",
            "del"
        ],
        recipients: [
            "create",
            "list",
            "update",
            "retrieve",
            "del",
            "setMetadata",
            "getMetadata",
            "createCard",
            "listCards",
            "retrieveCard",
            "updateCard",
            "deleteCard"
        ],
        tokens: [
            "create",
            "retrieve"
        ],
        transfers: [
            "create",
            "list",
            "update",
            "retrieve",
            "setMetadata",
            "getMetadata",
            "reverse",
            "cancel",
            "listTransactions",
            "createReversal",
            "listReversals",
            "retrieveReversal",
            "updateReversal"
        ],
        applicationFees: [
            "list",
            "retrieve",
            "refund",
            "createRefund",
            "listRefunds",
            "retrieveRefund",
            "updateRefund",
        ],
        fileUploads: [
            "retrieve",
            "list",
            "create"
        ],
        bitcoinReceivers: [
            "create",
            "retrieve",
            "list",
            "update",
            "setMetadata",
            "getMetadata",
            "listTransactions"
        ],
        customerCards: [
            "create",
            "list",
            "retrieve",
            "update",
            "del"
        ],
        customerSubscriptions: [
            "create",
            "list",
            "retrieve",
            "update",
            "del",
            "deleteDiscount"
        ],
        chargeRefunds: [
            "create",
            "list",
            "retrieve",
            "update"
        ],
        applicationFeeRefunds: [
            "create",
            "list",
            "retrieve",
            "update"
        ],
        transferReversals: [
            "create",
            "list",
            "retrieve",
            "update"
        ]
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
