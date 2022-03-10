FROM nexus.devops.broadridge.net:9090/library/node:16-alpine3.13 AS builder

WORKDIR /usr/src/app

RUN npm cache clean --force

COPY . .

RUN npm install

RUN npm run build && npm prune

FROM nexus.devops.broadridge.net:9090/library/nginx:1.20.2 AS ngi

COPY --from=builder /usr/src/app/dist/glossconfig/browser /usr/share/nginx/html

COPY /nginx.conf  /etc/nginx/conf.d/default.conf

RUN chmod -R a+r /usr/share/nginx/html

EXPOSE 4332
