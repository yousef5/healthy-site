"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { useEffect, useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import Footer from "../Footer/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsIndex() {
  const params = useParams();
  const [isArabic, setIsArabic] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = useTranslations("ContactUs");

  useEffect(() => {
    if (params.locale) {
      setIsArabic(params.locale === "ar");
    }
  }, [params.locale]);

  const headingFontStyle = {
    fontFamily: isArabic ? "var(--font-cairo)" : "var(--font-inter)",
    fontWeight: isArabic ? 700 : 600,
  };

  const bodyFontStyle = {
    fontFamily: isArabic ? "var(--font-tajawal)" : "var(--font-inter)",
    fontWeight: isArabic ? 400 : 400,
  };

  const contactInfo = useMemo(
    () => [
      {
        id: "phone",
        icon: Phone,
        title: t("phone"),
        value: "+20 050 2338989",
        link: "tel:+20502338989",
        gradient: "from-emerald-500 to-teal-500",
      },
      {
        id: "email",
        icon: Mail,
        title: t("email"),
        value: "info@healthy.com.eg",
        link: "mailto:info@healthy.com.eg",
        gradient: "from-blue-500 to-cyan-500",
      },
      {
        id: "address",
        icon: MapPin,
        title: t("address"),
        value: "17 Sherif El-Rady St., Old Tawriel, Mansoura, Egypt",
        valueAr: "17 شارع شريف الراضي، عمارة هيلثي، توريل القديمة، المنصورة، مصر",
        link: "https://maps.google.com/?q=17+Sherif+El-Rady+St.,+Old+Tawriel,+Mansoura",
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "hours",
        icon: Clock,
        title: isArabic ? "ساعات العمل" : "Working Hours",
        value: "Sunday - Thursday: 9AM - 5PM",
        valueAr: "الأحد - الخميس: ٩ ص - ٥ م",
        gradient: "from-orange-500 to-red-500",
      },
    ],
    [t, isArabic]
  );

  const socialLinks = useMemo(
    () => [
      {
        name: "Facebook",
        url: "https://www.facebook.com/HealthyCure2020",
        icon: Facebook,
        color: "hover:text-blue-500",
        bg: "hover:bg-blue-500/10",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/healthycure_insta/",
        icon: Instagram,
        color: "hover:text-pink-500",
        bg: "hover:bg-pink-500/10",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@healthycure105",
        icon: Youtube,
        color: "hover:text-red-500",
        bg: "hover:bg-red-500/10",
      },
    ],
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center min-h-screen bg-background"
        dir={isArabic ? "rtl" : "ltr"}
        role="main"
        aria-label={isArabic ? "صفحة اتصل بنا" : "Contact us page"}
      >
        {/* Hero Section */}
        <header className="w-full bg-gradient-to-br from-primary/10 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 py-20 md:py-28 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                style={headingFontStyle}
              >
                {t("title")}
              </h1>
              <p
                className="text-xl md:text-2xl text-foreground/70 mb-6"
                style={bodyFontStyle}
              >
                {t("subtitle")}
              </p>
              <p
                className="text-lg text-foreground/60 max-w-2xl mx-auto"
                style={bodyFontStyle}
              >
                {t("description")}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Contact Information Cards */}
        <section className="w-full py-16 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.link || "#"}
                  target={item.link?.startsWith("http") ? "_blank" : undefined}
                  rel={item.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-2"
                    style={headingFontStyle}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-foreground/70 leading-relaxed ${
                      item.id === "phone"
                        ? "text-base font-bold tracking-wide"
                        : "text-sm"
                    }`}
                    style={{
                      ...bodyFontStyle,
                      ...(item.id === "phone" && { fontVariantNumeric: "tabular-nums" }),
                    }}
                  >
                    {isArabic && item.valueAr ? item.valueAr : item.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section with Form and Map */}
        <section className="w-full py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={headingFontStyle}
                      >
                        {isArabic ? "أرسل لنا رسالة" : "Send us a Message"}
                      </h2>
                      <p className="text-foreground/60 text-sm" style={bodyFontStyle}>
                        {isArabic ? "سنقوم بالرد عليك في أقرب وقت ممكن" : "We'll get back to you as soon as possible"}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2"
                          style={bodyFontStyle}
                        >
                          {isArabic ? "الاسم الكامل" : "Full Name"}
                          <span className="text-red-500 mr-1">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder={isArabic ? "أدخل اسمك الكامل" : "Enter your full name"}
                            style={bodyFontStyle}
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2"
                          style={bodyFontStyle}
                        >
                          {isArabic ? "البريد الإلكتروني" : "Email Address"}
                          <span className="text-red-500 mr-1">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder={isArabic ? "example@email.com" : "example@email.com"}
                            style={bodyFontStyle}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-2"
                          style={bodyFontStyle}
                        >
                          {isArabic ? "رقم الهاتف" : "Phone Number"}
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder={isArabic ? "+20 123 456 7890" : "+20 123 456 7890"}
                            style={bodyFontStyle}
                          />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold mb-2"
                          style={bodyFontStyle}
                        >
                          {isArabic ? "الموضوع" : "Subject"}
                          <span className="text-red-500 mr-1">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            placeholder={isArabic ? "موضوع الرسالة" : "Message subject"}
                            style={bodyFontStyle}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2"
                        style={bodyFontStyle}
                      >
                        {isArabic ? "الرسالة" : "Your Message"}
                        <span className="text-red-500 mr-1">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                        placeholder={isArabic ? "اكتب رسالتك هنا..." : "Write your message here..."}
                        style={bodyFontStyle}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                      style={bodyFontStyle}
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {isArabic ? "جاري الإرسال..." : "Sending..."}
                        </>
                      ) : formStatus === "success" ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          {isArabic ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {isArabic ? "إرسال الرسالة" : "Send Message"}
                        </>
                      )}
                    </button>

                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-700 dark:text-green-400" style={bodyFontStyle}>
                          {isArabic
                            ? "شكراً لتواصلك معنا! سنقوم بالرد على رسالتك في أقرب وقت ممكن."
                            : "Thank you for contacting us! We'll respond to your message as soon as possible."}
                        </p>
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Map and Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Map */}
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-xl h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.5059661773285!2d31.39739915704749!3d31.050921962661984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAzJzAzLjMiTiAzMcKwMjMnNTAuNiJF!5e0!3m2!1sen!2sus!4v1719146792517!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Healthy Pharma Location - Mansoura, Egypt"
                  />
                </div>

                {/* Social Media */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-xl">
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2"
                    style={headingFontStyle}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {isArabic ? "تابعنا على" : "Follow Us"}
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-muted ${social.bg} flex items-center justify-center text-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                  <h3
                    className="text-lg font-bold mb-3"
                    style={headingFontStyle}
                  >
                    {isArabic ? "معلومات سريعة" : "Quick Info"}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={bodyFontStyle}>
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {isArabic ? "استجابة سريعة خلال 24 ساعة" : "Quick response within 24 hours"}
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={bodyFontStyle}>
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {isArabic ? "فريق دعم محترف ومتخصص" : "Professional support team"}
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={bodyFontStyle}>
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {isArabic ? "خدمة عملاء متوفرة طوال أيام الأسبوع" : "Customer service available all week"}
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
