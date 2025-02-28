#!/bin/bash
cd public

echo -e "\033[1;34mGetting current server IP address...\033[0m"
SERVER_IP=$(hostname -I | awk '{print $1}')
echo -e "\033[1;32mCurrent server IP: $SERVER_IP\033[0m"

# Ensure the JSON is always exactly 36 bytes
JSON_CONTENT="{\"ip\": \"$SERVER_IP\",\"port\": 8005}"
JSON_LENGTH=${#JSON_CONTENT}
# If it's too short, pad with spaces
if [ $JSON_LENGTH -lt 36 ]; then
    PADDED_JSON=$(printf "%-36s" "$JSON_CONTENT")
    echo "$PADDED_JSON" > api.json
# If it's too long, truncate it
elif [ $JSON_LENGTH -gt 36 ]; then
    TRUNCATED_JSON=$(echo "$JSON_CONTENT" | cut -c1-36)
    echo "$TRUNCATED_JSON" > api.json
else
    echo "$JSON_CONTENT" > api.json
fi

echo -e "\033[1;34mContents of api.json (36 bytes):\033[0m"
cat api.json
echo -e "\033[1;32mNew api.json created successfully!\033[0m"

# Verify file size
ACTUAL_SIZE=$(wc -c < api.json)
echo -e "\033[1;33mFile size: $ACTUAL_SIZE bytes (expected: 36)\033[0m"
