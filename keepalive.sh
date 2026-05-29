#!/bin/bash
while true; do
  if ! ss -tlnp | grep -q ":3000 "; then
    echo "$(date): Server not running, restarting..." >> /home/z/my-project/keepalive.log
    cd /home/z/my-project
    rm -f dev.log
    NODE_OPTIONS="--max-old-space-size=384" npx next dev -p 3000 > dev.log 2>&1 &
  fi
  # Make a request to keep it warm
  curl -s --max-time 5 -o /dev/null http://127.0.0.1:3000/ 2>/dev/null
  sleep 10
done
