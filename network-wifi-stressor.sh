#!/bin/bash

echo Parameters
echo $stressor

# get current wifi device
CURRENT_DEVICE=$(networksetup -listallhardwareports | awk '$3=="Wi-Fi" {getline; print $2}')
echo "Current Wi-Fi Device = '$CURRENT_DEVICE'"

# turn off wifi
networksetup -setairportpower $CURRENT_DEVICE off

sleep 5

# turn on wifi
networksetup -setairportpower $CURRENT_DEVICE on

