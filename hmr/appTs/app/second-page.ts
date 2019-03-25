export function onTap() {
    console.log("---> second");
    global.__onLiveSync();
}

export function onLoaded() {
    console.log("---> second loaded");
}
