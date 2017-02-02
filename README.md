# Deprecation Warning! #

This package is deprecated in favor of using the standard Stripe package from NPM in conjunction with Meteor's Promise or async/await integration. You can read more about promises and async/await in [this blog post](https://blog.meteor.com/using-promises-and-async-await-in-meteor-8f6f4a04f998#.vg7k39z9y).

# Stripe Sync #

A wrapper for Meteor style synchronous Stripe API calls.

> ###Notice###
> As of version 2.0.0 you will no longer need to manually add a package that includes the StripeAPI as it is now included due to the variability of stripe versions being used in those packages

## Example Usage ##

```javascript
Stripe = StripeSync(key);

try{
    var account = Stripe.account.retrieve()
}catch(error){
    throw new Meteor.Error(1001, error.message);
}
```

## Wrapped API ##

This package wraps the methods below. These are all the methods that are listed in the [stripe-node](https://github.com/stripe/stripe-node) github documentation.

 * accounts
  * [`create(params)`](https://stripe.com/docs/api/node#create_account)
  * [`retrieve()`](https://stripe.com/docs/api/node#retrieve_account)
  * [`update(accountId[, params])`](https://stripe.com/docs/api/node#update_account)
  * [`list([params])`](https://stripe.com/docs/api/node#list_accounts)
 * balance
  * [`retrieve()`](https://stripe.com/docs/api/node#retrieve_balance)
  * [`listTransactions([params])`](https://stripe.com/docs/api/node#balance_history)
  * [`retrieveTransaction(transactionId)`](https://stripe.com/docs/api/node#retrieve_balance_transaction)
 * charges
  * [`create(params)`](https://stripe.com/docs/api/node#create_charge)
  * [`list([params])`](https://stripe.com/docs/api/node#list_charges)
  * [`retrieve(chargeId)`](https://stripe.com/docs/api/node#retrieve_charge)
  * [`capture(chargeId[, params])`](https://stripe.com/docs/api/node#charge_capture)
  * [`refund(chargeId[, params])`](https://stripe.com/docs/api/node#refund_charge)
  * [`update(chargeId[, params])`](https://stripe.com/docs/api/node#update_charge)
  * [`updateDispute(chargeId[, params])`](https://stripe.com/docs/api/node#update_dispute)
  * [`closeDispute(chargeId[, params])`](https://stripe.com/docs/api/node#close_dispute)
  * `setMetadata(chargeId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(chargeId, key, value)`
  * `getMetadata(chargeId)`
 * coupons
  * [`create(params)`](https://stripe.com/docs/api/node#create_coupon)
  * [`list([params])`](https://stripe.com/docs/api/node#list_coupons)
  * [`retrieve(chargeId)`](https://stripe.com/docs/api/node#retrieve_coupon)
  * [`del(chargeId)`](https://stripe.com/docs/api/node#delete_coupon)
 * customers
  * [`create(params)`](https://stripe.com/docs/api/node#create_customer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_customers)
  * [`update(customerId[, params])`](https://stripe.com/docs/api/node#update_customer)
  * [`retrieve(customerId)`](https://stripe.com/docs/api/node#retrieve_customer)
  * [`del(customerId)`](https://stripe.com/docs/api/node#delete_customer)
  * `setMetadata(customerId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(customerId, key, value)`
  * `getMetadata(customerId)`
  * [`createSubscription(customerId, params)`](https://stripe.com/docs/api/node#create_subscription)
  * [`updateSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#update_subscription)
  * [`cancelSubscription(customerId, subscriptionId, [, params])`](https://stripe.com/docs/api/node#cancel_subscription)
  * [`listSubscriptions(params)`](https://stripe.com/docs/api/node#list_subscriptions)
  * [`createSource(customerId[, params])`](https://stripe.com/docs/api/node#create_card)
  * [`listCards(customerId)`](https://stripe.com/docs/api/node#list_cards)
  * [`retrieveCard(customerId, cardId)`](https://stripe.com/docs/api/node#retrieve_card)
  * [`updateCard(customerId, cardId[, params])`](https://stripe.com/docs/api/node#update_card)
  * [`deleteCard(customerId, cardId)`](https://stripe.com/docs/api/node#delete_card)
  * [`deleteDiscount(customerId)`](https://stripe.com/docs/api/node#delete_discount)
 * events (*[types of events](https://stripe.com/docs/api/node#event_types)*)
  * [`list([params])`](https://stripe.com/docs/api/node#list_events)
  * [`retrieve(eventId)`](https://stripe.com/docs/api/node#retrieve_event)
 * invoiceItems
  * [`create(params)`](https://stripe.com/docs/api/node#create_invoiceitem)
  * [`list([params])`](https://stripe.com/docs/api/node#list_invoiceitems)
  * [`update(invoiceItemId[, params])`](https://stripe.com/docs/api/node#update_invoiceitem)
  * [`retrieve(invoiceItemId)`](https://stripe.com/docs/api/node#retrieve_invoiceitem)
  * [`del(invoiceItemId)`](https://stripe.com/docs/api/node#delete_invoiceitem)
 * invoices
  * [`create(params)`](https://stripe.com/docs/api/node#create_invoice)
  * [`list([params])`](https://stripe.com/docs/api/node#list_customer_invoices)
  * [`update(invoiceId[, params])`](https://stripe.com/docs/api/node#update_invoice)
  * [`retrieve(invoiceId)`](https://stripe.com/docs/api/node#retrieve_invoice)
  * [`retrieveLines(invoiceId)`](https://stripe.com/docs/api/node#invoice_lines)
  * [`retrieveUpcoming(customerId[, subscriptionId])`](https://stripe.com/docs/api/node#retrieve_customer_invoice)
  * [`pay(invoiceId)`](https://stripe.com/docs/api/node#pay_invoice)
 * plans
  * [`create(params)`](https://stripe.com/docs/api/node#create_plan)
  * [`list([params])`](https://stripe.com/docs/api/node#list_plans)
  * [`update(planId[, params])`](https://stripe.com/docs/api/node#update_plan)
  * [`retrieve(planId)`](https://stripe.com/docs/api/node#retrieve_plan)
  * [`del(planId)`](https://stripe.com/docs/api/node#delete_plan)
 * recipients
  * [`create(params)`](https://stripe.com/docs/api/node#create_recipient)
  * [`list([params])`](https://stripe.com/docs/api/node#list_recipients)
  * [`update(recipientId[, params])`](https://stripe.com/docs/api/node#update_recipient)
  * [`retrieve(recipientId)`](https://stripe.com/docs/api/node#retrieve_recipient)
  * [`del(recipientId)`](https://stripe.com/docs/api/node#delete_recipient)
  * `setMetadata(recipientId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(recipientId, key, value)`
  * `getMetadata(recipientId)`
 * tokens
  * [`create(params)`](https://stripe.com/docs/api/node#create_card_token)
  * [`retrieve(tokenId)`](https://stripe.com/docs/api/node#retrieve_token)
 * transfers
  * [`create(params)`](https://stripe.com/docs/api/node#create_transfer)
  * [`list([params])`](https://stripe.com/docs/api/node#list_transfers)
  * [`retrieve(transferId)`](https://stripe.com/docs/api/node#retrieve_transfer)
  * [`update(transferId[, params])`](https://stripe.com/docs/api/node#update_transfer)
  * [`cancel(transferId)`](https://stripe.com/docs/api/node#cancel_transfer)
  * [`listTransactions(transferId[, params])`](https://stripe.com/docs/api/curl#list_transfers)
  * `setMetadata(transferId, metadataObject)` ([metadata info](https://stripe.com/docs/api/node#metadata))
  * `setMetadata(transferId, key, value)`
  * `getMetadata(transferId)`
