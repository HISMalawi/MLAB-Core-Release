#!/bin/bash
cd public
 
echo -e "\033[1;34mGetting current server IP address...\033[0m"
SERVER_IP=$(hostname -I | awk '{print $1}')
echo -e "\033[1;32mCurrent server IP: $SERVER_IP\033[0m"
 
if [ -f network.json ]; then
    rm network.json
    echo -e "\033[1;33mExisting network.json removed.\033[0m"
fi
 
echo "{\"ip\": \"$SERVER_IP\",\"port\": 8005}" > network.json
echo -e "\033[1;34mContents of network.json:\033[0m"
cat network.json
echo -e "\033[1;32mNew network.json created successfully!\033[0m"