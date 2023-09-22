import { GreedProps } from "./greed.types"

const Greed = (props: GreedProps) => {

  return (
    <div>
      Hello {props.name ? props.name : "Guest"}
    </div>
  )
}

export default Greed
