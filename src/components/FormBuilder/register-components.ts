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
import { renderProductList } from "./input-components/ProductList"
import { renderAppointment } from "./input-components/Appointment"
import { renderStarRating } from "./input-components/StarRating"
import { renderFeedbackTable } from "./input-components/Feedback"
import { renderSignature } from "./input-components/Signature"
import { renderDateRange } from "./input-components/DataRange"
import { renderPhoneWithCode } from "./input-components/PhoneWithCode"
import { renderPriceRange } from "./input-components/PriceRange"
import { renderPricingTier } from "./input-components/PricingTier"
import { renderSocialLinks } from "./input-components/SocialLinks"
import { renderFileGallery } from "./input-components/FileGallery"

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
registerComponent("productList", renderProductList)
registerComponent("appointment", renderAppointment)
registerComponent("starRating", renderStarRating)
registerComponent("feedbackTable", renderFeedbackTable)
registerComponent("signature", renderSignature)
registerComponent("dateRange", renderDateRange)
registerComponent("phoneWithCode", renderPhoneWithCode)
registerComponent("priceRange", renderPriceRange)
registerComponent("pricingTier", renderPricingTier)
registerComponent("socialLinks", renderSocialLinks)
registerComponent("fileGallery", renderFileGallery)

export const initializeComponents = () => {
  // All components are registered above
  console.log("Form components initialized")
}