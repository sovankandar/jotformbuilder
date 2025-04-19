import type { CommonInputProps } from "./types"

export function renderFeedbackTable({ component, isPreview, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getGridClass()} overflow-x-auto`}>
      <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Poor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fair</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Good</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Excellent
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {(
            component.feedbackFields || [
              "How would you rate our service?",
              "How was the quality of our product?",
              "How likely are you to recommend us?",
            ]
          ).map((question, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{question}</td>
              {["Poor", "Fair", "Good", "Excellent"].map((rating) => (
                <td key={rating} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="radio"
                    name={`feedback_${idx}`}
                    value={rating}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    disabled={!isPreview}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {component.required && isPreview && (
        <p className="mt-2 text-sm text-gray-500">Please provide feedback for all questions</p>
      )}
    </div>
  )
}
