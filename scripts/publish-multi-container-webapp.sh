#!/usr/bash

registry_user="${DOCKER_REGISTRY_USER}"
registry_password="${DOCKER_REGISTRY_PASSWORD}"

az webapp create \
--multicontainer-config-file docker-compose.prod.yml \
--multicontainer-config-type COMPOSE \
--name held-der-elektrik \
--resource-group hde \
--docker-registry-server-user "${registry_user}" \
--docker-registry-server-password "${registry_password}" \
--output yaml \
--scope hde \
--plan  hde
