#!/bin/bash
cd public
 
echo -e "\033[1;34mGetting current server IP address...\033[0m"
SERVER_IP=$(hostname -I | awk '{print $1}')
echo -e "\033[1;32mCurrent server IP: $SERVER_IP\033[0m"
 
if [ -f api.json ]; then
    rm api.json
    echo -e "\033[1;33mExisting api.json removed.\033[0m"
fi
 
echo "{\"ip\": \"$SERVER_IP\",\"port\": 8005}" > api.json
echo -e "\033[1;34mContents of api.json:\033[0m"
cat api.json
echo -e "\033[1;32mNew api.json created successfully!\033[0m"