# tunedIN-client

## Certificates

It's hella annoying to generate a cert for this. You need to update line 51 of `node_modules/@expo/cli/build/src/start/server/webpack/tls.js` to be `local.playtunedin-test.com` instead of just `localhost`. Then, run `npx expo start --web --https`, and expo will generate a certificate for you, which will show up as `cert-local.playtunedin-test.com.pem` in the `.expo/tls` folder. Then the site should open.

Run `sudo security add-trusted-cert -d -r trustAsRoot -k /Library/Keychains/System.keychain -p ssl -p basic {LOCATION_OF_REPO}/tunedIN-client/.expo/tls/cert-local.playtunedin-test.com.pem`. Your cert should now be trusted by your computer.

Open up `https://local.playtunedin-test.com:19006/` and you shouldn't have any cert errors.