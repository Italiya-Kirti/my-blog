import Badge from "./badge"
import Button from "./button"
import Checkbox from "./checkbox"
import Footer from "./footer"
import Modal from "./modal"
import Progress from "./progress"
import Select from "./select"
import Sidebar from "./sidebar"
import Spinner from "./spinner"
import Tab from "./tab"
import Textarea from "./textarea"
import TextInput from "./textInput"
import Toast from "./toast"
import ToggleSwitch from "./toggleSwitch"
import Tooltip from "./tooltip"

// This folder should only export the styled JSONs for each component in flowbite
const customTheme = {
  ...Badge,
  ...Tab,
  ...Footer,
  ...Button,
  ...TextInput,
  ...Sidebar,
  ...Spinner,
  ...ToggleSwitch,
  ...Textarea,
  ...Checkbox,
  ...Toast,
  ...Tooltip,
  ...Modal,
  ...Select,
  ...Progress,
}

export default customTheme
