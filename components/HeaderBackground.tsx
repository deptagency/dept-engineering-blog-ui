import { ReactFragment } from "react"

interface HeaderBackgroundProps {
  srcImg: string
  children: ReactFragment
}

/**
 * Delete me
*/

export const HeaderBackground = ({ srcImg, children }: HeaderBackgroundProps) => {
  return (
    <>
      {srcImg ? (
        <div className="site-header-background responsive-header-img" style={{ backgroundImage: `url(${srcImg})` }}>
          {children}
        </div>
      ) : (
          <div className="site-header-background no-image">
            {children}
          </div>
        )}
    </>
  )
}
