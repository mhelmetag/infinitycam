# InfinitySurfCam

Watch Surfline Surf Cams for (basically) Infinity with No Ads

## More Info

On the old Surfline site, the surf cam pages expose two variables on the window that determine when the cam resets and plays ads. These are `cameraCurrentTime` and `cameraCurrentTimeReset`.

If these two variables are set to something like 1 x 10^9 then the cams won't timeout (unless you watch for +300 years). Normally the cams time out and show another ad every 30 seconds.

This chrome extension sets these variables for you automagically so that you can just play a cam and watch without interruptions (besides the first ad).

## How to Install

### Normal Way

*   Go to [download link](https://chrome.google.com/webstore/detail/infinitysurfcam/aganbfiioaghfiilmmlafkmohpabnhim) on Chrome
*   Click "Add to Chrome"
*   Enjoy

### 1337 Hacker Way

*   Go to the [Chrome extension manager](chrome://extensions)
*   Switch on "Developer mode" at the top of the page
*   Clone/fork this repo
*   Choose "Load Unpacked" and select the repo directory from your file explorer
*   Hack the planet
