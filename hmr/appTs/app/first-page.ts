export function onTap() {
    console.log("---> first");
    global.__onLiveSync();
}

export function onLoaded() {
    console.log("---> first loaded");
}
