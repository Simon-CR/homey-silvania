# Sylvania Zigbee App for Homey

This app adds support for Sylvania Smart+ Zigbee devices to Homey.

## Supported Devices

### Sylvania Smart+ A19 RGBW (Model 75564)
- **Model ID**: `A19 G2 RGBW`
- **Manufacturer**: `LEDVANCE` or `Sylvania`
- **Capabilities**: On/Off, Dimming, Color (RGB), Color Temperature

### Sylvania Smart+ Flex Strip RGBW
- **Model ID**: `Flex RGBW`, `LIGHTIFY Indoor Flex RGBW`, `LIGHTIFY Flex RGBW`
- **Manufacturer**: `OSRAM` or `Sylvania`
- **Capabilities**: On/Off, Dimming, Color (RGB), Color Temperature

### Sylvania Smart+ Smart Plug
- **Model ID**: `PLUG`
- **Manufacturer**: `Sylvania`
- **Capabilities**: On/Off

### Sylvania Smart+ BR30 RGBW
- **Model ID**: `LIGHTIFY BR RGBW`, `BR30 RGBW`
- **Manufacturer**: `Sylvania`
- **Capabilities**: On/Off, Dimming, Color (RGB), Color Temperature

## Installation

1.  **Prerequisites**:
    - [Node.js](https://nodejs.org/) (version 16 or higher)
    - [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started/installing-homey-cli) installed globally:
        ```bash
        npm install -g homey
        ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run/Install on Homey**:
    - To run the app in development mode (logs to console):
        ```bash
        homey app run
        ```
    - To install the app permanently:
        ```bash
        homey app install
        ```

## Development

- **Drivers**: Located in `drivers/`
- **App Logic**: `app.js`
- **Manifest**: `app.json`

## Notes

- This app uses `homey-zigbeedriver` to handle Zigbee communication.
- If your device is not recognized, check the Zigbee Model ID in the Homey Developer Tools and update `drivers/sylvania-a19-rgbw/driver.json`.
