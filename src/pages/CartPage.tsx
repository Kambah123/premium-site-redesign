import { Link } from 'react-router';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="min-h-screen bg-pearl-white text-navy-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-navy-900/50 hover:text-gold-600 transition-colors mb-8 font-medium">
            <ArrowLeft size={16} />
            Back to Marketplace
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-12">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white border border-navy-900/5 rounded-3xl">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Your cart is empty</h2>
              <p className="text-navy-900/50 mb-8">Looks like you haven't added any compounds to your cart yet.</p>
              <Link to="/marketplace" className="btn-primary inline-flex items-center px-8 py-4">
                Explore Marketplace
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 bg-white p-6 border border-navy-900/5 rounded-2xl relative group">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="absolute top-6 right-6 text-navy-900/20 hover:text-red-500 transition-colors sm:hidden group-hover:block"
                    >
                      <Trash2 size={20} />
                    </button>

                    <Link to={`/marketplace/${item.product.id}`} className="w-full sm:w-32 h-32 bg-pearl-shimmer/30 rounded-xl flex items-center justify-center p-4 shrink-0">
                      <img
                        src={item.product.images?.[0] || item.product.image || '/images/products/placeholder.webp'}
                        alt={item.product.name}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/marketplace/${item.product.id}`}>
                          <h3 className="text-xl font-bold text-navy-900 hover:text-gold-600 transition-colors">{item.product.name}</h3>
                        </Link>
                        <span className="font-bold text-navy-900 text-lg hidden sm:block">
                          ${((item.product.price || 0) * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <p className="text-navy-900/50 font-mono text-sm mb-6">{item.product.dosage}</p>

                      <div className="flex items-center justify-between sm:justify-start gap-8 mt-auto">
                        <div className="flex items-center border border-navy-900/10 rounded-lg overflow-hidden bg-pearl-shimmer/20">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-4 py-2 hover:bg-white text-navy-900 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 font-semibold text-navy-900 min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-4 py-2 hover:bg-white text-navy-900 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-sm font-medium text-navy-900/40 hover:text-red-500 transition-colors hidden sm:flex items-center gap-2"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>

                        <span className="font-bold text-navy-900 text-lg sm:hidden">
                          ${((item.product.price || 0) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-navy-900 rounded-3xl p-8 sticky top-32 text-white">
                  <h2 className="text-2xl font-bold mb-8">Order Summary</h2>

                  <div className="space-y-4 mb-8 text-white/70">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-white font-medium">Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-end">
                    <span className="text-lg font-medium text-white/90">Total</span>
                    <span className="text-3xl font-bold text-gold-400">${subtotal.toFixed(2)}</span>
                  </div>

                  <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-4 rounded-full transition-colors text-lg mb-6 shadow-lg shadow-gold-500/20">
                    Proceed to Checkout
                  </button>

                  <div className="flex items-start gap-3 text-white/50 text-sm">
                    <ShieldCheck className="text-gold-500 shrink-0" size={20} />
                    <p>Secure checkout. All compounds are HPLC verified and strictly for research purposes.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
