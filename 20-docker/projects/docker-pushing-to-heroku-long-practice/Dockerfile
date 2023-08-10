FROM node:16.16-alpine
WORKDIR /app
COPY ./wait-for .
COPY ./backend .
COPY ./frontend/build ./public
ENV NODE_ENV=production
ENV JWT_SECRET=aaa967f1-2b08-4dde-a086-5df6bc8eff91
ENV JWT_EXPIRES_IN=604800
# RUN chmod -R a+rwx
CMD npm start
