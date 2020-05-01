$(document).ready(() => {

    $('#btn').click(() => {
        $("#load").show();

        const baseServer = "https://testnet-algorand.api.purestake.io/ps1";
        const port = "";
        const token = {
            'X-API-Key': "af4Dyq6Pxb8c7I0ddWt*********************"
        }

        const accountAddress = "45XFY4M7WPC6BBHTJBIA2HHPPWVP2*****************************";
        const algodclient = new algosdk.Algod(token, baseServer, port);

        let transactionId = $('input').val();

        (async () => {
            let tx = (await algodclient.transactionInformation(accountAddress, transactionId));
            let decodeJson = algosdk.decodeObj(tx.note);
            console.log(decodeJson);
            const obj = JSON.parse(decodeJson);
            console.log(obj);
            $('canvas[data-type="linear-gauge"]').attr('data-value', decodeJson);
            $("#block").show();
            $("#load").hide();
        })().catch(e => {
            console.log(e);
        });

    })
});