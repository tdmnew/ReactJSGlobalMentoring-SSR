import React from 'react';
import { useTranslation } from 'react-i18next';

import { TRANSLATIONS } from '../../Core/I18N';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Fallback message
      return <h1>{TRANSLATIONS.EN.ERROR_TEXT}</h1>;
    }

    return this.props.children;
  }
}
