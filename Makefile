.PHONY: project
project:
	make build

.PHONY: install
install:
	yarn install --prefer-offline

.PHONY: test
test:
	./node_modules/.bin/jest --runInBand

.PHONY: build
build:
	make tsc

.PHONY: publish
publish:
  npm publish --access=public

.PHONY: tsc
tsc:
	./node_modules/.bin/tsc --resolveJsonModule -p ./tsconfig.json --outDir ./dist/esm
	./node_modules/.bin/tsc --resolveJsonModule -p ./tsconfig.json --module commonjs --outDir ./dist/cjs

.PHONY: typedoc
typedoc:
	./node_modules/.bin/typedoc --theme ../../../tools/typedoc/default  --out ./docs/types   --includeDeclarations --exclude "**/node_modules/**/*" --inputFiles ./src


