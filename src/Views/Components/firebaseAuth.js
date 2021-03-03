const HTML = 
`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fartravel auth</title>
        <link rel="stylesheet" href="./styles/style.css">
        <!-- <script src="./GatewayMethods.js"></script> -->

        <script>console.log('This is showing in the console!')</script>

        <script src="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.6.1/firebase-ui-auth.css" />
    </head>
    <body style="background: red">


        <div style="display: flex; flex-direction: column; align-items: center; margin-top: 100px;" class="content">
            <div id="firebase_ui" >
                texsxssxxs
            </div>
        </div>


    <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

    <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>

    <!-- Add Firebase products that you want to use -->
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>


    <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyC6SDbjg54dmwAW2_V-ytalSG5TBVOLM_E",
        authDomain: "farvater-travel.firebaseapp.com",
        databaseURL: "https://farvater-travel.firebaseio.com",
        projectId: "farvater-travel",
        storageBucket: "farvater-travel.appspot.com",
        messagingSenderId: "288004389921",
        clientId: "288004389921-0e4edhqi6ft9kcgjeu46nq9ahb792n62.apps.googleusercontent.com",
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    </script>
        

    <!-- FIREBASE AUTH UI and getConfig method-->
    <script>

    var ui = new firebaseui.auth.AuthUI(firebase.auth());






    function getUiConfig () {
            console.log('getUiConfig');
            return {
                callbacks: {
                    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                        console.log('getUiConfig-1');
                        var user = authResult.user;
                        var credential = authResult.credential;
                        var isNewUser = authResult.additionalUserInfo.isNewUser;
                        var providerId = authResult.additionalUserInfo.providerId;
                        var operationType = authResult.operationType;

                        var authData = {
                            user,
                            credential,
                            isNewUser,
                            providerId,
                            operationType
                        }
                        // Do something with the returned AuthResult.
                        // Return type determines whether we continue the redirect automatically
                        // or whether we leave that to developer to handle.
                        console.log(authData);

                        // var returnUrl = partnerProgramsManager.getReturnUrl();
                        // if (returnUrl == null || returnUrl.length === 0) {
                        //     returnUrl = document.URL;
                        // }
                        
                        // window.location.assign('/account/u/firebase-check-account?cU=' + user.uid + '&returnUrl=' + returnUrl);
                        return false;
                    },
                },
                signInFlow: 'redirect',
                signInSuccessUrl: '/account/u/firebase-check-account',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    //https://github.com/firebase/firebaseui-web#configure-oauth-providers
                    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    {
                        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                        customParameters: {
                            // Forces account selection even when one account
                            // is available.
                            prompt: 'select_account'
                        }
                    },
                    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //{
                    //    provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    //    //scopes: [
                    //    //    'public_profile',
                    //    //    'email',
                    //    //    'phone'
                    //    //],
                    //    customParameters: {
                    //        // Forces password re-entry.
                    //        auth_type: 'reauthenticate'
                    //    }
                    //},
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        defaultCountry: 'UA'
                    }
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                // function.
                // Terms of service url/callback.
                tosUrl: '/content/booking-rules_ru.pdf',
                // Privacy policy url/callback.
                privacyPolicyUrl: function () {
                    console.log('getUiConfig-3');
                    window.location.assign('/content/booking-rules_ru.pdf');
                }
            }
        }






    document.addEventListener('DOMContentLoaded', ()=>{
        ui.start('#firebase_ui', getUiConfig());
    });
    </script>


    </body>
</html>



`;

export default HTML;