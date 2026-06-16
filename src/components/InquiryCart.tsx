import { ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';

const WHATSAPP_URL = "https://wa.me/61489995818";

export default function InquiryCart() {
  const { items, removeItem, getTotalItems, clearInquiry } = useInquiry();
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const message = items
      .map((item) => `${item.quantity}x ${item.productName} (${item.dosage})`)
      .join('\n');

    const encodedMessage = encodeURIComponent(
      `Hi Biogenix Labs, I'd like to request a quote for:\n\n${message}\n\nPlease provide pricing and availability.`
    );

    window.open(`${WHATSAPP_URL}?text=${encodedMessage}`, '_blank');
    clearInquiry();
    setIsOpen(false);
  };

  if (totalItems === 0) return null;

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 bg-gold-500 text-navy-900 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-40 bg-white rounded-xl shadow-2xl border border-navy-900/10 w-80 max-h-96 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-navy-900 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">Your Inquiry ({totalItems})</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-navy-800 p-1 rounded transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.productId}
                className="flex items-start justify-between bg-navy-900/5 p-3 rounded-lg"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-navy-900">{item.productName}</p>
                  <p className="text-xs text-navy-900/60">{item.dosage}</p>
                  <p className="text-xs font-mono text-gold-600 mt-1">Qty: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeItem(item.productId)}
                  className="text-red-500 hover:text-red-600 p-1"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-navy-900/10 p-4 space-y-2">
            <button
              onClick={handleCheckout}
              className="w-full bg-gold-500 text-navy-900 font-semibold py-3 rounded-lg hover:bg-gold-600 transition-colors"
            >
              Send Inquiry via WhatsApp
            </button>
            <button
              onClick={() => {
                clearInquiry();
                setIsOpen(false);
              }}
              className="w-full text-navy-900/60 hover:text-navy-900 text-sm transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </>
  );
}
