import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'shared/components/button'
import { cn } from 'shared/lib'

import styles from './lang-switcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation()

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={cn(styles.switcher, {}, [className])}
      variant="clean"
      onClick={handleChangeLang}
    >
      {t('lang')}
    </Button>
  )
}
