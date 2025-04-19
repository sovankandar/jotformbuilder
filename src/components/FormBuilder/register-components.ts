import { registerComponent } from "./component-registry"
import { renderButton } from "./input-components/Button"
import { renderTextInput } from "./input-components/text-input"
import { renderTextarea } from "./input-components/TextArea"
import { renderSelect } from "./input-components/Select"
import { renderCheckbox } from "./input-components/CheckBox"
import { renderRadio } from "./input-components/Radio"
import { renderHeading } from "./input-components/Heading"
import { renderDivider } from "./input-components/Divider"
import { renderSectionBreak } from "./input-components/sectionBreak"
import { renderCaptcha } from "./input-components/Captcha"
import { renderFile } from "./input-components/File"
import { renderImage } from "./input-components/Image"
import { renderFullName } from "./input-components/FullName"
import { renderAddress } from "./input-components/Address"
import { renderCreditCard } from "./input-components/CreditCard"
import { ProductList } from "./input-components/ProductList"
import { renderAppointment } from "./input-components/Appointment"
import { StarRating } from "./input-components/StarRating"
import { renderFeedbackTable } from "./input-components/Feedback"
import { Signature } from "./input-components/Signature"
import { DateRange } from "./input-components/DataRange"
import { PhoneWithCode } from "./input-components/PhoneWithCode"
import { PriceRange } from "./input-components/PriceRange"
import { PricingTier } from "./input-components/PricingTier"
import { SocialLinks } from "./input-components/SocialLinks"
import { FileGallery } from "./input-components/FileGallery"

// Basic inputs
registerComponent("button", renderButton)
registerComponent("submit", renderButton)
registerComponent("text", renderTextInput)
registerComponent("email", renderTextInput)
registerComponent("password", renderTextInput)
registerComponent("number", renderTextInput)
registerComponent("tel", renderTextInput)
registerComponent("date", renderTextInput)
registerComponent("time", renderTextInput)
registerComponent("textarea", renderTextarea)
registerComponent("select", renderSelect)
registerComponent("checkbox", renderCheckbox)
registerComponent("radio", renderRadio)

// Layout components
registerComponent("heading", renderHeading)
registerComponent("divider", renderDivider)
registerComponent("sectionBreak", renderSectionBreak)

// Advanced inputs
registerComponent("captcha", renderCaptcha)
registerComponent("file", renderFile)
registerComponent("image", renderImage)
registerComponent("fullName", renderFullName)
registerComponent("address", renderAddress)
registerComponent("creditCard", renderCreditCard)
registerComponent("productList", ProductList)
registerComponent("appointment", renderAppointment)
registerComponent("starRating", StarRating)
registerComponent("feedbackTable", renderFeedbackTable)
registerComponent("signature", Signature)
registerComponent("dateRange", DateRange)
registerComponent("phoneWithCode", PhoneWithCode)
registerComponent("priceRange", PriceRange)
registerComponent("pricingTier", PricingTier)
registerComponent("socialLinks", SocialLinks)
registerComponent("fileGallery", FileGallery)

export const initializeComponents = () => {
  // All components are registered above
  console.log("Form components initialized")
}