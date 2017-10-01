define(["lodash"], function (_) {

    var parse = function (data, headersGetter, status) {
        var HTTP_SUCCESS = 200;
        var RESPONSE_DELIMITER = /\n/g;

        if (status !== HTTP_SUCCESS)
            return [];

        function parseJson(str) {
            var json = null;
            try {
                json = JSON.parse(str);
            } finally {
                return json;
            }
        }

        return data.split(RESPONSE_DELIMITER).map(parseJson).filter(_.isObject);
    };

    return parse;
});
