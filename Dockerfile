FROM nginx:alpine
LABEL authors="edward"

RUN apk add --no-cache bind-tools

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD sh -c 'echo "[INFO] Resolving backend.backend.local..."; \
    nslookup backend.backend.local || echo "[ERROR] DNS resolution failed"; \
    sleep 5 && nginx -g "daemon off;"'