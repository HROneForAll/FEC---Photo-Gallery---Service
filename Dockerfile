FROM node:10
WORKDIR /fec_photo_gallery
COPY . /fec_photo_gallery
RUN npm install
EXPOSE 1234
CMD ["npm", "start"]