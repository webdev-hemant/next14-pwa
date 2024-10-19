pm2 stop next14
pm2 delete next14

git pull origin main

npm i
npm run build
pm2 start "npm start" --name next14