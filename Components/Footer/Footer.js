import React from 'react';

import { TRANSLATIONS } from '../../Core/I18N';

export default function Footer() {
    const title = TRANSLATIONS.EN.APP_NAME.split(' ');

    return (
        <div className="footer">
            <h4 className="footer__logo">
                <span className="footer__logo--left">{title[0]}</span>
                <span className="footer__logo--right">{title[1]}</span>
            </h4>
        </div>
    );
}
