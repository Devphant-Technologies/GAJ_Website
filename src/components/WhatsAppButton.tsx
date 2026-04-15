const WHATSAPP_NUMBER = "918469474903"; // +91 84694 74903
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello GAJ Manufacturing Works,\n\nI'm interested in your products/services and would like to get more details.\n\nPlease share information about:\n- Process Equipment (Reactor Vessels, Heat Exchangers, Storage Tanks, etc.)\n- Industrial Maintenance Services\n- Pricing & Lead Time\n\nThank you."
);

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with GAJ Manufacturing Works on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
  >
    {/* WhatsApp SVG icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-8 h-8 fill-white"
      aria-hidden="true"
    >
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.852l-.485-.288-5.003 1.191 1.215-4.872-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.874c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.778-.653-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.854 1.627 4.12c.199.266 2.81 4.29 6.808 6.018.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.766-.114 2.355-.963 2.688-1.893.332-.93.332-1.727.232-1.893-.099-.166-.365-.266-.763-.465z" />
    </svg>
  </a>
);

export default WhatsAppButton;
