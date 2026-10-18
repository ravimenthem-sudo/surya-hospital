import React, { useState } from "react";
import { X, AlertCircle, CheckCircle2, HeartPulse } from "lucide-react";
import { Button } from "../ui/Button";

export function AppointmentModal({ isOpen, onClose, defaultDepartment = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: defaultDepartment || "General Medicine",
    date: "",
    note: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      department: "General Medicine",
      date: "",
      note: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surya-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-surya-slate-200 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-surya-navy-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surya-navy-800 flex items-center justify-center text-surya-teal-400 ring-1 ring-surya-teal-500/20">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Book an Appointment</h3>
              <p className="text-xs text-surya-slate-300">Surya Hospital • Anantapur</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-surya-slate-400 hover:text-white hover:bg-surya-navy-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Emergency Triage Notice */}
        <div className="bg-surya-emergency-50 border-b border-surya-emergency-100 p-3.5 px-6 flex items-start gap-2.5 text-xs text-surya-emergency-800">
          <AlertCircle className="w-4 h-4 text-surya-emergency-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Urgent Medical Need?</span> For acute chest pain, trauma, or breathing distress, visit our <strong>24/7 Emergency Care</strong> directly without waiting for a scheduled appointment.
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-surya-slate-900">
                Appointment Request Submitted
              </h4>
              <p className="text-sm text-surya-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. The Surya Hospital front desk coordinator will contact you at <strong>{formData.phone}</strong> to confirm your consultation timing.
              </p>
              <div className="pt-2">
                <Button variant="primary" onClick={handleReset}>
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-surya-slate-700 uppercase tracking-wider mb-1.5">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter patient full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-surya-slate-300 focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-surya-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-surya-slate-300 focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none transition"
                />
              </div>

              <div className="input-row-half">
                <div>
                  <label className="block text-xs font-semibold text-surya-slate-700 uppercase tracking-wider mb-1.5">
                    Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-surya-slate-300 bg-white focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none transition"
                  >
                    <option value="General Medicine">General Medicine</option>
                    <option value="General Surgery">General Surgery</option>
                    <option value="Laparoscopic Surgery">Laparoscopic Surgery</option>
                    <option value="Orthopedic Surgery">Orthopedic Surgery</option>
                    <option value="Day-Care Surgery">Day-Care Surgeries</option>
                    <option value="Physiotherapy & Rehab">Physiotherapy & Rehab</option>
                    <option value="Diagnostic Lab & Imaging">Diagnostics & Imaging</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-surya-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-surya-slate-300 focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-surya-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Medical Concern (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention brief symptoms or specialist requested..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-surya-slate-300 focus:border-surya-teal-600 focus:ring-2 focus:ring-surya-teal-500/20 outline-none transition resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button variant="ghost" size="md" onClick={onClose}>
                  Cancel
                </Button>
                <Button variant="primary" size="md" type="submit">
                  Confirm Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
