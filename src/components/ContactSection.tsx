import React, { useState, forwardRef } from 'react';
import { Mail, Phone, MapPin, Printer, Send, CheckCircle2, AlertCircle, Building2, User, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/wescoData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection = forwardRef<HTMLElement, ContactSectionProps>(({ initialSubject }, ref) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: initialSubject || 'Product Specification / BIM Submittal',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please provide a contact phone number.';
    }
    if (!formData.company.trim()) {
      errs.company = 'Please enter your company or engineering firm name.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please describe your project, inquiry, or requested lines (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setReferenceId(`DW-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      inquiryType: 'Product Specification / BIM Submittal',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section ref={ref} id="contact" className="py-20 lg:py-28 bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Section 06 · Direct Representation Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Contact Our Sales Engineers
            </h2>
          </div>
          <p className="text-slate-300 max-w-md text-sm sm:text-base leading-relaxed font-body">
            Speak directly with our local Webster Groves agency representatives regarding specifications, wholesale pricing, or job takeoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-xl font-bold font-display text-white mb-3">
                Donahue-Wesco Group LLC
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-body mb-6">
                Independent manufacturer&apos;s representative for commercial plumbing, valves, and water-efficiency technology.
              </p>

              <div className="space-y-4 text-sm text-slate-300 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Office Address</span>
                    <span>{COMPANY_INFO.address.street}</span>
                    <br />
                    <span>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</span>
                    <div className="text-xs text-slate-400 mt-0.5">Webster Groves / St. Louis Metro</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Main Office Telephone</span>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.mainOffice.replace(/[^0-9]/g, '')}`}
                      className="text-blue-400 hover:text-blue-300 font-mono transition-colors"
                    >
                      {COMPANY_INFO.contacts.mainOffice}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Direct Agency Fax</span>
                    <span className="font-mono text-slate-300">{COMPANY_INFO.contacts.fax}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Business Hours</span>
                    <span>Monday – Friday: 7:30 AM – 4:30 PM CST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Representatives Roster */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Direct Rep Dispatch
              </h4>

              <div className="p-3.5 rounded bg-slate-800/80 border border-slate-700/80 text-xs">
                <div className="font-bold text-white text-sm">Dan Donahue</div>
                <div className="text-slate-300 mt-0.5">Principal / Southern IL &amp; MO Sales</div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-blue-400 font-mono">
                  <a href="tel:3144062443" className="hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>(314) 406-2443</span>
                  </a>
                  <span>·</span>
                  <a href="mailto:dand@donahuesales.com" className="hover:underline flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span>dand@donahuesales.com</span>
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded bg-slate-800/80 border border-slate-700/80 text-xs">
                <div className="font-bold text-white text-sm">Norm Halliday</div>
                <div className="text-slate-300 mt-0.5">Partner / St. Louis Operations Lead</div>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-blue-400 font-mono">
                  <a href="tel:3142201546" className="hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>(314) 220-1546</span>
                  </a>
                  <span>·</span>
                  <a href="mailto:norm.halliday@wescostl.com" className="hover:underline flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span>norm.halliday@wescostl.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Functional Form */}
          <div className="lg:col-span-7 bg-white text-slate-800 rounded-xl p-8 sm:p-10 shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your project inquiry has been assigned reference ID <code className="font-mono text-blue-600 font-bold">{referenceId}</code> and routed directly to our St. Louis desk. A representative will contact you within 4 business hours.
                </p>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg max-w-sm mx-auto text-xs text-left space-y-1.5 text-slate-600">
                  <div><strong>Company:</strong> {formData.company}</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Inquiry Type:</strong> {formData.inquiryType}</div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    Project &amp; Spec Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct channel for engineers, architects, mechanical contractors, and wholesale supply houses.
                  </p>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller, PE"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-md border transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      } outline-none`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Engineering Firm *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Midwest Mechanical / Ferguson"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-md border transition-all ${
                        errors.company
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      } outline-none`}
                    />
                    {errors.company && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.company}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-md border transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      } outline-none`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="(314) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs rounded-md border transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                          : 'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                      } outline-none`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Inquiry Type / Subject
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-md border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none bg-white text-slate-800"
                  >
                    <option value="Product Specification / BIM Submittal">Product Specification / BIM Submittal</option>
                    <option value="Wholesale Distributor Order / Stocking">Wholesale Distributor Order / Stocking</option>
                    <option value="Niagara Conservation 0.8 GPF Toilets">Niagara Conservation 0.8 GPF Toilets</option>
                    <option value="Legend Valve Commercial &amp; Press Solutions">Legend Valve Commercial &amp; Press Solutions</option>
                    <option value="Speakman Emergency &amp; Hospitality Fixtures">Speakman Emergency &amp; Hospitality Fixtures</option>
                    <option value="Diamond Tub &amp; Showers ADA Units">Diamond Tub &amp; Showers ADA Units</option>
                    <option value="Contractor Job Takeoff / Pre-Bid Quote">Contractor Job Takeoff / Pre-Bid Quote</option>
                    <option value="Master Line Card Request">Master Line Card Request</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Details / Questions *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide project name, location, required quantities, or specific engineering questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs rounded-md border transition-all ${
                      errors.message
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
                    } outline-none`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide text-white bg-[#0A1628] hover:bg-blue-700 rounded-md transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to St. Louis Team</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    Direct routing to Dan Donahue &amp; Norm Halliday · No spam policy
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';
