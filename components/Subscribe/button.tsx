import { get, getLang } from '@utils/use-lang'

import { useOverlay } from '@components/contexts/overlayProvider'

// The actual component
export const SubscribeButton = ({ lang }: { lang?: string }) => {
  const text = get(getLang(lang))
  const { handleOpen } = useOverlay()

  return (
    <a className="subscribe-btn btn btn-cta" onClick={handleOpen}>
      {text(`SUBSCRIBE`)}
      <style jsx>{`
        a:hover {
          text-decoration: none;
          opacity: 1;
          cursor: pointer;
        }
      `}</style>
    </a>
  )
}
