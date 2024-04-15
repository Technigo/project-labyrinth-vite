import { appContentStore } from "../stores/appContentStore"

export const StartPage = () => {
    const { userName } = appContentStore()

  return (
    <div>
      <p>Hello {userName}</p>
      <label>
        Tell us your name:
        <input type="text" />
      </label>
    </div>
  )
}
