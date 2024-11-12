#!/bin/bash
cd public

echo -e "\033[1;34mGetting current server IP address...\033[0m"
SERVER_IP=$(hostname -I | awk '{print $1}')
echo -e "\033[1;32mCurrent server IP: $SERVER_IP\033[0m"

cp network.json.example network.json

echo -e "\033[1;34mOpening network.json file...\033[0m"
JSON_FILE="network.json"

echo -e "\033[1;34mUpdating IP address in $JSON_FILE...\033[0m"
sed -i "s/\"ip\": \".*\"/\"ip\": \"$SERVER_IP\"/g" $JSON_FILE
echo -e "\033[1;32mIP address updated to $SERVER_IP in $JSON_FILE\033[0m"

echo -e "\033[1;34mContents of $JSON_FILE:\033[0m"
cat $JSON_FILE
echo -e "\033[1;32mScript completed successfully!\033[0m"