import { getLang, get } from '@utils/use-lang'
import { useOverlay } from '@components/contexts/overlayProvider'
import { Button } from '@components/Button'

// The actual component
export const SubscribeButton = ({ lang }: { lang?: string }) => {
  const text = get(getLang(lang))
  const { handleOpen } = useOverlay()

  return (
    <Button.Cta onClick={handleOpen}>
      {text(`SUBSCRIBE`)}
    </Button.Cta>
  )
}
