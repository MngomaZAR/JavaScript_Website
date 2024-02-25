$IP_ADDRESS = (ipconfig | Select-String 'IPv4 Address').Line -split ':' | Select-Object -Index 1).Trim()
echo "Server is running on http://$IP_ADDRESS:3000"