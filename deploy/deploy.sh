#!/usr/bin/env bash

set -e
set -o pipefail

export BP_MODE_LOWERCASE=${BP_MODE_LOWERCASE:-development}
#export ENV_SUB_DOMAIN=$( [ "${BP_MODE_LOWERCASE}" = "production" ] && echo ""  || echo "${BP_MODE_LOWERCASE}.")
export ROOT_DIR=$(cd $(dirname $0) && pwd)
export OD=${ROOT_DIR}/overlays/${BP_MODE_LOWERCASE}
export APP_NAME=site
export PROJECT_ID=${GCLOUD_PROJECT}
export GCR_IMAGE_NAME=gcr.io/${PROJECT_ID}/${APP_NAME}

#echo "ENV_SUB_DOMAIN=${ENV_SUB_DOMAIN}"
echo "BP_MODE_LOWERCASE=${BP_MODE_LOWERCASE}"


cd $(dirname $0)/..
ROOT_DIR=$(pwd)
cd $ROOT_DIR

rm -rf $ROOT_DIR/build
rm -rf $ROOT_DIR/dist

PROD_ENV_FILE=${ROOT_DIR}/.env.production
rm $PROD_ENV_FILE
touch $PROD_ENV_FILE

echo "API_ROOT: ${API_ROOT}"
echo "VUE_APP_SERVICE_ROOT=${API_ROOT}" >> ${PROD_ENV_FILE}
echo "VUE_APP_GIT_HASH=${GITHUB_SHA}" >> ${PROD_ENV_FILE}
echo "VUE_APP_BP_MODE=${BP_MODE_LOWERCASE}" >> ${PROD_ENV_FILE}

echo "--------------------------"
echo "The production environment file contains: "
cat $PROD_ENV_FILE
echo "--------------------------"

npm install && npm run build

mkdir -p ${ROOT_DIR}/build/public
cp $ROOT_DIR/deploy/nginx-buildpack-config/* ${ROOT_DIR}/build
cp -r $ROOT_DIR/dist/* ${ROOT_DIR}/build/public
cd $ROOT_DIR/build

pack build $APP_NAME --builder paketobuildpacks/builder:full --buildpack gcr.io/paketo-buildpacks/nginx:latest  --env PORT=8080
image_id=$(docker images -q $APP_NAME)

echo "pushing ${image_id} to gcr.io/${PROJECT_ID}/${APP_NAME}"
echo "tagging ${GCR_IMAGE_NAME}"
docker tag "${image_id}" ${GCR_IMAGE_NAME}
echo "finished tag"
docker push ${GCR_IMAGE_NAME}
echo "finished push"

export RESERVED_IP_NAME=site-${BP_MODE_LOWERCASE}-ip
gcloud compute addresses list --format json | jq '.[].name' -r | grep $RESERVED_IP_NAME ||
  gcloud compute addresses create $RESERVED_IP_NAME --global
kubectl apply -k ${OD}
#kubectl patch deployment $APP_NAME -p "{\"spec\": {\"template\": {\"metadata\": { \"labels\": { \"redeploy\": \"$(date +%s)\"}}}}}"
