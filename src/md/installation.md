---
slug: 'docs/installation'
date: '2021-04-07'
title: 'Installation Guide'
order: 20
---

## Supplies

- Sealed Disklavier Essentials Kit
- Yamaha UDWL01 Wireless LAN adapter — for use with the companion document [Networking With a Disklavier (The Hard Way)](/docs/networking)

If the piano is being wired directly into the router or a network port:

- Cat5 ethernet cable long enough to reach from the piano to the port

If the piano is being set up for wireless use:

- 3-way power splitter or power strip

If a new _eero_ mesh wireless system is being installed:

- Smartphone or tablet which you are comfortable with the customer using
- _eero_ mesh wifi adapters (at least 2, preferably 3)
- 1 Cat5 ethernet cable per _eero_ device
- Zip ties (for securing _eero_ devices, if necessary)

If the customer wishes to use DisklavierTV:

- Logitech Bluetooth adapter
- Dual RCA cable
- 3-way power splitter or power strip

## Prerequistes

- The customer should create an account on [Yamaha's MusicSoft website](https://yamahamusicsoft.com). The URL can be found on the information card inside the Disklavier Essentials Kit.
- The customer should enter the code found on this card to receive their free 3-month trial of DisklavierRadio and DisklavierTV.
- The customer should download the **ENSPIRE Controller** app on the device(s) they wish to use to control the Disklavier.

If a new _eero_ mesh wireless system is being installed:

- The customer should download the _eero_ app on their personal device and create a new _eero_ account. Registration will require email verification. (Note: The customer only needs to have the _eero_ app on one of their personal devices, not necessarily all of them they wish to use to control the Disklavier.)
- The customer should sign into their _eero_ account on the device you are using for setup.
- Ask for the customer's wifi password. If they are unwilling to share it, you will simply need them to enter it later on.

## Procedure

### Setting up the _eero_ mesh wireless network

_If you are hardwiring the Disklavier directly into the router or an ethernet port, skip this section._

- Locate the customer's router. Plug one _eero_ device in near the router and connect it to an open port on the router via a Cat5 cable. If there are no open ports, remove one of the cables from the router and plug it into the _eero_, then connect the _eero_ to the open port.
- Open the _eero_ app and create a new network. The app should automatically find the _eero_ device. When prompted for a network name and password, use the same name and password as the customer uses for their regular home wifi.
- After the network is created, open the network settings. Tap "Advanced," then "DHCP & NAT" and change the network mode to "Bridge." This will allow devices connected to the _eero_ network to communicate with devices on the main network and vice-versa. Because the network name and password are the same, this makes the _eero_ network fully transparent for the customer.
- Take the second _eero_ device to the piano and plug it in. Connect it to the LAN port under the piano. Open the _eero_ app and tap the "+" in top right, then "Add or Replace _eero_ devices." The app should automatically find the second _eero_ and connect it to the existing network.
- The app will then run a placement test. If the connectivity test fails, or if the signal is weak, you may want to place an additional _eero_ somewhere in between the piano and the router. Follow the same setup instructions as you used for the second device.

### Setting up for DisklavierTV

_If the customer does not wish to use DisklavierTV, skip this section._

- Using the RCA cable, connect the Logitech Bluetooth adapter to the red and white "IN" ports on the Disklavier. Plug in the adapter.
- On the customer's Apple TV, go to "Settings > Remotes and Devices > Bluetooth." Press the button on the Bluetooth receiver. The Apple TV should automatically pair to the receiver.

### Setting up the Disklavier

- If you are not using a mesh wifi adapter, connect the Disklavier to the router or an ethernet port using a Cat5 cable.
- If the Disklavier is already turned on, turn it off via the large toggle switch on the main power supply. Wait for the Disklavier to fully power down.
- Turn the Disklavier on via the large toggle switch on the main power supply and wait about 30 seconds while the system starts. When the blue light on the control box maintains a solid blue color, the system is ready for use.

## Usage

- Open the **ENSPIRE Controller** app. Tap "Information," then "Login" and allow the customer to enter their Yamaha MusicSoft account information. This information is saved to the Disklavier, so the customer will not need to log in again on any separate devices.
- Tap "Songs" to view the list of songs saved to the Disklavier. These songs may be played at any time, even without an internet connection or premium MusicSoft subscription.
  - If a USB flash drive is plugged into the Disklavier, several additional options will appear on this screen, which will allow the customer to record their own songs or to play back previously recorded songs. A 32GB flash drive is provided in the Disklavier Essentials Kit; however, any flash drive should work.
- Tap "DisklavierRadio" to access Yamaha's streaming radio service. This is a paid feature, but the trial code in the Disklavier Essentials Kit will give the customer a free 3-month trial.
- Tap "DisklavierTV," then "Go to DisklavierTV site." When playing videos from this site, the customer should use screen mirroring to display their device's screen on their Apple TV. The audio should play back on the Disklavier's speakers, which will then cause the piano to play.
  - There may be some timing issues between the audio and video. See [Troubleshooting](#troubleshooting) for more details on fixing this issue.

## Troubleshooting

**Symptom:** The audio balance between the piano and the speakers is off when using DisklavierTV.

**Solution:** Adjust the volume settings on the speakers under the piano.

---

**Symptom:** The audio balance between the piano and the speakers is off when using song playback or DisklavierRadio.

**Solution:** Adjust the volume settings on the speakers under the piano. (If using DisklavierTV, set the speakers at the correct levels to balance with the TV functionality.) If the balance is still unsatisfactory, open the Disklavier control panel and click on the speaker in the bottom right corner. (NOTE: Be sure you are not on the DisklavierTV screen.) From here, you can fine tune the balance.

---

**Symptom:** The audio and video are out of sync when using DisklavierTV.

**Solution:** This process is most easily completed when using two separate devices. On the first device, begin playing a video on DisklavierTV. (Timing videos are provided on the DisklavierTV site, but you will likely need to make further adjustments with normal On Demand videos.) On the second device, navigate to the DisklavierTV page in the Disklavier control panel and click on "Settings." From here, you can make incremental adjustments to the delay as needed while the video plays back.

---

**Symptom:** The Disklavier does not appear in the **ENSPIRE Controller** app.

**Solution:** There are a number of possible remedies for this issue. Try each of the solutions below in order as necessary.

- Make sure the Disklavier is properly connected to the network using the steps outlined in the [Procedure](#procedure) section of this document.

- Reset the router and power cycle the Disklavier.

- On any device which does not display the Disklavier in the **ENSPIRE Controller** app, forget the home network connection and re-join it.

- Follow the steps in the companion document [Networking With a Disklavier (The Hard Way)](/docs/networking).
