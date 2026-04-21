import YamlJsonConverter from "./components/YamlJsonConverter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* AdSense slot - top banner */}
      <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 text-center text-xs text-gray-400">
          {/* AdSense slot */}
        </div>
      </div>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            YAML to JSON Converter
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convert between YAML and JSON instantly. Paste your data, switch
            direction, format, copy, or download. No signup required.
          </p>
        </div>

        {/* Converter Tool */}
        <YamlJsonConverter />

        {/* SEO Content Section */}
        <section className="mt-16 mb-12 max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is YAML?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            YAML (YAML Ain&apos;t Markup Language) is a human-readable data
            serialization format. It uses indentation to represent structure,
            making it easy to read and write. YAML is widely used for
            configuration files in tools like Docker Compose, Kubernetes,
            GitHub Actions, Ansible, and many other DevOps and development
            tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Is JSON?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            JSON (JavaScript Object Notation) is a lightweight data interchange
            format. It uses curly braces, brackets, and key-value pairs to
            represent structured data. JSON is the standard format for APIs,
            web services, and data storage across virtually all programming
            languages and platforms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Convert Between YAML and JSON?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While YAML and JSON can represent the same data structures, each
            format has its strengths. YAML is more readable for configuration
            files, while JSON is better for data exchange between systems.
            Developers often need to convert between the two when working with
            APIs that expect JSON but maintaining configuration in YAML, or
            when debugging YAML files by viewing them in JSON format.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use This Converter
          </h2>
          <ol className="text-gray-700 leading-relaxed space-y-2 mb-4 list-decimal list-inside">
            <li>
              <strong>Paste your YAML or JSON</strong> into the corresponding
              editor on the left or right side.
            </li>
            <li>
              <strong>Switch direction</strong> by clicking the mode toggle
              button. It switches between YAML-to-JSON and JSON-to-YAML.
            </li>
            <li>
              <strong>Edit the source side</strong> and the output updates in
              real time. Validation errors appear instantly.
            </li>
            <li>
              <strong>Format</strong> either side with the Format button to
              beautify the output.
            </li>
            <li>
              <strong>Copy or download</strong> the result with one click.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Supported YAML Features
          </h2>
          <ul className="text-gray-700 leading-relaxed space-y-2 mb-4 list-disc list-inside">
            <li>Key-value pairs and nested objects</li>
            <li>Arrays using dash syntax</li>
            <li>Strings (quoted and unquoted)</li>
            <li>Numbers, booleans, and null values</li>
            <li>Multiline strings with pipe (|) and fold (&gt;) indicators</li>
            <li>Inline arrays and objects</li>
            <li>Comments (stripped during conversion)</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>
          yaml-to-json — Free YAML to JSON Converter. No signup required.
        </p>
      </footer>

      {/* AdSense slot - bottom banner */}
      <div className="w-full bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 text-center text-xs text-gray-400">
          {/* AdSense slot */}
        </div>
      </div>
    </div>
  );
}
