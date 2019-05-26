const API_publicKey = "FLWPUBK_TEST-bb0eed015df620228553aa1dff2708dc-X";
const amount = 5000
const driverAmount = 5000 - 500; 
let test = {
            PBFPubKey: API_publicKey,
            customer_firstname: "John",
          customer_lastname: "Doe",
          customer_email:"Johndoe@example.com",
          customer_phone: "08123456789",
            amount,
            currency: "NGN",
            txref: "rave-1234",
            payment_options:"card,account,ussd",
            subaccounts: [
              {
                id: "RS_60315BB9D108732D1C8DDE5E85C2465F",
                transaction_charge_type: "flat_subaccount",
              transaction_charge: driverAmount
              }
            ],
            meta: [{
                metaname: "rideID",
                metavalue: "AP1234"
            }],
            onclose: function() {},
            callback: function(response) {
                var txref = response.tx.txRef; // collect flwRef returned and pass to a 					server page to complete status check.
                console.log("This is the response returned after a charge", response);
                if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {
                    // redirect to a success page
                  console.log("Hello");
                } else {
                    // redirect to a failure page.
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        }
    function payWithRave() {

        var x = getpaidSetup(test);
    }