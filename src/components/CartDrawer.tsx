import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-[60] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-navy-900/5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-navy-900" size={24} />
            <h2 className="text-navy-900 text-xl font-bold">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-navy-900/5 rounded-full transition-colors text-navy-900/60"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
              <ShoppingBag size={48} className="text-navy-900/10 mb-4" />
              <p className="text-navy-900/50 text-lg font-medium">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 text-gold-600 font-bold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-start">
                <div className="w-20 h-20 bg-pearl-shimmer/30 rounded-xl flex items-center justify-center p-2 border border-navy-900/5">
                  <img
                    src={item.product.images?.[0] || item.product.image || '/images/products/placeholder.webp'}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-navy-900 font-bold text-sm">{item.product.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-navy-900/30 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-navy-900/50 text-xs font-mono mb-3">{item.product.dosage}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-navy-900/10 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-navy-900/5 text-navy-900/70"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-semibold text-navy-900 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-navy-900/5 text-navy-900/70"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-navy-900">
                      ${(item.product.price || 0) * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-navy-900/5 p-6 bg-pearl-shimmer/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-navy-900/60 font-medium">Subtotal</span>
              <span className="text-navy-900 text-xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-navy-900/40 text-xs text-center mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              to="/cart"
              onClick={() => setIsCartOpen(false)}
              className="btn-primary w-full flex justify-center py-4 text-base"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
