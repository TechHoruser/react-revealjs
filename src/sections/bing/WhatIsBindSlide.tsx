import { SecuencialChilds } from "../../partials/SecuencialChilds"

interface BingCopilot1Props {
  sectionKey: string
}

export const BingCopilot1 = ({
  sectionKey,
}: BingCopilot1Props) =>
  <SecuencialChilds
    sectionKey={sectionKey}
    children={[
      <h2>Inteligencia Artificial</h2>,
    ]}
  />
