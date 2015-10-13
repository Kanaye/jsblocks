define(
    ['../../var/trimRegExp'],
    function(trimRegExp) {
        return function(styleString) {
            var styles = styleString.split(';');
            var styleObject = {};
            var index;
            var style;
            var values;

            for (var i = 0; i < styles.length; i++) {
                style = styles[i];
                if (style) {
                    index = style.indexOf(':');
                    if (index != -1) {
                        values = [style.substring(0, index), style.substring(index + 1)];
                        styleObject[values[0].toLowerCase().replace(trimRegExp, '')] = values[1].replace(trimRegExp, '');
                    }
                }
            }

            return styleObject;
        };
});
