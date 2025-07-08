BUCKET_NAME=docs-recurse-ml
URL_MAP=docs-recurse-ml-map

deploy: build upload invalidate
	@echo "✅ Deployment finished."

build:
	@echo "▶️  Building site..."
	npm run build

upload:
	@echo "⬆️  Uploading (with gzip compression)..."
	gsutil -m cp -z html,css,js -r build/* gs://$(BUCKET_NAME)/

invalidate:
	@echo "♻️  Invalidating CDN cache..."
	-gcloud compute url-maps invalidate-cdn-cache $(URL_MAP) --path="/*"
