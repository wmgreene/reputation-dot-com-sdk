const querystring = require("querystring");
module.exports = function (client) {
    return {
        // GetFaqs
        // https://api.reputation.com/v3/docs#operation/getFaqs
        list: function (query) {
            let qs = query ? "?" + querystring.stringify(query) : ""
            let url = "faqs" + qs
            return client.request({ url: url }, { method: 'GET' })
        },
        // GetFaq
        // https://api.reputation.com/v3/docs#operation/getFaq
        single: function(faqId) {
            let url = `faqs/${faqId}`;
            return client.request({ url: url }, { method: 'GET' })
        },
    }
}