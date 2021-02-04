globalThis.addEventListener("message", e => {
    if (!e.data || !e.data.eval) return;
    try {
        console.log("evaluated: ", eval(e.data.eval));
    } catch (e) {
        console.warn("evaluate error: ", e);
    }
});
