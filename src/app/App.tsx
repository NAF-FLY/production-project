import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback={<div>{t('Загрузка')}</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
