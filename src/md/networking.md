---
slug: 'docs/networking'
date: '2021-04-07'
title: 'Networking With a Disklavier (The Hard Way)'
order: 30
---

## About this process

The procedure outlined in this document is for use when a Disklavier does not appear in the **ENSPIRE Controller** app. All connectivity troubleshooting options outlined in the companion document [Yamaha Disklavier Installation Guide](/docs/installation#troubleshooting) should be exhausted before using the method described below.

## Explanation of the problem

While the root cause of the issue is unclear, the **ENSPIRE Controller** app seems to have difficulty detecting Disklaviers that were connected to the network after the device running the app initially connected to it. In other words, since the customer's phone has been connected to their home network since before the Disklavier was set up, the phone is unable to find the Disklavier.

## Prodcedure

1. Insert the **Yamaha UDWL01 Wireless LAN adapter** into a USB port on the Disklavier.
2. Toggle the WLAN switch on the back of the Disklavier control box to "AP."
3. Make sure the LAN cable being used to connect to the network is still connected to the Disklavier and that any _eero_ devices are still powered on.
4. Using the large toggle switch on the main power supply, power cycle the Disklavier. Make sure to allow the system to power down completely before turning it back on.
5. Once the Disklavier is fully powered on, connect a mobile device running the **ENSPIRE Controller** app to the network being broadcast by the Wireless LAN adapter. (The network name will begin with "DKV".)
6. Open the **ENSPIRE Controller** app. The Disklavier should now appear in the list.
7. Tap the Disklavier in the list to navigate to the control panel.
8. Navigate to "Settings > Network > Wired Network > Information" and record the IP Address, Subnet Mask, Gateway, and DNS1.
9. Go back to "Wired Network," then change the value of "Use DHCP" to "Manual."
10. Compare the fields that appear to the values you recorded in step 8. Change any mismatched values to match the original settings, then click "Submit."
11. Remove the wireless LAN adapter.
12. On the customer's device, open a web browser.
13. Open a new tab, and in the address bar, enter the IP Address recorded in step 8. This should take you to the Disklavier control panel.
14. In the web browser, locate the option to create a shortcut/bookmark on the home screen and select it.

After completing these steps, the customer will have a clickable icon on their home screen which will open the Disklavier control panel.
