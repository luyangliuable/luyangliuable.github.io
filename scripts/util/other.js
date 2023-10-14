function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function(t) {
        return t.toUpperCase();
    });
}
