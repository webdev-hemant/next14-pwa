pm2 start "npm start" --name next14



<!-- nextjs settings -->
 set NODE_OPTIONS='--max_old_space_size=512'
<!-- make swap file -->
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
