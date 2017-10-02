define(["lodash"], _ => {

    const parse = (data, headersGetter, status) => {
        const HTTP_SUCCESS = 200;
        const RESPONSE_DELIMITER = /\n/g;

        if (status !== HTTP_SUCCESS)
            return [];

        function parseJson(str) {
            let json = null;
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
