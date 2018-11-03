export class Validators {

    /**
     * Validate URL pattern, No require for Http.
     * @static
     * @param {string} url
     * @returns {boolean}
     * @memberof Validators
     */
    public static ValidateUrl(url: string): boolean {
        const regExpString = '[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)';
        const urlRegEx = new RegExp(regExpString);

        return urlRegEx.test(url);
    }

}
