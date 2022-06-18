#!/bin/bash -eu

APP_NAME=$1

npx degit solidjs/templates/ts ${APP_NAME}

cd ./${APP_NAME}

yarn install

yarn add @hope-ui/solid @stitches/core solid-transition-group

yarn add -D prettier

rm -rf pnpm-lock.yaml

mv package.json temp.json

touch package.json

cat temp.json | jq '.scripts |= .+ {"format": "prettier --write \"./**/*.{ts,tsx,js,jsx,json}\""}' >> package.json

rm -rf temp.json

cat << EOS >> .prettierrc
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "printWidth": 120,
    "endOfLine": "lf"
}
EOS

yarn format
