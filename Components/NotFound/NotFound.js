import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { TRANSLATIONS } from '../../Core/I18N';

export default function NotFound() {
  const title = TRANSLATIONS.EN.APP_NAME.split(' ');

  return (
    <div className="not-found">
      <div className="not-found heading">
        <p className="heading logo">
          <span className="heading logo--left">{title[0]}</span>
          <span className="heading logo--right">{title[1]}</span>
        </p>
      </div>
      <div className="not-found body">
        <h3 className="not-found body__text--top">
          {TRANSLATIONS.EN.PAGE_NOT_FOUND}
        </h3>
        <h4 className="not-found body__text--bottom">
          {TRANSLATIONS.EN.FOUR_OH_FOUR}
        </h4>
        <Link className="not-found body__btn" href="/">
          {TRANSLATIONS.EN.GO_HOME}
        </Link>
      </div>
    </div>
  );
}
